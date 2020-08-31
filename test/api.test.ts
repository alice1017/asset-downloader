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

  describe("Method: GithubAPIClient.releases", () => {

    it("Returns an array contains release objects", async () => {

      const octokit = new Octokit();
      const mock = sinon.mock(octokit.repos).expects("listReleases");
      mock
        .withArgs()
        .returns({
          data: [
            {
              id: 1
            }
          ]
        });
      mock.once();

      const client = new TestClient(octokit);
      const response = await client.releases("peco", "peco");
      assert.equal(
        response[0].id,
        1
      );
      mock.verify();
    });

  });

  describe("Method: GithubAPIClient.assets", () => {

    it("Returns an array contains asset objects", async () => {

      const octokit = new Octokit();
      const mock = sinon.mock(octokit.repos).expects("listReleaseAssets");
      mock
        .withArgs()
        .returns({
          data: [
            {
              name: "peco.zip"
            }
          ]
        });
      mock.once();

      const client = new TestClient(octokit);
      const response = await client.assets("peco", "peco", 1);
      assert.equal(
        response[0].name,
        "peco.zip"
      );
      mock.verify();
    });

  });

});
