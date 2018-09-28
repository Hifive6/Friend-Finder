const path = require("path");
const friendsData = require("../data/friends")
module.exports = function(app){


    app.get("/api/friends", function(req, res) {
        return res.json(friendsData);
      });

    
app.post("/api/friends", function(req, res) {
    const newFriend = req.body
    

    // // req.body hosts is equal to the JSON post sent from the user
    // // This works because of our body-parser middleware
    // const newFriend = req.body;
  
    // // Using a RegEx Pattern to remove spaces from newCharacter
    // // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newFriend.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
    // console.log(newcharacter);
  
    // characters.push(newcharacter);
  
    // res.json(newcharacter);
  });
}