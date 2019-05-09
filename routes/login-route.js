const router = require('express').Router();
const db =require('../data/dbConfig.js');
const bcrypt=require('bcryptjs')
const jwt =require('jsonwebtoken')
const secrets=require('../config/secret.js')

router.post('/', (req, res) => {
    let {username,password}=req.body 
    db('users')
    .where({username})
    .first()
    .then(user =>{
        if(user&& bcrypt.compareSync(password,user.password)){
            const token=generateToken(user)
        res.status(200).json({message:`Welcome ${user.username}, you have successfully logged in`,token})
        }else{
            res.status(401).json({message:'you shall not pass!'})
        }
        })
    .catch(err=>{
        res.status(500).json({error:err,message:'Unable to log in at this time'})
    })
      });

function generateToken(user){
const payload={
    subject: user.id,
    username:user.username
};
const options={
    expiresIn:'1h'
};
    return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports=router