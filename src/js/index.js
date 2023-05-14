class Validator {
  static validateUsername(username) {
    const regex =
      /^(?=.{3,20}$)(?![.\d_-])(?!.*[.\d_-]{2})[a-zA-Z0-9._-]+(?<![.\d_-])$/;
    return regex.test(username);
  }
}

export default Validator;
