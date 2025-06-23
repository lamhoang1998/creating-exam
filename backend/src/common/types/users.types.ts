export type UserExists = {
  userId: number;
  password: string | null;
} | null;

export type UserPayload = {
  userId: number;
  iat: number;
  exp: number;
};

export type User = {
  userId: number;
  email: string | null;
  fullName: string | null;
  phoneNumber: string | null;
  avatar: string | null;
  roleId: number | null;
  createdAt: Date | null;
  updatedAt: Date | null;
};
