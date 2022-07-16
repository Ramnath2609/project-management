const mongoose = require("mongoose")

const Schema = mongoose.Schema;


const ProjecSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  status: {
    type: String,
    enum: ['In Progress', 'Not Started', 'Completed']
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client'
  }
})

const Project = mongoose.model('Project', ProjecSchema);

module.exports = Project;