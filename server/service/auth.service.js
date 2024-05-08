const {User}= require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const CustomError = require("../utils/error");
exports.register=async(payload)=>{
//   function calculateStartDate(offset) {
//   const today = new Date();
//   today.setDate(today.getDate() + offset); // Add the offset days

//   // Adjust to the next day if it's before noon
//   if (today.getHours() < 12) {
//     today.setDate(today.getDate() + 1);
//   }

//   return today.toISOString().slice(0, 10);;
// }

// // Calculate start date for day after tomorrow
// const startDateAfterTomorrow = calculateStartDate(2);
// console.log("Start Date=========",startDateAfterTomorrow);

// // Calculate start date for 3 days later
// const startDateAfter3Days = calculateStartDate(3);
// console.log("Start date after Tommorrow",startDateAfter3Days);

    try{
        const {firstName,lastName,email, password,confirmPasswword,role}= payload.body;
        const isUserExists= await User.findOne({where:{email:email}});
        console.log("Payllooofdff..BBBBOOODDDY",payload.body);
        if(isUserExists){
            throw new CustomError("User allready exists",409)
        }
        if(!(password===confirmPasswword)){
          throw new CustomError("password and confirm password does  not match",408)
        }
        // console.log("confirmPas===",confirmPassword);
        const hashedPassword= await  bcrypt.hash(password, 10);
        const user= await User.create({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:hashedPassword,
            role:role

        })
        return user;

    }
    catch(error){
      throw error

    }
}
exports.login= async(payload)=>{
    try {
        const { email, password } = payload.body;
    
        if (!email && !password) {
          throw new CustomError("User credentials not found", 422);
        }
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
          throw new CustomError("User doesn't exist", 404);
        }
        console.log("Login Userjsdgdfo",user)
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
          console.log("Password is not matched");
          throw new CustomError("User password is wrong", 401);
        }
        if (isValidPassword) {
          var token = jwt.sign(
            { email: user.email, id: user._id, role: user.role },
            process.env.JWT_SECRET,
            {
              expiresIn: "24h",
            }
          );
        }
        console.log("usser--=>", user.password);
        if (!token) {
          throw new CustomError("Token not generating", 500);
        }
        console.log("token---->", token);
        console.log("LoginSuccesssssss");
        user.token = token;
        user.password = undefined;
        return { user, token };
      } catch (error) {
        throw error;
      }
    };
    exports.getAllUser = async (payload) => {
      try {
        const allUsers = await users.findAll();
        console.log("users");
        return allUsers;
      } catch (error) {
        throw error;
      }
    };
    exports.updateUser = async (payload) => {
      try {
        const { userId } = payload.params;
        const { name, email } = payload.body;
        const updateUser = await users.create({ where: { uuid: userId } });
        await updateUser({
          name: name,
          email: email,
        });
        await updateUser.save();
        return updateUser;
      } catch (error) {
        throw error;
      }
    };
    