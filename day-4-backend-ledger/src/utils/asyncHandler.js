
// A wraaper function going to use everywhere - with try & catch
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)

    } catch (error) {
        res.send(error.code || 500).json({
            sucess: false,
            message: error.message
        })

    }
}

module.exports = asyncHandler

// A wraaper function using promises - advance

// const asyncHandler = (requestHandler)  => { (req, res, next) => {
//     Promise.resolve(requestHandler(req, res, next)).
//     catch((error) => next(error))

// }
// }