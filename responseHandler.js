const sendResponse = (res, result, error) => {
    if (error) {
        res.status(500).json({
            status: "Fail",
            message: error.message,
        });
    } else {
        res.status(200).json({
            status: "Success",
            length: result?.length,
            data: result,
        });
    }
};

module.exports = { sendResponse };