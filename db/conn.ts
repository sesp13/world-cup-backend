import { connect } from "mongoose";


export const connectDB = async () => {
  try {
    const connectionString = process.env.MONGODBCNN ?? '';
    await connect(connectionString);
    console.log('DB Connected');
  } catch (error) {
    console.log(error);
    throw new Error('Error on db connection');
  }
};
