const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const diseaseRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
diseaseRoutes.route("/diseases").get( async function (req, res) {
 let db_connect = dbo.getDb();

 try{
    var disease = await db_connect
    .collection("Diseases")
    .find({})
    .toArray();
    res.json(disease);
 } catch(e) {
  console.log("An error occurred pulling the diseases. " + e);
 }
});


diseaseRoutes.route("/disease/:id").get(async function (req, response) {
  let db_connect = dbo.getDb();

  try {
    let myquery = { "_id" : new ObjectId(req.params.id) };
    var disease = await db_connect
      .collection("Diseases")
      .findOne(myquery)
    response.json(disease);
  } catch (e) {
    console.log("An error occurred pulling the disease. " + e);
  }

});

diseaseRoutes.route("/diseases/add").post( async function (req, response) {
  let db_connect = dbo.getDb();
  try{
     let myobj = {
      name: req.body.name,
      description: req.body.description,
      plant: req.body.plant,
      images: req.body.images,
      treatments: req.body.treatments
     };
       var res = await db_connect
         .collection("Diseases")
         .insertOne(myobj);
       response.json(res);
   }catch(e){
     console.log("An error occurred adding the disease. " + e);
   }
 });


diseaseRoutes.route("/diseases/update/:id").post( async function (req, response) {
  let db_connect = dbo.getDb();
  try{
    let myquery = { _id: new ObjectId(req.params.id) };
    let newvalues = {
      $set: {
        name: req.body.name,
        description: req.body.description,
        plant: req.body.plant,
        images: req.body.images,
        treatments: req.body.treatments
      },
    };
    var disease = await db_connect
      .collection("Diseases")
      .updateOne(myquery, newvalues)
    response.json(disease);
  }catch(e){
    console.log("An error occurred updating the disease. " + e);
  }
});

diseaseRoutes.route("/diseases/:id").delete(async function(req, response) {
  let db_connect = dbo.getDb();
  try{
    let myquery = { _id: new ObjectId(req.params.id) };
    var res = await db_connect
      .collection("Diseases")
      .deleteOne(myquery)
    response.json(res);
  }catch(e){
    console.log("An error occurred deleting the disease. " + e);
  }
});
 
module.exports = diseaseRoutes;