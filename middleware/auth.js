import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

// const secret = 'test';
const secret = process.env.SECRET_STRING;

const auth = async (req, res, next) => {
  try {
    const token = await req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;