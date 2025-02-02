class Result {
    constructor(success, message = "", data = null, errors = []) {
      this.success = success;
      this.message = message;
      this.data = data;
      this.errors = errors;
    }
  
    static successResponse(data, message = "Request was successful") {
      return new Result(true, message, data, []);
    }
  
    static failureResponse(message = "Request failed", errors = []) {
      return new Result(false, message, null, errors);
    }
  }
  
  export default Result;
  