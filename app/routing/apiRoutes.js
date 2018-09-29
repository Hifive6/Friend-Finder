const path = require("path");
const friendsData = require("../data/friends")
module.exports = function(app){
    const userArr = [];

    // console.log(userArr)
    app.get("/api/friends", function(req, res) {
        return res.json(friendsData);
      });

    
app.post("/api/friends", function(req, res) {
    // const newFriend = req.body
    const newScores = req.body.scores
    
    // newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    // console.log(newScores)
    // console.log(newFriend)
    
    //const arrayNums = newFriend.scores
    //  console.log(arrayNums)
     friendsData.forEach(item =>{
        let scoresDiff = 0;
    // let friendsDiff = (Math.abs(parseInt(item.scores)))
        // console.log(friendsDiff)
    

   newScores.forEach(num=>{
        scoresDiff += (Math.abs(parseInt(item.scores)-parseInt(num)))
    //    console.log(scoresDiff)
       
   })
   userArr.push(scoresDiff)
    console.log(userArr)
})
   
        
    }


)}
