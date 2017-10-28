require('./landscape');
function parseState(state){
    var arrState = state.split(' ');
    if (
            arrState.length === 3 && 
            Number.isInteger(Number(arrState[0])) &&
            Number.isInteger(Number(arrState[1])) &&
            ['N', 'E', 'S', 'W'].includes(arrState[2])
    
    ){
        return {
            x: arrState[0],
            y: arrState[1],
            d: arrState[2]
        }
    } else {
        return getDefaultState();
    }


    

}
function getDefaultState(){
    return {
        x: 0,
        y: 0,
        d: 'N'
    }
}

function parseInstruction(moveInstruction){
    return moveInstruction.split("");
}

var Car = function(initialState){
    var defaultState = getDefaultState();
    var positionX = defaultState.x;
    var positionY = defaultState.y;
    var direction = defaultState.d;
    var thisLandscape;
    if (initialState){
        newState = parseState(initialState);
        positionX = newState.x;
        positionY = newState.y;
        direction = newState.d;
    }

    addToLandscape = function (landscape){
        if (landscape.Height >= positionY && landscape.Width >= positionX ){
            thisLandscape = landscape;
        }
        return thisLandscape;
    }

    processMoveInstruction = function(moveInstruction){
        var instructionSet = parseInstruction(moveInstruction);
        instructionSet.map(function(x){
            switch (x){
                case 'M':
                    moveForward();
                break;
                case 'L':
                    turn('L');
                break;
                case 'R':
                    turn('R');
                break;
                
            }
        });
    
    }

    function turn(LeftOrRight){
        var directionMapper = ['N', 'E', 'S', 'W'];
        
        switch (LeftOrRight){
            case 'L':
            direction = directionMapper[directionMapper.indexOf(direction) - 1];
            if (direction === undefined) {direction = 'W'}
            break;
            case 'R':
            direction = directionMapper[directionMapper.indexOf(direction) + 1];
            if (direction === undefined) {direction = 'N'}
            break;
        }
    }

    function moveForward(){
        var newX = positionX;
        var newY = positionY;
        switch (direction){
            case 'N':
                ++newY;
                break;
            case 'E':
                ++newX;
                break;
            case 'S':
                --newY;
                break;
            case 'W':
                --newX;
                break;
        }
        if (newX <= thisLandscape.Width) { positionX = newX}

        if (newY <= thisLandscape.Height) {positionY = newY;}

    }

    getPositionAndDirection = function(){

        return [positionX, positionY, direction].join(' '); 
    }
    return {
        PositionX: positionX,
        PositionY: positionY,
        Direction: direction,
        Landscape: thisLandscape,
        addToLandscape,
        processMoveInstruction,
        getPositionAndDirection
    }
}
module.exports.Car = Car;