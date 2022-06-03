const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
   
    res.send('Hello there!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
});

//========================================================================

// Problem's Solution Given By Pritesh sir..,

  // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
  app.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let lastDigit= arr.pop()
    let consecutiveSum= lastDigit * (lastDigit+1) / 2
    let missingNumber= consecutiveSum - total
  
    res.send(  { data: missingNumber  }  );
  });

    // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
 app.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38]
    let len= arr.length
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let firstDigit= arr[0]
    let lastDigit= arr.pop()
    let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
    let missingNumber= consecutiveSum - total
   
    res.send(  { data: missingNumber  }  );
  });

  //=========================================================================
 
// Problem's solution given by Sabiha ma'am..,

// Problem 1:-
// Create an API for GET /movies that returns a list of movies.
// Define an array of movies in your code and return the value in response.

router.get('/movies', function(req, res){
    let movies = ['RRR', 'KGf', 'PUSHPA']

    res.send(movies);

});

// Problem:- 2
// Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request
// and it should return the movie in your array at index 1). 
// You can define an array of movies again in your api

router.get('/movies/:indexNumber', function(req, res){
    let movies = ['"Rang de basanti", "The shining", "Lord of the rings", "Batman begins"'];

    console.log('Movies name is:- ' +movies[req.params.indexNumber])
    req.send(movies[req.params.indexNumber])
});

// Problem:- 3
// Handle a scenario in problem 2 where if the index is greater than the valid maximum value
// a message is returned that tells the user to use a valid index in an error message.

var i = req.params.indexNumber;
var j = i - 1;

if (i <= movies.length) {
    req.send(movies[j]);

}else {
    req.send('Invalid list')

};

// Problem:- 4

// Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have values - id, name. An example of movies array is 
// [ {
//  “id”: 1,
//  “name”: “The Shining”
// }, {
//  “id”: 2,
//  “name”: “Incendies”
// }, {
//  “id”: 3,
//  “name”: “Rang de Basanti”
// }, {
//  “id”: 4,
//  “name”: “Finding Nemo”
// }]

// Return the entire array in this api’s response


router.get('/films', function(req, res) {
    
let filmList = [ {
 id: 1,
 name: 'The Shining'
}, {
 id: 2,
 name: 'Incendies'
}, {
 id: 3,
 name: 'Rang de Basanti'
}, {
 id: 4,
 name: 'Finding Nemo'
}]


    
});

// Problem:- 5

// Write api GET /films/:filmId where filmId is the value received in request path params.
// Use this value to return a movie object with this id. In case there is no such movie present in the array,
// return a suitable message in the response body. Example for a request GET /films/3 should return the movie object 
// {
//  “id”: 3,
//  “name”: “Rang de Basanti”
// }
// Similarly for a request GET /films/9 the response can be something like - ‘No movie exists with this id’

router.get('/films/:filmLists', function(req, res) {
    
    let filmLists = [ {
     id: 1,
     name: 'The Shining'
    }, {
     id: 2,
     name: 'Incendies'
    }, {
     id: 3,
     name: 'Rang de Basanti'
    }, {
     id: 4,
     name: 'Finding Nemo'
    }]
    
    req.send(filmLists);
    
    var i = req.params.filmLists;
    var j = i - 1;
    
    if (i <= filmLists.length) {
        req.send(filmLists[j]);
    
    }else {
        req.send('No movie exists with this id')
    
    };
    
        
    });



module.exports = router;
// adding this comment for no reason