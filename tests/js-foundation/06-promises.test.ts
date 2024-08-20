import {getPekemonNameById} from "../../src/js-foundation/06-promises";

describe('06-promises', () => {

    test('should return a pokemon', async () => {

        const pokemon = await getPekemonNameById(1);

        const pokemonId = 1;
        const pokemonName = await getPekemonNameById(pokemonId);
        expect(pokemonName).toBe('bulbasaur');
    });

    test('shoul return an error if pokemon does not exist', async ()=>{

        const pokemonId = 100000000;

        try {

            await getPekemonNameById(pokemonId);
            expect(true).toBeFalsy();
        } catch (error){

            expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
        }

        // expect(pokemonName).toBe('Pokemon no existe');
    });
});