const router = require('express').Router();
let exercise = require("../model/exercise.model");

router.route('/').get((req,res)=>{
    exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json(err));

});

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
    .then(()=> res.json('exercise added'))
    .catch(err=>res.status(400).json(err));
});

router.route('/:id').get((req,res)=>{
    exercise.findById(req.params.id)
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json(err));
});

router.route('/:id').delete((req,res)=>{
    exercise.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Exercise has benn deleted'))
    .catch(err => res.status(400).json(err))
});

router.route('/update/:id').post((req,res)=>{
    exercise.findById(req.params.id)
    .then(exercises => {
        exercises.username = req.body.username;
        exercises.description = req.body.description;
        exercises.duration = Number(req.body.duration);
        exercises.date = Date.parse(req.body.date);

        exercises.save()
        .then(()=>res.json('update successfull'))
        .catch(err => console.log(err));

    })
    .catch(err=>res.status(400).json(err));
});


module.exports = router;