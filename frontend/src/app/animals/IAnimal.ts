import {IUser} from "../models/user";

export interface IAnimal {
  _id: string,
  user_id: string,
  category: string,
  name: string,
  breed: string,
  sex: string,
  age: number,
  color?: string,
  weight: number,
  status_animal: string,
  loss_date: Date,
  found_date: Date,
  adopt_date: Date,
  status_report: string,
  adopted_user?: IUser,
  image_name: string,
  image_url: string
}
