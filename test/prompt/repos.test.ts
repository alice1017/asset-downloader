// Types
// Target
import {
  renderRepositories,
  column2Choice
} from "../../src/prompt/repos";
// Libraries
import assert = require("assert");


describe("src/prompt/repos.ts", () => {

  describe("Function: renderRepositories", () => {

    it("Truncate description correctly", () => {
      const full_name = "peco/peco";
      const description = new Array(60).fill("a").join("");
      const truncated = description.substr(0, 49) + "…";
      const repositories = [
        {
          full_name,
          description
        }
      ];

      const column = renderRepositories(repositories);
      assert.equal(
        column,
        `${full_name} ${truncated}`
      );
    });

    it("If description is undefined, ignore it", () => {
      const repositories = [
        {
          full_name: "abc/def"
        },
      ];

      const column = renderRepositories(repositories);
      assert.equal(
        column,
        "abc/def "
      );
    });

    it("Columnify multiple repositories correctly", () => {
      const repositories = [
        {
          full_name: "abc/def",
          description: "description"
        },
        {
          full_name: "ABCD/EFG",
          description: "DESCRIPTION"
        }
      ];

      const column = renderRepositories(repositories);
      assert.equal(
        column,
        "abc/def  description\nABCD/EFG DESCRIPTION"
      );
    });

  });

  describe("Function: column2Choice", () => {

    it("Return choices correctly", () => {
      const name = "abc/def";
      const description = "description";
      const column = `${name} ${description}`;

      assert.deepEqual(
        column2Choice(column),
        [{
          name: column,
          value: name,
          short: name
        }]
      );
    });

  });

});

