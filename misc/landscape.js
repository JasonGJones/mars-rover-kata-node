landscape = function(xParam,yParam){
    x=xParam;
    y=yParam;

    return {x,y};
}
module.exports =landscape;

//or : module.exports.baba = landscape; <== this would export landscape as a baba named property.
// var Landscape = require(./landscape.js).baba