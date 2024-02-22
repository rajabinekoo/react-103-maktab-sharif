interface IBaseData {
  id: string;
  createdAt: string;
}

interface IFoodBase {
  name: string;
  image: string;
  price: number;
  description: string;
}

interface IFood extends IBaseData, IFoodBase {}

interface IRestaurant extends IBaseData {
  name: string;
  logo: string;
  address: string;
  description: string;
  category: "fastFood" | "traditionalFood";
}

interface IUser extends IBaseData {
  name: string;
  address: string;
  phoneNumber: string;
}

interface IReservation {
  userId: string;
  foodId: string;
  restaurantId: string;
}
