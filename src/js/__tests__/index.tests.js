import Validator from "../index";

describe("Validator", () => {
  describe("validateUsername", () => {
    it("должно возвращать значение true для действительного имени пользователя", () => {
      expect(Validator.validateUsername("my-username")).toBe(true);
    });

    it("должно возвращать значение false для имени пользователя, содержащего более трех цифр подряд", () => {
      expect(Validator.validateUsername("my_username-1234")).toBe(false);
    });

    it("должно возвращать значение false для имени пользователя, начинающегося с цифры", () => {
      expect(Validator.validateUsername("1username")).toBe(false);
    });

    it("должно возвращать значение false для имени пользователя, заканчивающегося цифрой", () => {
      expect(Validator.validateUsername("username1")).toBe(false);
    });

    it("должно возвращать значение false для имени пользователя с недопустимыми символами", () => {
      expect(Validator.validateUsername("my.username")).toBe(false);
    });
  });
});
