import { Request, Response } from "express";
import { User } from "../entities/User";

export async function createUser(req: Request, res: Response) {
  try {
    const user = new User();
    user.username = req.body.username;
    user.email = req.body.email;
    user.cards = req.body.cards;

    await user.save();

    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await User.find();

    return res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export async function getUserByUsername(req: Request, res: Response) {
  try {
    const user = await User.findOne({
      where: { username: req.params.username },
    });

    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
