
const path = require("path");
const friendsData = require("../data/friends")
module.exports = function(app){
    const userArr = [];
    //let matchFriend = 0;

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
    //  console.log(friendsData)
    var bestMatch = false;
     friendsData.forEach(item =>{
         current_scores = item.scores;
        //  console.log(current_scores);
        
    // let friendsDiff = (Math.abs(parseInt(item.scores)))
        // console.log(friendsDiff)
        var friendTally = {};
        friendTally.score = 0;
        for (var i =0; i < current_scores.length; i++) {
            difference = (Math.abs(parseInt(current_scores[i])-parseInt(newScores[i])));
            friendTally.score += difference;
        }

        console.log(friendTally);
        if (!bestMatch || bestMatch.score > friendTally.score) {
            bestMatch = item
            bestMatch.score = friendTally.score
        }

        // newScores.forEach(num=>{
        //      scoresDiff += (Math.abs(parseInt(item.scores)-parseInt(num)))
        //     //    console.log(scoresDiff)
            
        // })
        // userArr.push(scoresDiff)
            //console.log(userArr)
    })
    console.log(bestMatch)
    // userArr.forEach(element => {
    //     if(element.userArr <= userArr[matchFriend]){
    //         //matchFriend = 
    //         console.log(matchFriend)
    //     }
    // })
    // friendsData.push(req.body)
    // const newMatch = friendsData[matchFriend];
    res.json(bestMatch)
   
    
    
    }


)}