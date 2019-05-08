const jwt=require('jsonwebtoken')
const secrets=require('../config/secret.js')


function protected(req, res, next){
  const token=req.headers.authorization;

jwt.verify(token,secrets.jwtSecret,(err,decodedToken)=>{
  if(err){
    res.status(401).json({message:'You shall not pass!'})
  }else{
    req.decodedToken=decodedToken;
    next();
  }
})
};

module.exports=protected