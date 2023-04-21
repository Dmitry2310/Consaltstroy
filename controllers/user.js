import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const signIn = async (req, res) => {

    const { name, password } = req.body;
    try {
        const existingUser = await User.findOne({ name: name });

        if (!existingUser) return res.status(400).json({ message: "Такого пользователя нет." });

        const isPasswordcorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordcorrect) return res.status(400).json({ message: "Неверный логин или пароль." });

        const token = jwt.sign({ name: existingUser.name, id: existingUser._id }, process.env.SECRET_KEY, { expiresIn: "1d" });
        
        res.status(200).json({ user: existingUser, token })
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const signUp = async (req, res) => {

    const { name, password } = req.body;

    try {
        const existingUserName = await User.findOne({ name: name });
        if (existingUserName) return res.status(400).json({ message: "User already exists." });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ password: hashedPassword, name: name });

        const token = jwt.sign({ id: result._id }, process.env.SECRET_KEY, { expiresIn: "1d" });

        res.status(201).json({ result, token, message: 'Вы вошли успешно.' });
    } catch (error) {
        res.status(500).json({ message: "Какая то ерунда на сервере..." });
    }
};