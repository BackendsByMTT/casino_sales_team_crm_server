

const asyncHandler = fn => {

    return async (req, res, next) => {
        try {
            console.log("postReq",req.body)
            await fn(req, res, next);
        } catch (err) {
            console.log(err)
            return res.status(500).json({ "error": "Somethng went wrong please try again" })

        }
    }

}

module.exports ={asyncHandler}