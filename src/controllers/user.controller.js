import { asyncHandler } from "../utils/asyncHandler.js";

export const createUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) res.status(400).json({
        message: "All fields are required"
    });

    const userExists = await User.findOne({ email });

    if (userExists) res.status(400).json({
        message: "User already exists"
    });

    const createdUser = await User.create({
        name,
        email,
        password
    });

    res.status(201).json({
        message: "User created successfully",
        data: {
            name,
            email,
            password
        }
    });
});
