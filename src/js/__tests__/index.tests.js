import Validator from "../index";

describe("Validator", () => {
  describe("validateUsername", () => {
    it("should return false for username containing invalid characters", () => {
      expect(Validator.validateUsername("user@name")).toBe(false);
      expect(Validator.validateUsername("myusername#")).toBe(false);
    });

    it("should return false for username that is too short or too long", () => {
      expect(Validator.validateUsername("a")).toBe(false);
      expect(Validator.validateUsername("this_username_is_way_too_long")).toBe(
        false
      );
    });

    it("should return false for username starting or ending with invalid characters", () => {
      expect(Validator.validateUsername(".username")).toBe(false);
      expect(Validator.validateUsername("_username")).toBe(false);
      expect(Validator.validateUsername("-username")).toBe(false);
      expect(Validator.validateUsername("username.")).toBe(false);
      expect(Validator.validateUsername("username_")).toBe(false);
      expect(Validator.validateUsername("username-")).toBe(false);
    });

    it("should return false for username containing consecutive dots, underscores, or hyphens", () => {
      expect(Validator.validateUsername("user..name")).toBe(false);
      expect(Validator.validateUsername("myusername__")).toBe(false);
      expect(Validator.validateUsername("myusername--")).toBe(false);
    });
  });
});
