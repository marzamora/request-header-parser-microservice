const controllers = {
    default: (req, res) => {
        res.json({
            message: "Hello friend"
        })
    }
}

module.exports = controllers