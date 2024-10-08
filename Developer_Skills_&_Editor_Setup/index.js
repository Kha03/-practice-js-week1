// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1
// days ... 21oC in 2 days ... 23oC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]
const Data_1 = [17, 21, 23];
const Data_2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  arr.forEach((element, index) => {
    console.log(`${element}oC in ${index + 1} days`);
  });
};
printForecast(Data_1);
printForecast(Data_2);
