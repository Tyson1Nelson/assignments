module.exports = function addDino(req, res, next){
   req.dinosaur = {
       type:"trex",
       name: "sparky"
   }
    next();
}

