import Result from "../utils/Result.js";

export default (err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json(Result.failureResponse(err.message || 'Bilinmeyen bir hata oluştu'));
};
