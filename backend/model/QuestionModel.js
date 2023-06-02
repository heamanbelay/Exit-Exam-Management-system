const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    text: {
      type: String,
      required: true
    },
    isImage: {
      type: Boolean,
      required: false
    }
  },
  options: [{
    text: {
      type: String,
      required: true
    },
    isImage: {
      type: Boolean,
      required: false    }
  }],
  correctAnswer: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Question', questionSchema);
