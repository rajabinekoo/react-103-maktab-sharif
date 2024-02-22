import {
  createFood,
  getAllFoods,
  getFoodById,
  removeFoodById,
  updateFood,
} from "@/utils/storage/storage";
import {
  CreateFoodSchema,
  UpdateFoodSchema,
} from "@/utils/validations/food-validation";
import { NextRequest } from "next/server";

export async function GET() {
  return Response.json(await getAllFoods());
}

export async function POST(req: Request) {
  let body: IFoodBase;
  try {
    body = await req.json();
  } catch (error) {
    return Response.json({ message: "Invalid body" }, { status: 400 });
  }
  try {
    await CreateFoodSchema.validateAsync(body);
  } catch (error) {
    return Response.json(
      (error as any)?.details || { message: "Something went wrong" },
      { status: 400 }
    );
  }

  const data = await createFood(body);

  return Response.json(data);
}

export async function PUT(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) {
    return Response.json(
      { message: "Id search param required" },
      { status: 400 }
    );
  }

  const targetFood = await getFoodById(id);
  if (!targetFood) {
    return Response.json({ message: "Entity not found" }, { status: 404 });
  }

  let body: IFoodBase;
  try {
    body = await req.json();
  } catch (error) {
    return Response.json({ message: "Invalid body" }, { status: 400 });
  }
  try {
    await UpdateFoodSchema.validateAsync(body);
    if (Object.keys(body).length === 0) {
      return Response.json({ message: "Invalid body" }, { status: 400 });
    }
  } catch (error) {
    return Response.json(
      (error as any)?.details || { message: "Something went wrong" },
      { status: 400 }
    );
  }

  const data = await updateFood(targetFood, body);

  return Response.json(data);
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) {
    return Response.json(
      { message: "Id search param required" },
      { status: 400 }
    );
  }

  const targetFood = await getFoodById(id);
  if (!targetFood) {
    return Response.json({ message: "Entity not found" }, { status: 404 });
  }

  await removeFoodById(targetFood.id);

  return Response.json(targetFood);
}
