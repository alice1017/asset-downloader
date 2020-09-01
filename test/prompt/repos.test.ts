// Types
// Target
import {
  renderRepositories,
  column2Choice,
  makeQuestions
} from "../../src/prompt/repos/repos";
// Libraries
import assert = require("assert");


describe("src/prompt/repos/repos.ts", () => {

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

  describe("Function: makeQuestions", () => {

    it("Return questions correctly", () => {

      const name = "abc/def";
      const description = "description";
      const choices = [{
        name: `${name} ${description}`,
        value: name,
        short: name
      }];

      assert.deepEqual(
        makeQuestions(choices),
        [{
          type: "list",
          name: "repository",
          message: "Please select a repository what you want to download an asset",
          loop: false,
          choices: choices
        }]
      );

    });

  });

});

