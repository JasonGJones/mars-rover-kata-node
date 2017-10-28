describe('Landscape: ', ()=>{
    var Landscape = require('./landscape').Landscape;
    var landscape;

    beforeEach(function(){
        
    })

    it('a raw Landscape should initialise to 0 0 ', ()=>{        
        landscape = new Landscape();
        expect(landscape.Width).toEqual(0);
        expect(landscape.Height).toEqual(0);
    })
    it('initialisation should persist ', ()=>{        
        landscape = new Landscape(5,10);
        expect(landscape.Width).toEqual(5);
        expect(landscape.Height).toEqual(10);
    })
}
)