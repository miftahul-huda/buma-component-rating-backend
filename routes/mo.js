var express = require('express');
var router = express.Router();

const MOLogic = require('../modules/logic/mologic')


router.post('/create', function (req, res){
  let mo = req.body;
  mo.date = new Date();

  MOLogic.create(mo).then(function (savedMO)
  {
    res.send(savedMO);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

router.get('/', function (req, res){

  MOLogic.findAll().then(function (mos)
  {
    res.send(mos);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

router.get('/totalall', function (req, res){

  MOLogic.getTotalAll().then(function (mos)
  {
    res.send(mos);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

router.get('/find/:keyword', function (req, res){
  let search = req.params.keyword;

  MOLogic.findAll(search).then(function (savedMO)
  {
    res.send(savedMO);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

router.get('/get/:id', function (req, res){
  let id = req.params.id;

  MOLogic.get(id).then(function (mo)
  {
    res.send(mo);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})


router.get('/findnotclosedbylocation/:location', function (req, res){
  let location = req.params.location;
  MOLogic.findNotClosedByLocation(location).then(function (mos)
  {
    res.send(mos);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

router.get('/totalnotclosedbylocation/:location', function (req, res){
  let location = req.params.location;
  MOLogic.totalNotClosedByLocation(location).then(function (mos)
  {
    res.send(mos);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

router.get('/update/:id/:sync', function (req, res){
  let id = req.params.id;
  let sync = req.params.sync;
  console.log(sync);

  MOLogic.updateSync(id, sync).then(function (savedMO)
  {
    res.send(savedMO);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

router.get('/close/:monumber', function (req, res){
  let monumber = req.params.monumber;
  let closed = 1;

  MOLogic.updateClosed(monumber, closed).then(function (savedMO)
  {
    res.send(savedMO);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

router.post('/update/:id', function (req, res){
  let mo = req.body;
  let id = req.params.id;

  MOLogic.update(id, mo).then(function (savedMO)
  {
    res.send(savedMO);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

router.get('/delete/:id', function (req, res){
  let id = req.params.id;

  MOLogic.delete(id).then(function (result)
  {
    res.send(result);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

module.exports = router;
