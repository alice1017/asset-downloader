// Types
// Targets
import { GithubAPIClient } from "../src/api";
import { Octokit } from "@octokit/rest";
// Libraries
import assert = require("assert");
import sinon = require("sinon");


describe("src/api.ts", () => {

  class TestClient extends GithubAPIClient {
    constructor(octokit: Octokit) {
      super();
      this.octokit = octokit;
    }
  }

  describe("Method: GithubAPIClient.search", () => {

    it("A full-name of 1st item is 'peco/peco' when search by 'peco'", async () => {

      const octokit = new Octokit();
      const mock = sinon.mock(octokit.search).expects("repos");
      mock
        .withArgs({q: "peco", sort: "stars"})
        .returns({
          data: {
            items: [{ full_name: "peco/peco" }]
          }
        });
      mock.once();

      const client = new TestClient(octokit);
      const response = await client.search("peco");
      assert.equal(
        response.items[0].full_name,
        "peco/peco"
      );
      mock.verify();
    });

  });

  describe("Method: GithubAPIClient.repository", () => {

    it("Repository full-name is 'peco/peco'", async () => {

      const octokit = new Octokit();
      const mock = sinon.mock(octokit.repos).expects("get");
      mock
        .withArgs()
        .returns({
          data: {
            full_name: "peco/peco"
          }
        });
      mock.once();

      const client = new TestClient(octokit);
      const response = await client.repository("peco", "peco");
      assert.equal(
        response.full_name,
        "peco/peco"
      );
    });

  });

});
