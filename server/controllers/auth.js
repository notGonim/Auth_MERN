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
        sendToken(user, 201, res)
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

        sendToken(user, 200, res)

    } catch (err) {
        next(err)
    }

}

export const forgotPassword = () => {

}

export const resetPassword = () => {

}

export const sendToken = (user, statusCode, res) => {
    const token = user.getSignToken()
    res.status(statusCode).json({ success: true, token })
}