class Validator {
  static validateUsername(username) {
    const exceptThreeNumbersInRow = !/\d{4,}/.test(username);
    const dashAccept = /^[\w-]+$/.test(username);
    const notStartEndWithDigitOrDashOrUnderscore = /^[^\d_-].*[^\d_-]$/.test(
      username
    );
    return (
      exceptThreeNumbersInRow &&
      dashAccept &&
      notStartEndWithDigitOrDashOrUnderscore
    );
  }
}

export default Validator;
