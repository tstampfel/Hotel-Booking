import { IUser } from "../interfaces/interfaces";

export class User implements IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  adress: string;

  constructor(
    firstName: string,
    lastName: string,
    adress: string,
    email: string
  ) {
    this.id = "";
    this.firstName = firstName;
    this.lastName = lastName;
    this.adress = adress;
    this.email = email;
  }
}
