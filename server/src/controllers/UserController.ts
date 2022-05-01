import { Request, Response } from "express";
import User from "../models/User";

export default {
  async index(request: Request, response: Response) {
    return response.json({ message: "Hello World! Fast refresh" });
  },
  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;
    await User.create({
      name,
      email,
      password,
    });
    return response.json({ message: "User created successfully" });
  },
};
