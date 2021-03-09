import User from "../models/user-model.js"

export const register = async (req, res, next) => {
    const { username, email, password } = req.body

    try {
        const user = await User.create(
            {
                username, email, password
            }
        )
        res.status(201).json(
            {
                success: true,
                user
            }
        )
    } catch (err) {
        res.status(500).json(
            {
                success: false,
                error: err.message
            }
        )
    }

}

export const login = (req, res, next) => {
    res.send('working')
}

export const forgotPassword = () => {

}

export const resetPassword = () => {

}