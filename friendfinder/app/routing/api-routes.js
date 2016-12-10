// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information
// ===============================================================================

var friendsData = require("../data/friends.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    
    friendsData.push(res);
    console.log(res);
  });

