const movieModel = require('../models/movies')

module.exports={
    getById: function(req,res,next){
        console.log(req.body);
        movieModel.findById(req.params.movieId, function(err, movieInfo){
            if(err){
                next(err)
            }
            else{
                res.json({status:"success", mesaage:"Movie found!", data:{movie:movieInfo}})
            }
        })
    },

    getAll: function(req,res,next){
        let moviesList = [];

        movieModel.find({}, function(err, movies){
            if(err){
                next(err)
            }
            else{
                for(let movie of movies){
                    moviesList.push({id: movie._id, name: movie._name, released_on: movie._releasedOn})
                }
                res.json({status:"success",message:"Movies List Found!!!", data:{movies:moviesList}})
            }
        })
    },

    updateById: function(req,res,next){
        movieModel.findByIdAndUpdate(req.params.movieId, {name: req.body.name}, function(err, movieInfo){
            if(err){
                next(err)
            }
            else{
                res.json({status:"success", message:"Movie updated sucessfully", data:null})
            }
        })
    },

    deleteById: function(req,res,next){
        movieModel.findByIdAndDelete(req.params.movieId, function(err, movieInfo){
            if(err){
                next(err)
            }
            else{
                res.json({status:"success", message:"Movie Deleted Sucessfully", data:null})
            }
        })
    },

    create: function(req,res,next){
        movieModel.create({name:req.body.name, releasedOn:req.body.releasedOn}, function(err, result){
            if(err){
                next(err)
            }
            else{
                res.json({status:"success", message:"movie added sucessfully", data:null})
            }
        })
    }
}