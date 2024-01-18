import { v4 as uuidV4 } from "uuid";

export class Task {
  public id: string = uuidV4();

  constructor(public title: string, public description: string) {}
}
