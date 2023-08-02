const mongoose = require('mongoose');

const SinhVienSchema = mongoose.Schema({
    ten: {
        type: String,
        required: true,
    },
    tuoi: {
        type: String,
        required: true,
    },
    quequan: {
        type: String
    },
    diemTB: {
        type: String,
        required: true,
    }
});

const SinhVienModel = new mongoose.model('sinhvs', SinhVienSchema); 

module.exports = SinhVienModel;