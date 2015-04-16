require('./formatNumber');
var _ = require('lodash');

// Convert meters into imperial
console.time('Lodash chaining');

var wrapped = _(_.range(0, 10000)).map(function(doh, meters) {
  // Fill in the empty array, convert to Miles
  return Math.round(meters / 1609.344 * 100) / 100;
}).unique().filter(function(miles) {
  // Only want the miles in 1/4 mile incriments.
  return (miles * 100) % 25 === 0;
}).map(function(miles) {
  // Format remaining Values...
  return (miles).formatNumber(2, '.',',') + ' Mi';
});

console.log( wrapped.join('\n') );

console.timeEnd('Lodash chaining');
