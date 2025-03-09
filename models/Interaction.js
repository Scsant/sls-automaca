import mongoose from "mongoose";

const interactionSchema = new mongoose.Schema({
  userMessage: { type: String, required: true },
  botResponse: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Interaction = mongoose.model("Interaction", interactionSchema);
export default Interaction;
