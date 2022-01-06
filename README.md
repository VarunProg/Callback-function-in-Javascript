# Callback-function-in-Javascript
What is callback function in JavaScript?
A function which takes another function as an argument and call that function in itself is known as callback function, in other words when we take a function and pass into another function the function which we passed into another function is called callback function.
Javascript is synchronous means single threaded language code is executed line by line, callback functions gives the accessibility to do Asynchronous task in synchronous single threaded language.
Callback functions can be synchronous and Asynchronous as well.
some of the examples of synchronous callbacks functions are map, foreach, reduce, filter and Asynchronous callback function example is setTimeout.


why callback?
let's suppose we are fetching data from server and it takes only 2 seconds to display the data, now we want to insert some values into the data and it takes 5 seconds to insert.
so in this case what will happen values will be inserted to the database but will not be displayed because data takes only 2 seconds to fetch records  but to insert values it takes 5 seconds.
so what we can do in this case what we can do we can pass a function fetchRecords() as a callback function into insertData() function, now it will be upto function insertData when it wants to call function fetchRecords.
Note: 
function fetchRecords() only takes 2 seconds to fetch records from database
function insertData() takes 5 seconds to insert the data
Output: if we pass fetchRecords function into insertData function so now first it will insert values then will display the records.
