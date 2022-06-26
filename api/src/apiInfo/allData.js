require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');
const { Recipe, Diet} = require('../db')


const allApiData = async function(){
    const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=60&addRecipeInformation=true`);
    const apiInfo = await apiUrl.data.results.map(el => {
        return {
            id: el.id,
            name: el.title,
            summary: el.summary,
            diets: el.diets.map( d => { return { name: d}}),
            score: el.spoonacularScore,
            healthScore: el.healthScore,
            image: el.image,
            createdInDb: false,
            instructions: el.analyzedInstructions[0]?.steps.map(paso => {
                return `<b>${paso.number}</b> ${paso.step}<br>`
            })
        }
    })
    return apiInfo
};

const allDbData = async function(){
    return await Recipe.findAll({
        include: {              
            model: Diet,        
            attributes: ['name'],
            through: {
                attributes:[],   
            }
        } 
    })
};


const allData = async function(){
    const apiData = await allApiData();
    const dbData = await allDbData();

    const allDataContainer = apiData.concat(dbData);
    return allDataContainer
};

const allDiets = async function(){
    const dietList = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=60&addRecipeInformation=true`);
    const repeated = await dietList.data.results.map( d => d.diets).flat(1);
    return [... new Set(repeated)]
};

module.exports = {
    allData,
    allDbData,
    allApiData,
    allDiets
};
