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
    const arrayNums = newFriend.scores
     console.log(arrayNums)
    arrayNums.forEach(num=>{
        console.log(num)
    })

   friendsData.forEach(item => {
       console.log(item)
       
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
