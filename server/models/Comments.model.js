const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  author: { type: mongoose.Schema.Types.String, ref: "User" },
  text: {
    type: String,
  },
  stars: {
    type: Number,
  },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
