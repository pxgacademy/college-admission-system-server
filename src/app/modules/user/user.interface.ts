import { Types } from "mongoose";

export enum eUserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

export interface iUser {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  dateOfBirth?: Date;
  address?: string;
  role?: eUserRole;
  auth?: Types.ObjectId[];
  admission?: Types.ObjectId[];
}
