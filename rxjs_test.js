require('./formatNumber');
var Rx = require('rx');

console.time('RxJS Streaming');

var distance_stream = Rx.Observable.range(0, 10000).map(function(meters) {
  // Convert to Miles
  return Math.round(meters / 1609.344 * 100) / 100;
}).distinct().filter(function (miles) {
  // Filter to only values on the 1/4 mile.
  return (miles * 100) % 25 === 0;
});

var distance_subscription = distance_stream.subscribe(
    function (miles) {
      // Format remaining Values...
      console.log(miles.formatNumber(2, '.',',') + ' Mi');
    });

console.timeEnd('RxJS Streaming');
