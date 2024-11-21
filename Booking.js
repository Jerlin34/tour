const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true }, // Add age field here
  destination: { type: String, required: true },
  date: { type: Date, required: true }
});

module.exports = mongoose.model('Booking', bookingSchema);
