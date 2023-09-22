export interface IUser {
  _id: string;
  name: string;
  lastname: string;
  email: string;
  password?: string;
  phone: string;
  web: string;
  token?: string;
  address?: string;
  status: string;
  image: string;
  role: string;

  createdAt?: string;
  updatedAt?: string;
}

export interface IEditUser {
  name: string;
  lastname: string;
  phone: string;
  image?: string;
}

export interface IEditPassword {
  pwd_now: string;
  pwd_new: string;
}
