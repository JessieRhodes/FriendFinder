var friendArray = [
	{
    name: "Christina",
    image: "A black and white picture of me in a tree",
    scores: ["2", "3", "5", "4", "3", "1", "1", "2", "4", "5"]
    }
];

var scores = friendArray[0].scores;
var userScores = [];

var result = scores.map(Number);
userScores.push(result);
console.log(userScores[0]);

// export the array
module.exports = friendArray;

// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
	// Example:
	// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
	// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
	// Total Difference: 2 + 1 + 2 = 5
// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.
// Once you've found the current user's most compatible friend, display the result as a modal pop-up.

// The modal should display both the name and picture of the closest match.

