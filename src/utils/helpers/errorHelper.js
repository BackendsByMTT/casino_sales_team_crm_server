

export const asyncHandler = fn => {

    return async (req, res, next) => {
        try {
            await fn(res, req, next);
        } catch (err) {
            return res.status(500).json({ "error": "Somethng went wrong please try again" })

        }
    }

}