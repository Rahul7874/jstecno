const mongoose = require("mongoose")

const PositionSchema = mongoose.Schema({

    department_id: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      created_at: {
        type: Date,
        default: Date.now
      },
      updated_at: {
        type: Date,
        default: Date.now
      }

})

const PositionModel = mongoose.model("position", PositionSchema)

module.exports = {
    PositionModel
}