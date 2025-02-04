import i18next from "i18next";

class Result {
    constructor(success, message = "", data = null, errors = []) {
      this.success = success;
      this.message = message;
      this.data = data;
      this.errors = errors;
    }
  
    static successResponse(data, message = i18next.t("success.requestSuccessful")) {
      return new Result(true, message, data, []);
    }
  
    static failureResponse(message = `${i18next.t("error.requestFailed")}`, errors = []) {
      return new Result(false, message, null, errors);
    }
  }
  
  export default Result;
  