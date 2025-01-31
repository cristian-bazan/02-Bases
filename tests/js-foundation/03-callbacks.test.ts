import {getUserById} from "../../src/js-foundation/03-callbacks";

describe('03-callbacks', () => {

    test('getUserById should return an error if user does not exist', () => {

        const id = 10;
        getUserById(id, (err, user) => {

            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();
        });
    })

    test('getUserById should return user 1', () => {

        const id = 1;
        getUserById(id, (err, user) => {

            expect(err).toBeUndefined();
            expect(user).toEqual({
                id:1,
                name: 'Cristian',
            });
        });
    });
});