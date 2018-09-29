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
    console.log(newScores)
    // console.log(newFriend)
    
    //const arrayNums = newFriend.scores
    //  console.log(arrayNums)
    newScores.forEach(num=>{
        // const scoresDiff = 0
        console.log(num)
    

   friendsData.forEach(item => {
    //    scoresDiff += 
       console.log(item)
       
   })
})
    const formNumbers = (numbersArr) => {
        // arrayNums.forEach(item => {
        // let completeScore = item.
        // console.log(completeScore)
        // let sumNumbers = arrayNums.reduce((acc, cur) =>  acc + cur )
        // console.log(sumNumbers)
        // })
        
    }
formNumbers()
  });
}
