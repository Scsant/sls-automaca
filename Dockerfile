# Usa uma imagem leve do Node.js para construir o projeto
FROM node:18-alpine AS builder

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos de dependências primeiro (para otimizar o cache do Docker)
COPY package.json package-lock.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todos os arquivos do projeto
COPY . .

# Compila o projeto React para produção
RUN npm run build

# Usa um servidor Nginx para servir os arquivos do React
FROM nginx:alpine

# Copia os arquivos do build para a pasta pública do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expõe a porta do servidor
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
