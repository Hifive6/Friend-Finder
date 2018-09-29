
const friendsData = require("../data/friends")
module.exports = function(app){
//getting info from friends.js 
    app.get("/api/friends", function(req, res) {
        return res.json(friendsData);
      });

//posting the best match from the survey that was taken   
app.post("/api/friends", function(req, res) {
    // const newFriend = req.body
    //This variable give me the scores from the friends object
    const newScores = req.body.scores
    let bestMatch = false;

    //this loop runs through the friends object and there scores
     friendsData.forEach(item =>{
         current_scores = item.scores;
        //  console.log(current_scores);
        let friendTally = {};
        friendTally.score = 0;

    //this loop will loop through the user scores and then give a total
        for (var i =0; i < current_scores.length; i++) {
            difference = (Math.abs(parseInt(current_scores[i])-parseInt(newScores[i])));
            friendTally.score += difference;
        }
    //this will detemine who is the best match
        //console.log(friendTally);
        if (!bestMatch || bestMatch.score > friendTally.score) {
            bestMatch = item
            bestMatch.score = friendTally.score
        }

        
           
    })
    //console.log(bestMatch)
   //this add new character to friends object and push best match to html
    res.json(bestMatch)
   friendsData.push(req.body)
    
    
    }


)}