var ml = require('machine_learning');
var data = [[29,79,1009,6],
      [28,81,1010,3],
      [29,78,1011,6],
      [28,85,1012,8],
      [28,85,1012,5],
      [29,76,1011,5],
      [29,81,1011,6],
      [29,77,1011,10],
      [29,72,1012,8],
      [29,71,1011,8],
      [31,66,1011,8],
      [30,72,1011,6],
      [29,70,1012,8],
      [28,65,1013,13],
      [28,68,1012,6],
      [29,65,1011,10],
      [28,68,1012,10],
      [27,65,1013,10],
      [26,64,1013,10],
      [27,63,1012,11],
      [27,67,1011,10],
      [28,64,1011,10],
      [29,63,1011,10],
      [29,61,1010,11],
      [29,62,1009,10],
      [30,64,1008,10],
      [29,78,1009,8],
      [29,76,1009,5],
      [30,74,1009,5],
      [30,72,1008,5]];
var result = ['storm','storm','no','storm','rain','rain','storm','no','no','no','no','no','no','no','no','no','no','no','no','no','no','no','no','no','no','no','storm','no','rain','no'];
var dt = new ml.DecisionTree({
  data : data,
  result : result
});
dt.build();
exports.findAll = function(temp, humid, pressure, windspd) {
   
   
      return dt.classify([temp,humid,pressure,windspd]);;
  dt.prune(1.0); // 1.0 : mingain.
};

