var express = require('express');
var router = express.Router();

const ModelComponentLogic = require('../modules/logic/modelcomponentlogic')


router.post('/create', function (req, res){
  let mo = req.body;
  mo.date = new Date();

  ModelComponentLogic.create(mo).then(function (savedMO)
  {
    res.send(savedMO);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

router.get('', function (req, res){

  ModelComponentLogic.findAll().then(function (mos)
  {
    res.send(mos);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

router.get('/total', function (req, res){

  ModelComponentLogic.total().then(function (mos)
  {
    res.send(mos);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

router.get('/find/:keyword', function (req, res){
  let search = req.params.keyword;

  ModelComponentLogic.findAll(search).then(function (savedMO)
  {
    res.send(savedMO);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

router.get('/findbymodel/:model', function (req, res){
  let search = req.params.model;

  ModelComponentLogic.findByModel(search).then(function (savedMO)
  {
    res.send(savedMO);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

router.get('/findbymodelpstype/:model/:pstype', function (req, res){
  let model = req.params.model;
  let pstype = req.params.pstype;

  ModelComponentLogic.findByModelAndPsType(model, pstype).then(function (savedMO)
  {
    res.send(savedMO);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

router.get('/get/:id', function (req, res){
  let id = req.params.id;

  ModelComponentLogic.get(id).then(function (mo)
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

  ModelComponentLogic.update(id, mo).then(function (savedMO)
  {
    res.send(savedMO);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

router.get('/delete/:id', function (req, res){
  let id = req.params.id;

  ModelComponentLogic.delete(id).then(function (result)
  {
    res.send(result);
  }).catch(function (err){
    console.log("error")
    res.send(err);
  })
})

module.exports = router;
