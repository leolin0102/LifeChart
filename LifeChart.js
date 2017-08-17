if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'LifeChart'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'LifeChart'.");
}
var LifeChart = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main$lambda(it) {
    return it + 'px';
  }
  function main(args) {
    var message = 'Hello JavaScript!';
    println(message);
    println('hello');
    var data = [1, 2, 3, 4];
    d3.selectAll('p').data(data).style('font-size', main$lambda);
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('LifeChart', _);
  return _;
}(typeof LifeChart === 'undefined' ? {} : LifeChart, kotlin);

//# sourceMappingURL=LifeChart.js.map
