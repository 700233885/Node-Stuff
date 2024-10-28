(async() => {
    const colors = require("ansi-colors")
    const {getPokemonByNumber, getRandomPokemon} = require("./pokemon")
    const names = require('./names.json')

    const randomPokemon = await getRandomPokemon()
    console.log(randomPokemon.name)

    console.log(names)
})()
