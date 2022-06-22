const joi= require("joi")

const registerSchema= joi.object({
name:joi.string().max(20).required(),

email: joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

password: joi.string()
        .pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/)),

    repeat_password: joi.ref('password'),        



})


//login schema below

//I don't think there is a need for this, because who in the first place allowed dummy values to be inserted in the database, Ofcourse the developer in me won't allow that to happen

module.exports={registerSchema}