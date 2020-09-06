// Types
import { Release } from "../../src/prompt/assets/assets";
// Targets
import {
  generateChoicesFromReleases,
  makeQuestions
} from "../../src/prompt/assets/assets";
// Libraries
import assert = require("assert");


describe("src/prompt/assets/assets.ts", () => {

  const tagName = "v1.0.0";
  const assetName = "main.zip";
  const url = "http://";

  const choices = [{
    name: `${tagName}/${assetName}`,
    value: url
  }];

  describe("Function: generateChoicesFromReleases", () => {
    it("Return valid choices", () => {

      const releases: Release[] = [{
        tag_name: tagName,
        assets: [{
          name: assetName,
          browser_download_url: url
        }]
      }];

      assert.deepEqual(
        generateChoicesFromReleases(releases),
        choices
      );

    });
  });

  describe("Function: makeQuestions", () => {
    it("Return valid questions", () => {
      assert.deepEqual(
        makeQuestions(choices),
        [{
          type: "list",
          name: "releases",
          message: "Please select an asset what you want to download",
          loop: false,
          choices: choices
        }]
      );
    });
  });

});
