require('./formatNumber');
var _ = require('lodash');

// Convert meters into imperial
var meters_array = new Array(10000),
    wrapped;

console.time('Lodash chaining');

wrapped = _(meters_array).map(function(doh, meters) {
  // Fill in the empty array, convert to Miles
  return Math.round(meters * (1 / 1609.344) * 100) / 100;
}).filter(function(miles) {
  // Only want the miles in 1/4 mile incriments.
  return (miles * 100) % 25 === 0;
}).unique().map(function(miles) {
  // Format remaining Values...
  return (miles).formatNumber(2, '.',',') + ' Mi';
});

console.timeEnd('Lodash chaining');

console.log(wrapped.join('\n'));
