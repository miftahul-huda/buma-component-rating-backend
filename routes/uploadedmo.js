var express = require('express');
var router = express.Router();

const UploadeMOLogic = require('../modules/logic/uploadedmologic')


router.post('/create', function (req, res){
  let mo = req.body;

  UploadeMOLogic.create(mo).then(function (savedUploadeMO)
  {
    res.send(savedUploadeMO);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

router.get('', function (req, res){
  UploadeMOLogic.findAll().then(function (mos)
  {
    res.send(mos);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})


router.get('/find/:keyword', function (req, res){
  let search = req.params.keyword;
  UploadeMOLogic.findAll(search).then(function (savedUploadeMO)
  {
    res.send(savedUploadeMO);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

router.get('/get/:id', function (req, res){
  let id = req.params.id;
  UploadeMOLogic.get(id).then(function (mo)
  {
    res.send(mo);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

router.post('/update/:id', function (req, res){
  let mo = req.body;
  let id = req.params.id;

  UploadeMOLogic.update(id, mo).then(function (savedUploadeMO)
  {
    res.send(savedUploadeMO);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

router.get('/delete/:id', function (req, res){
  let id = req.params.id;

  UploadeMOLogic.delete(id).then(function (result)
  {
    res.send(result);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

module.exports = router;
