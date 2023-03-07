const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const plantRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 /*
// This section will help you get a list of all the records.
plantRoutes.route("/plants").get( async function (req, res) {
 let db_connect = dbo.getDb("Khudr");
  db_connect
   .collection("Plants")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});*/

// This section will help you get a single record by id
plantRoutes.route("/plant/:id").get(async function (req, response) {
  console.log("allo");
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

// This section will help you create a new record.
plantRoutes.route("/plants/add").post( async function (req, response) {
  let db_connect = dbo.getDb();
  try{
     let myobj = {
       name: req.body.name,
       diseases: req.body.diseases
     };
       console.log("auu1");
       var res = await db_connect
         .collection("Plants")
         .insertOne(myobj);
       response.json(res);
   }catch(e){
     console.log("An error occurred adding the plant. " + e);
   }
 });
 
 /*
// This section will help you get a single record by id
plantRoutes.route("/plants/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("Plants")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
*/
// This section will help you update a record by id.
plantRoutes.route("/plants/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
     name: req.body.name,
     diseases: req.body.diseases
   },
 };
 db_connect
   .collection("Plants")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 
// This section will help you delete a record
plantRoutes.route("/plants/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("Plants").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = plantRoutes;