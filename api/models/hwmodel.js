import mongoose from "mongoose";

const Hwschema = new mongoose.Schema({
    subject: {
        type: String,
        required: true,
        unique: false,
    },
    person: {
        type: String,
        required: true,
        unique: false,
    },
    returned: {
        type: Boolean,
        default: false,
        required: false,
        unique: false
    }
}, { timestamps: true });

const Hwmodel = mongoose.model('Hw', Hwschema);

export default Hwmodel;
