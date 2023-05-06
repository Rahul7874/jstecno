const mongoose = require("mongoose")

const DepartmentSchema = mongoose.Schema({

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

const DepartmentModel = mongoose.model("department", DepartmentSchema)

module.exports = {
    DepartmentModel
}