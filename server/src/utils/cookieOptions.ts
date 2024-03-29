const expiryDate = new Date();
expiryDate.setDate(expiryDate.getDate() + 10);

export const cookieOptions = {
  path: "/",
  sameSite: true,
  secure: true,
  expires: expiryDate,
  domain:
    process.env.NODE_ENV === "production" ? "spdc-api.vercel.app" : "localhost",
  httpOnly: true,
};
