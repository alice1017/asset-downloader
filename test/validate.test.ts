// Type
// Targets
import { validateFlags } from "../src/validate";
import { errors } from "../src/errors";
// Libraries
import { fancy } from "fancy-test";
import assert = require("assert");


describe("src/validate.ts", () => {

  describe("Function: validateFlags", () => {

    fancy
      .do(() => {
        validateFlags({repository: "peco"});
      })
      .catch(error => {
        assert.equal(
          error.message,
          errors.got.invalid.repository
        );
      })
      .it("Raise error when got invalid repository.");

    it("Return flags when through validation", () => {
      const validFlags = {repository: "peco/peco"};
      const flags = validateFlags(validFlags);
      assert.deepEqual(
        flags,
        validFlags
      );
    });

  });

});
