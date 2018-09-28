const path = require("path");
const friendsData = require("../data/friends")
module.exports = function(app){
    const userArr = [];
    // console.log(userArr)
    app.get("/api/friends", function(req, res) {
        return res.json(friendsData);
      });

    
app.post("/api/friends", function(req, res) {
    const newFriend = req.body
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    console.log(newFriend.scores)
    // const popped = newFriend.routeName.pop();
    // console.log(popped)

//     const formNumbers = (numbersArr) => {
//         Pop(newFriend)
//         console.log(newFriend)
//     }
// formNumbers()
  });
}
