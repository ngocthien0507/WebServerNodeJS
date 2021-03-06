const mongoose = require("mongoose");
const User = require("./TaiKhoan.model");
const Travel = require("./HanhTrinh.model");
var scheduleSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
  },
  destination: {
    type: String,
    ref: "Destination",
    required: true,
  },
  number_of_days: Number,
  schedule_detail: {
    day_1: [{ type: String, ref: "TouristDesination" }],
    day_2: [{ type: String, ref: "TouristDesination" }],
    day_3: [{ type: String, ref: "TouristDesination" }],
    day_4: [{ type: String, ref: "TouristDesination" }],
    day_5: [{ type: String, ref: "TouristDesination" }],
    day_6: [{ type: String, ref: "TouristDesination" }],
    day_7: [{ type: String, ref: "TouristDesination" }],
  },
  copy_reference: {
    type: String,
    ref: "Travel",
  },
  copy_list: [{ type: String, ref: "TouristDesination" }],
  status: String,
  create_at: Date,
  update_at: Date,
});
var Schedule = mongoose.model("Schedule", scheduleSchema, "LichTrinh");
module.exports = Schedule;
