var duplexer2 = require("duplexer2");
var through = require('through2');


module.exports = function (counter) {
    var countries = {};        

    var duplex = duplexer2(through.obj(function (obj, encoding, next) {
        if (obj.country in countries)
            countries[obj.country]++;
        else 
            countries[obj.country] = 1;  
        next();
    }), counter);

    duplex.on("finish", function() {
        counter.setCounts(countries);
    });

    return duplex;
};

// Here's the reference solution:

  //var duplexer = require('duplexer2');
  //var through = require('through2').obj;
  
  //module.exports = function (counter) {
  //    var counts = {};
  //    var input = through(write, end);
  //    return duplexer(input, counter);
      
  //    function write (row, _, next) {
  //        counts[row.country] = (counts[row.country] || 0) + 1;
  //        next();
  //    }
  //    function end (done) {
  //        counter.setCounts(counts);
  //        done();
  //    }
  //};
