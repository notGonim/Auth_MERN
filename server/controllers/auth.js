import User from "../models/user-model.js"

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
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

export const login = async (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password)
        res.status(400).json({
            success: false,
            error: "Please provide Email and Password"
        })
    try {
        const user = await User.findOne({ email }).select("+password")
        if (!user)
            res.status(404).json({
                success: false,
                error: "Invalid Crediential"
            })
        const isMatch = await user.matchPassword(password)
        if (!isMatch)
            res.status(404).json({
                success: false,
                error: "Invalid Crediential"
            })
        res.status(200).json({
            success: true,
            token: "tr34f3443fc"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }

}

export const forgotPassword = () => {

}

export const resetPassword = () => {

}