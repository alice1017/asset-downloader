// Types
// Targets
import {
  invalidRepository,
  parseRepository
} from "../src/helpers";
// Libraries
import { fancy } from "fancy-test";
import assert = require("assert");


describe("src/helpers.ts", () => {

  describe("Function: invalidRepository", () => {

    it("Return false when got valid repository", () => {
      const repository = "author/repo";
      assert.equal(
        invalidRepository(repository),
        false
      );
    });

    it("Return true when got invalid repository", () => {
      const repository = "author";
      assert.equal(
        invalidRepository(repository),
        true
      );
    });

  });
});
