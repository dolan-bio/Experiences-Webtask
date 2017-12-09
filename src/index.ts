import "babel-polyfill";
import * as mongoose from "mongoose";

import { Experience } from "./experience-model";

module.exports = async (context, cb) => {
    mongoose.connect(context.secrets.MONGODB_URI);

    console.log("Getting experience");
    const data = await Experience.find();

    cb(null, data);
};
