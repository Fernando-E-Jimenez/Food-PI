const { Router } = require('express');
const { Recipe, Diet } = require('../db')
require('dotenv').config();
const { API_KEY } = process.env
const axios = require('axios');

const model = require('../apiInfo/allData')

const router = Router();

router.get('/recipes', async (req, res, next) => {
    const { name } = req.query;
    const recipes = await model.allData()
if (req.query) {
    if (name) {
        let queryDiet = await Diet.findOne({
            where: { name: name.toLowerCase() }
        })
        if (queryDiet) {
            let byDietQuery = await recipes.filter(r => {
                let names = r.diets.map(d => d.name)
                if (names.includes(name)) return r
            })
            if (byDietQuery.length) {
                return res.status(200).send(byDietQuery)
            }
                return res.status(400).send('No existen recetas con el tipo de dieta indicado')
                 
        } else {
            let recipeQuery = await recipes.filter(r => r.name.toLowerCase().includes(name.toString().toLowerCase()));
            if (recipeQuery.length) {
                return res.status(200).send(recipeQuery)
            }
                return res.status(400).send('No existen recetas con ese nombre')
        }
    }
}
res.status(200).send(recipes)
})

/* */

router.get('/recipes/:id', async (req, res, next) => {
    const { id } = req.params;
    const recipes = await model.allData();
    if (id) {
        const recipesID = await recipes.filter(r => r.id == id);
        recipesID.length ?
            res.send(recipesID) :
            res.send('No se pudo encontrar la receta')
    } else {
        res.send('Ingrese un ID por favor')
    }


});

router.get('/types', async (req, res, next) => {
    try {
        const diets = await Diet.findAll();
        diets.length ?
            res.send(diets) :
            res.send('Error al traer dietas');
    } catch (e) {
        next(e)
    }
});

router.post('/recipe', async (req, res) => {
    const { name, summary, score, healthScore, image, stepByStep, diets } = req.body;
    const newRecipe = await Recipe.create({
        name,
        summary,
        score,
        image,
        healthScore: healthScore,
        instructions: stepByStep
    });
    diets.map(async d => {
        const dbDiet = await Diet.findOrCreate({
            where: {
                name: d
            }
        })
        newRecipe.addDiet(dbDiet[0]);
    })
    res.send('¡Receta creada con éxito!')
});

module.exports = router;
