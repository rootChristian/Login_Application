const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

// Complexity required
const complexityOptions = {
    min: 8,
    max: 1024,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 4,
};

const signUpBodyValidation = (body) => {
    const schema = Joi.object({
        username: Joi.string()
            .required()
            .empty()
            .min(3)
            .max(30)
            .messages({
                "string.base": `"username" should be a type of 'text'`,
                "string.empty": `"username" cannot be an empty field`,
                "string.min": `"username" should have a minimum length of {#limit}`,
                "string.max": `"username" should have a maximum length of {#limit}`,
                "any.required": `"username" is a required field`
            }),
        email: Joi.string()
            .required()
            .empty()
            .min(5)
            .max(50)
            .messages({
                "string.base": `"email" should be a type of 'text'`,
                "string.empty": `"email" cannot be an empty field`,
                "string.min": `"email" should have a minimum length of {#limit}`,
                "string.max": `"email" should have a maximum length of {#limit}`,
                "any.required": `"email" is a required field`
            }).email(),
        password: passwordComplexity(complexityOptions)
            .required()
            .messages({
                "string.base": `"password" should be a type of 'text'`,
                "string.empty": `"password" cannot be an empty field`,
                "string.min": `"password" should have a minimum length of {#limit}`,
                "string.max": `"password" should have a maximum length of {#limit}`,
                "any.required": `"password" is a required field`
            }),
        firstname: Joi.string()
            .empty()
            .min(3)
            .max(30)
            .messages({
                "string.base": `"firstname" should be a type of 'text'`,
                "string.empty": `"firstname" cannot be an empty field`,
                "string.min": `"firstname" should have a minimum length of {#limit}`,
                "string.max": `"firstname" should have a maximum length of {#limit}`,
                "any.required": `"firstname" is a required field`
            }),
        lastname: Joi.string()
            .empty()
            .min(3)
            .max(30)
            .messages({
                "string.base": `"lastname" should be a type of 'text'`,
                "string.empty": `"lastname" cannot be an empty field`,
                "string.min": `"lastname" should have a minimum length of {#limit}`,
                "string.max": `"lastname" should have a maximum length of {#limit}`,
                "any.required": `"lastname" is a required field`
            }),
        image: Joi.string()
            .label("Image"),
        role: Joi.string()
            .empty()
            .min(3)
            .max(30)
            .messages({
                "string.base": `"role" should be a type of 'text'`,
                "string.empty": `"role" cannot be an empty field`,
                "string.min": `"role" should have a minimum length of {#limit}`,
                "string.max": `"role" should have a maximum length of {#limit}`,
                "any.required": `"role" is a required field`
            }),
        active: Joi.boolean()
            .label("Active")
    });
    return schema.validate(body);
};

const signInBodyValidation = (body) => {
    const schema = Joi.object({
        username: Joi.string()
            .empty()
            .min(3)
            .max(30)
            .messages({
                "string.base": `"username" should be a type of 'text'`,
                "string.empty": `"username" cannot be an empty field`,
                "string.min": `"username" should have a minimum length of {#limit}`,
                "string.max": `"username" should have a maximum length of {#limit}`,
                "any.required": `"username" is a required field`
            }),
        email: Joi.string()
            .empty()
            .min(5)
            .max(50)
            .messages({
                "string.base": `"email" should be a type of 'text'`,
                "string.empty": `"email" cannot be an empty field`,
                "string.min": `"email" should have a minimum length of {#limit}`,
                "string.max": `"email" should have a maximum length of {#limit}`,
                "any.required": `"email" is a required field`
            }).email(),
        password: passwordComplexity(complexityOptions)
            .required()
            .messages({
                "string.base": `"password" should be a type of 'text'`,
                "string.empty": `"password" cannot be an empty field`,
                "string.min": `"password" should have a minimum length of {#limit}`,
                "string.max": `"password" should have a maximum length of {#limit}`,
                "any.required": `"password" is a required field`
            }),
    });
    return schema.validate(body);
};

const getParamsValidation = (params) => {
    const schema = Joi.object({
        username: Joi.string()
            .required()
            .empty()
            .min(3)
            .max(30)
            .messages({
                "string.base": `"username" should be a type of 'text'`,
                "string.empty": `"username" cannot be an empty field`,
                "string.min": `"username" should have a minimum length of {#limit}`,
                "string.max": `"username" should have a maximum length of {#limit}`,
                "any.required": `"username" is a required field`
            })
    });
    return schema.validate(params);
};

const refreshTokenBodyValidation = (body) => {
    const schema = Joi.object({
        refreshToken: Joi.string().required().label("Refresh Token"),
    });
    return schema.validate(body);
};

module.exports = { getParamsValidation, signUpBodyValidation, signInBodyValidation, refreshTokenBodyValidation };
