
// A wraaper function going to use everywhere - with try & catch
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)

    } catch (error) {
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message
        })

    }
}

export { asyncHandler }



// A wraaper function using promises - advance

// const asyncHandler = (requestHandler)  => { (req, res, next) => {
//     Promise.resolve(requestHandler(req, res, next)).
//     catch((error) => next(error))

// }
// }