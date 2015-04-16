require('./formatNumber');
var Bacon = require('baconjs');

console.time('BaconJs Streaming');

Bacon.repeat(function(i) {
  return i < 10000 ? Bacon.once(i) : false;
}).map(function(meters) {
  // Convert to Miles
  return Math.round(meters / 1609.344 * 100) / 100;
}).skipDuplicates().filter(function(miles) {
  // Only want the miles in 1/4 mile increments.
  return (miles * 100) % 25 === 0;
}).subscribe(function(miles) {
  if(miles.isEnd()) {
    return;
  }

  miles = parseFloat(miles);
  // Format remaining Values...
  console.log((miles).formatNumber(2, '.',',') + ' Mi');
});


console.timeEnd('BaconJs Streaming');
