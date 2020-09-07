// Types
// Targets
import {
  invalidRepository,
  parseRepository
} from "../src/helpers";
// Libraries
import { errors } from "../src/errors";
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

  describe("Function: parseRepository", () => {

    fancy
      .do(() => {
        parseRepository("author");
      })
      .catch(error => {
        assert.equal(
          error.message,
          errors.got.invalid.repository
        );
      })
      .it("Raise an Error when got invalid repository")
    ;

    it("Return valid data when got valid repository", () => {
      const repository = "author/repo";
      assert.deepEqual(
        parseRepository(repository),
        { owner: "author", repo: "repo"}
      );
    });

  });

});
