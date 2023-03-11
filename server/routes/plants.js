const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const plantRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 

// This section will help you get a list of all the records.
plantRoutes.route("/plants").get(async function (req, response) {
  let db_connect = dbo.getDb();

  try {
    var plants = await db_connect
      .collection("Plants")
      .find({})
      .toArray();
    response.json(plants);
  } catch (e) {
    console.log("An error occurred pulling the plants. " + e);
  }

});

plantRoutes.route("/plant/:id").get(async function (req, response) {
  let db_connect = dbo.getDb();
  try {
    let myquery = { "_id" : new ObjectId(req.params.id) };
    //let myprojection = {"name" : 1};
    var plant = await db_connect
      .collection("Plants")
      .findOne(myquery)
    response.json(plant);
  } catch (e) {
    console.log("An error occurred pulling the plant. " + e);
  }

});

// This section will help you create a new record.
plantRoutes.route("/plants/add").post( async function (req, response) {
  let db_connect = dbo.getDb();
  try{
     let myobj = {
       name: req.body.name,
       diseases: req.body.diseases
     };
       var res = await db_connect
         .collection("Plants")
         .insertOne(myobj);
       response.json(res);
   }catch(e){
     console.log("An error occurred adding the plant. " + e);
   }
 });
 

plantRoutes.route("/plants/update/:id").post(async function (req, response) {
  let db_connect = dbo.getDb();
  try{
    let myquery = { _id: new ObjectId(req.params.id) };
    let newvalues = {
      $set: {
        name: req.body.name,
        diseases: req.body.diseases
      },
    };
    var plant = await db_connect
      .collection("Plants")
      .updateOne(myquery, newvalues)
    response.json(plant);
  }catch(e){
    console.log("An error occurred updating the plant. " + e);
  }
});


plantRoutes.route("/plants/:id").delete(async function(req, response) {
  let db_connect = dbo.getDb();
  try{
    let myquery = { _id: new ObjectId(req.params.id) };
    var res = await db_connect
      .collection("Plants")
      .deleteOne(myquery)
    response.json(res);
  }catch(e){
    console.log("An error occurred deleting the plant. " + e);
  }
});
 
module.exports = plantRoutes;