import { Schema, model } from "mongoose";

const personSchema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
  },
  {
    timestamps: true,
  }
);

const Person = model("Person", personSchema, "people");

export default Person;
