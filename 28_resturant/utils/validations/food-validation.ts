import Joi from "joi";

export const CreateFoodSchema = Joi.object({
  price: Joi.number().min(0).required(),
  name: Joi.string().min(3).max(30).required(),
  description: Joi.string().max(600).optional(),
  image: Joi.string().optional(),
});

export const UpdateFoodSchema = Joi.object({
  price: Joi.number().min(0).optional(),
  name: Joi.string().min(3).max(30).optional(),
  description: Joi.string().max(600).optional(),
  image: Joi.string().optional(),
});
