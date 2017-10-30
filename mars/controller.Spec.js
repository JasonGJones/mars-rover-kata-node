describe('Controller: ', () => {
    // beforeEach(function(){

    // })

    it('Run two cars', () => {
        var instructions = ['5 5', '1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM'];
        var controller = require('./controller').Controller(instructions);
        expect(controller.moveCars()).toEqual('1 3 N 5 1 E ');
    })
})