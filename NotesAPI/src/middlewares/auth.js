const jwt = require("jsonwebtoken");

const auth = (req, res, next)=>{
    try {
        const headerToken = req.headers.authorization;
        console.log("--------------- auth ----------------")
        console.log("headerToken", headerToken)
        if(headerToken){
            const token = headerToken.split(" ")[1];
            console.log("token", token)
            let user = jwt.verify(token, process.env.SECRET_KEY);
            req.userId = user.id;
        }
        else{
            return res.status(401).json({message: "Unauthorized User"});
        }
        next();   
    } catch (error) {
        console.log(error);
        res.status(401).json({message: "Unauthorized User"});
    }
}

module.exports = auth;