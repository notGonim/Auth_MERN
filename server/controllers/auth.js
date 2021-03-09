import User from "../models/user-model.js"
import { ErrorResponse } from "../utils/error-handling.js"


export const register = async (req, res, next) => {

    const { username, email, password } = req.body;

    try {
        const user = await User.create(
            {
                username,
                email,
                password,
            });
        res.status(201).json(
            {
                success: true,
                user
            }
        )
    } catch (err) {
        next(err)
    }
}

export const login = async (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password)
        return next(new ErrorResponse("Please Provide an Email and Password", 400))
    try {
        const user = await User.findOne({ email }).select("+password")

        if (!user)
            return next(new ErrorResponse("Invalid Crediential", 404))

        const isMatch = await user.matchPassword(password)
        if (!isMatch)
            return next(new ErrorResponse("Invalid Crediential", 404))
            
        res.status(200).json({
            success: true,
            token: "tr34f3443fc"
        })
    } catch (err) {
        next(err)
    }

}

export const forgotPassword = () => {

}

export const resetPassword = () => {

}