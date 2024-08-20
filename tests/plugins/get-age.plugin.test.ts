import {getAge} from "../../src/plugins";

describe('get-age.plugin', () => {

    test('should return the age of a person', () => {

        const birthdate = '1996-10-14';
        const age = getAge(birthdate);

        expect(typeof age).toBe('number');
    });

    test('should be return current age', () => {

        const birthdate = '1996-10-14';
        const age = getAge(birthdate);

        const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

        expect(age).toBe(calculatedAge);
    });

    test('getFullYear returns 0', () =>{

        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);

        const birthdate = '1996-10-14';
        const age = getAge(birthdate);

        expect(age).toBe(0);
        expect(spy).toHaveBeenCalledWith();
    })
});