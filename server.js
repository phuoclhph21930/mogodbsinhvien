const express = require('express')
const app = express()
const port = 3000
const SinhVienModel = require('./db');


const mongoose = require('mongoose');

const uri = 'mongodb+srv://phuoclhph21930:phuoc2003@cluster0.taa39pz.mongodb.net/sinvin';

//const nvModel = require('./nhanvienModel');

app.get('/', async (req, res) => {

  await mongoose.connect(uri);

  console.log('Ket noi db thanh cong!')

  let sinhviens = await SinhVienModel.find();
  res.send(sinhviens);

  //await mongoose.connect(uri);

  //let nvs = await nvModel.find({tuoi: 23});

  //   console.log(nvs)

  //   res.send(nvs);
})

app.get('/add_sv', async (req, res) => {
  await mongoose.connect(uri);

  arrNewNv = [];

  let sv1 = {
    ten: 'Tran Phuong Anh',
    tuoi: "32",
    quequan: 'HP',
    diemTB:"32"
  };

  arrNewNv.push(sv1);

  arrNewNv.push({
    ten: 'Nguyen Tuan Minh',
    tuoi: "32",
    quequan: 'HG',
    diemTB: "3"
  });

  let kq = await SinhVienModel.collection.insertOne(sv1);

  console.log(kq);

  let sinhviens = await SinhVienModel.find();
  res.send(sinhviens);
})

app.get('/update_sv/:ten', async (req, res) => {

  await mongoose.connect(uri);

  console.log('Ket noi DB thanh cong');

  let tenSV = req.params.ten;
  console.log(tenSV);

  let tenSVMoi = tenSV + ' 123';

  await SinhVienModel.updateOne({ten: tenSV}, {ten: tenSVMoi, tuoi: "3", quequan: "HCM"});

  let sinhviens = await SinhVienModel.find({});

  res.send(sinhviens);

})

app.get('/xoa/:id', async (req, res) => {

  await mongoose.connect(uri);

  console.log('Ket noi DB thanh cong');

  let id = req.params.id;
  console.log(id);

  await SinhVienModel.deleteOne({_id: id});

  res.redirect('../')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});