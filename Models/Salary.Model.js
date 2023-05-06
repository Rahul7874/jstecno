const mongoose = require("mongoose")

const SalarySchema = mongoose.Schema({

    position_id: {
        type: String,
        required: true
      },
      basic_salary: {
        type: Number,
        required: true
      },
      hra: {
        type: Number,
        required: true
      },
      da: {
        type: Number,
        required: true
      },
      other_allowances: {
        type: Number,
        default: 0
      },
      gross_salary: {
        type: Number,
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

const SalaryModel = mongoose.model("salary", SalarySchema)

module.exports = {
    SalaryModel
}