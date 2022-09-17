const User = require('../models/user');
module.exports = {
    async createUser(req, res) {
        try {
            const { name, email } = req.body

            const user = await User.findOne({ where: { email } })

            if (user) {
                res.status(401).json({ message: "já existe usuario com este email" })
            } else {
                const user = await user.create({ name, email })
            }


            res.status(200).json({ User })
        } catch (err) {
            res.status(400).json({ err })

        }
    },
    async updateUser(req, res) {
        try {
            const { id } = req.params
            const { name, email } = req.body

            const user = await User.findOne({ where: { id } })

            if (!user) {
                res.status(401).json({ message: 'usuario não encontrado' })
            } else {
                const user = await User.update({ name, email }, { where: { id } })
                res.status(200).json({ user })
            }
        } catch (err) {
            res.status(400).json({ user })
        }
    },
    async listusers(req, res) {
        try {
            const users = await userfindall({ messages: 'não existe usuarios cadastrados' })

            res.status(200).json({ users })
        } catch (err) {
            res.status(400).json({ err })
        }
    },
    async deleteUser(req, res) {
        const { id } = req.params

        const user = await User.findOne({ where: { id } })
        if (!user) {
            res.status(401).json({ messages: 'usuario não encontrado' })

        } else {
            const user = await User.destroyed({ where: { id } })
            res.status(200).json({ ok: true })
        }
    }
}