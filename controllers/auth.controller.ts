import { Request, Response } from "express";
import {
  loginUserService,
  registerUserService,
  verficateUserServices,
} from "../services/authUser.service";

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const response = await registerUserService({ name, email, password });
  if (!response) {
    return res
      .status(400)
      .json({ message: "The user could not be registered." });
  }
  return res.status(200).json({ mesagge: response });
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const response = await loginUserService({ email, password });
  if (!response) {
    return res.status(400).json({ message: "failed to login" });
  }
  return res.status(200).json({ data: response });
};

export const verificateUser = async (req: Request, res: Response) => {
  const { code, email } = req.params;
  const response = await verficateUserServices({ code, email });
  if (!response) {
    return res
      .status(400)
      .json({ message: "verification code does not match" });
  }
  // funcionEnviarCorreoQueYaEstaVerificado(email);
  return res.status(200).json();
};
