const Booking = require('../Model/Bookings');

const Bookpackage = async (req, res) => {
    try {
        console.log(req.params);
        const { user_id, package_id } = req.params;
        // console.log(user_id);
        const booking = await Booking.create({
            user_id,
            package_id,
        });
        res.status(200).send(booking);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}; 

const viewBooking = async(req,res)=>{
    try {
        const view = await Booking.find();
        if(!view){
            res.status(404).json({ msg: "Failed to get data" });
        }
        res.status(200).send(view);
    } catch (error) {
        res.status(500).json({ msg: error.message });

    }
}

module.exports = {
    Bookpackage,
    viewBooking
}
