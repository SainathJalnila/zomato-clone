const User = require('../modules/user');

exports.userSignUp = (req, res) => {
    const { email, password, fullName, mobileNumber } = req.body;

    const userObj = new User({
        email,
        password,
        fullName,
        mobileNumber
    });
    console.log(userObj);

    userObj.save()
        .then(response => {
            res.status(200).json({
                message: "User Registered Succesfully",
                user: response
            })
            
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

exports.userLogin =(req, res) =>{

    const {email , password } = req.body;
    
    
    User.findOne({email , password }).then(response=>{
        console.log(response);
        if(!response){    
                res.status(400).json({
                message:"Please register and then login",
                isAuthenticated: false              
            })}
            else{
            res.status(200).json({
                message:"User Login Succesfully",
                LoginDetails: response,
                isAuthenticated: true


            })
           

        }
       
    }).catch(err => console.log)
}