const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("./models/User");

//SIGNUP USER
export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        res.status(409).json({ msg: "User already exists with this email" });
    } else {
        const salt = bcrypt.genSaltSync(10);
        bcrypt.hash(password, salt, async (err, hashed_pw) => {
            await User.create({
                name,
                email,
                password: hashed_pw,
            });

            //   res.redirect("/login");
            res.json({ msg: "User has been registered" });
        });
    }
}

//LOGIN USER
export const login = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        const match = bcrypt.compareSync(password, user.password);
        if (match) {
            req.session.save((err) => {
                if (err) {
                    console.log("Session could not be saved");
                } else {
                    req.session.user = {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                    };

                    console.log("Session saved: ", req.session);
                    //   res.redirect("/dashboard");
                    res.json({
                        user: { id: user.id, name: user.name, email: user.email },
                        msg: "User has logged in successfully",
                    });
                }
            });
        } else {
            res.status(401).json({ msg: "Invalid credentials" });
        }
    } else {
        res.status(401).json({ msg: "User with this email is not registered" });
    }
}


export const logout =  async (req, res, next) => {
    req.session.destroy(() => console.log("User has logged out"));
//   res.redirect("/login");
};



export const check_auth = (req, res, next) => {
    if (req.session.user) {
      next();
    } else {
      // res.redirect("/login");
    }
  };
  
  router.get("/dashboard", check_auth, (req, res) => {
    res.json({
      user: req.session.user,
      msg: "User has successfully accessed a secured resource",
    });
  });


//exporting 
module.exports = { signup, login, logout, check_auth };