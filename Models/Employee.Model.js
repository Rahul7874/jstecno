const mongoose = require("mongoose")

const EmployeeSchema = mongoose.Schema({

    department_id: {
        type: String,
        required: true
      },
      position_id: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      phone_number: {
        type: String
      },
      address: {
        type: String
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

const EmployeeModel = mongoose.model("employee", EmployeeSchema)

module.exports = {
    EmployeeModel
}