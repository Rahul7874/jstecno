const mongoose = require("mongoose")

const AttendanceSchema = mongoose.Schema({

    employee_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
      },
      in_time: {
        type: Date,
        required: true
      },
      out_time: {
        type: Date,
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

const AttendanceModel = mongoose.model("attendance", AttendanceSchema)

module.exports = {
    AttendanceModel
}