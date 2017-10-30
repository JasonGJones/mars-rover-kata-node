require('./landscape');
require('./car');

var SetupState = {
    Landscape: null,
    Cars: []
}

function parseInstructions(instructionSet){
    var Car = require('./car').Car;
    var landscapeDimension = instructionSet.shift().split(' ');
    var Landscape = require('./landscape').Landscape(landscapeDimension[0], landscapeDimension[1]);
    var Cars = [];

    instructionSet.reduce(function(result, value, index, array) {
        
        if (index % 2 === 0){
            
            var car = new Car(array[index]);
            car.moveInstructions = array[index + 1];
            Cars.push(car)
            
        }
        return result;
      }, Cars);
      
    return {
        Landscape: Landscape,
        Cars: Cars
    }
    
}

var Controller = function(setup){
    var environment = parseInstructions(setup);
    

    function moveCars() {
        var output = '';
        environment.Cars.map(function (car){
            car.addToLandscape(environment.Landscape);
            car.processMoveInstruction();
            output += car.currentPositionAsString() + ' '
            
        })
        return output;
    }

    return {
        moveCars
    }
}




module.exports.Controller = Controller;
