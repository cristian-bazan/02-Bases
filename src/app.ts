// const {getAge, getUUID} = require('./plugins');

// const {emailTemplate} = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const {getUserById} = require('./js-foundation/03-callbacks');
// const {getUserById} = require('./js-foundation/04-arrow');
// const {buildMakePerson} = require('./js-foundation/05-factory');
// const getPokemonById = require('./js-foundation/06-promises');

// import {buildLogger} from "./plugins/logger.plugin";

// const logger = buildLogger('app.js');
//
// logger.log('Hola mundo');
// logger.error('Esto es algo malo');
//
//
// getPokemonById(4)
//     .then((pokemon) => console.log({pokemon}))
//     .catch( (err) => console.error(err))
//     .finally( () => console.log('Finalmente'));


/*
const makePerson = buildMakePerson({getUUID, getAge});
const obj = {name: 'Cris', birthdate: '1996-10-14'};
const cris = makePerson(obj);
console.log({cris});
*/

import {equal} from "node:assert";

export function getSum(a: number, b: number): number {

    if (a==b){

        return a;
    }
    return a+b;
};
console.log(getSum(1,1));