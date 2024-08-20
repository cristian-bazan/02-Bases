import {httpClient} from '../plugins'
// const {http} = require('../plugins');

export const getPekemonNameById = async (id: string|number):Promise<string> => {

    try {

        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await httpClient.get(url);
        return pokemon.name;
    } catch (error){

        throw `Pokemon not found with id ${id}`;
    }


    // const resp = await fetch(url);
    // const pokemon = await resp.json();

    // throw new Error('Pokemon no existe')

    // return fetch(url)
    // .then((resp) => resp.json())
    // // .then( () => { throw new Error('Pokemon no existe')})
    // .then( (pokemon) => pokemon.name);
}