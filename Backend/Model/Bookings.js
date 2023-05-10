
const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({
    Booking_Status :{
        type : String,
        enum:['completed','pending','cancelled'],
        default: "pending"
    },
    user_id:{
        type: mongoose.Types.ObjectId,
        ref: 'users'
    },
    package_id:{
        type: mongoose.Types.ObjectId,
        ref: 'Packages'
    },
    Booking_date:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("bookings",BookingSchema);
