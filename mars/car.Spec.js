

describe('Car: ', ()=>{
    var Car = require('./car').Car;
    var Landscape = require('./landscape').Landscape;
    var landscape;
    var car;

    beforeEach(function(){
        
    })

    it('a raw Car should initialise to 0 0 North', ()=>{        
        car = new Car();
        expect(car.currentPosition().PositionX).toEqual(0);
        expect(car.currentPosition().PositionY).toEqual(0);
        expect(car.currentPosition().Direction).toEqual('N');
    })
    it('the initialised Car should hold its state', ()=>{        
        car = new Car('4 5 E');
        expect(car.currentPosition().PositionX).toEqual('4');
        expect(car.currentPosition().PositionY).toEqual('5');
        expect(car.currentPosition().Direction).toEqual('E');
    })
    it('a bad initialisation should set to 0 0 North', ()=>{        
        car = new Car(' rabbit');
        expect(car.currentPosition().PositionX).toEqual(0);
        expect(car.currentPosition().PositionY).toEqual(0);
        expect(car.currentPosition().Direction).toEqual('N');
    })
    it('a car should  be allowed to be placed inside of the landsape', ()=>{        
        landscape = new Landscape(10,20);
        car = new Car('4 5 E');
        var carLandscape = car.addToLandscape(landscape);        
        expect(carLandscape).toBeDefined();
    })
    it('a car should not be allowed to be placed ouside of the landsape', ()=>{        
        landscape = new Landscape(1,2);
        car = new Car('4 5 E');
        var carLandscape =car.addToLandscape(landscape);
        expect(carLandscape).toBeUndefined;
    })

    it('add a car and move it around', ()=>{        
        landscape = new Landscape(5,5);
        car = new Car('1 2 N');
        car.addToLandscape(landscape);
        car.moveInstructions = 'LMLMLMLMM';
        car.processMoveInstruction();
        expect(car.currentPositionAsString()).toBe('1 3 N');

        
    })

    it('add a car and move it around', ()=>{        
        landscape = new Landscape(5,5);
        car = new Car('3 3 E');
        car.addToLandscape(landscape);
        car.moveInstructions = 'MMRMMRMRRM';
        car.processMoveInstruction();
        expect(car.currentPositionAsString()).toBe('5 1 E');

        
    })
})