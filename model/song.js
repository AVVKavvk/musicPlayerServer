const mongoose = require("mongoose");
const SongSchema = mongoose.Schema(
  {
    song: {
      type: String,
      required: true,
    },
    singer: {
      type: String,
      default : ""
    },
    description: {
      type: String,
      default: ""
    },
    image :{
      type: String,
      default:""
    }
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Music", SongSchema);