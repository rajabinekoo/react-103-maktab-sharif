"use server";

import fsPromises from "fs/promises";

// let users: IUser[] = [];
// let restaurants: IRestaurant[] = [];
const foodFile = "utils/storage/food.json";

// ***********************
// Foods Services
// ***********************

const writeFoodFile = async (data: IFood[]) => {
  await fsPromises.writeFile(foodFile, JSON.stringify(data));
};

const readFoodFile = async (): Promise<IFood[]> => {
  try {
    const result = await fsPromises.readFile(foodFile, "utf8");
    if (!result.length) return [];
    return JSON.parse(result);
  } catch (_) {
    return [];
  }
};

export const createFood = async (data: IFoodBase): Promise<IFood> => {
  const foods: IFood[] = await readFoodFile();
  const newData: IFood = {
    ...data,
    createdAt: new Date().toISOString(),
    id: crypto.randomUUID(),
    price: Number(data.price),
  };
  foods.push(newData);
  await writeFoodFile(foods);
  return newData;
};

export const getAllFoods = async (): Promise<IFood[]> => {
  return await readFoodFile();
};

export const getFoodById = async (id: string): Promise<IFood | undefined> => {
  const foods: IFood[] = await readFoodFile();
  return foods.find((el) => el.id.toLowerCase() === id.toLowerCase());
};

export const updateFood = async (
  targetFood: IFood,
  data: Partial<IFoodBase>
): Promise<IFood> => {
  let foods: IFood[] = await readFoodFile();
  if (!!data.price) data.price = Number(data.price);
  foods = foods.map((el) => {
    if (el.id === targetFood.id) {
      return { ...el, ...data };
    }
    return el;
  });
  await writeFoodFile(foods);
  return foods.find((el) => el.id === targetFood.id) as IFood;
};

export const removeFoodById = async (id: string): Promise<void> => {
  let foods: IFood[] = await readFoodFile();
  foods = foods.filter((el) => el.id.toLowerCase() !== id.toLowerCase());
  await writeFoodFile(foods);
};
