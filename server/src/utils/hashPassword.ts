import { genSalt, hash } from "bcrypt";

export const hashPassword = async (password: string) => {
  if (!password) return;
  
  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);

  return hashedPassword;
};
