const  user_model = require('../models/user_model');



exports.registerUser = async(req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await user_model.findOne({ email})
        if (user) {
            return res.status(400).json({ message: "user exists,proceed to login" })
        }
    } catch (error) {
        console.log(error)
        
    }
    const hashedPassword = bcrypt.hashasync(password)
    const newUser = new user_model({
        name,
        email,
        password:hashedPassword
    })
    try {
        const savedUser=await newUser.save()
         return res.status(201).json({ savedUser})
        //message: "user created successfully",
    } catch (error) {
        console.log(error)
        
    }
    return res.status(500).json({message:"server error"})

}
exports.loginUser=async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    let existingUser;
    try{
        let user = await User.findByEmailAndPassword(email, password)
        

    }
    catch(err) {
        console.error(err)

    

    }
}