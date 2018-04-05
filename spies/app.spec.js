import  * as expect  from 'expect';
import handleSignUp from './app';

describe('Test mock DB with Spy', () => {
    it('should call spy', ()=> {
        const spy = expect.createSpy();
        spy();
        expect(spy).toHaveBeenCalled();
    });
});
