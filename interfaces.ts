export interface product {
  name: string;
  image: string;
  description: string;
  category: string;
  price: number;
  clicks?: number;
}

export interface UserData {
  email: string;
  password: string;
}
