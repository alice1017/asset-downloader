// Types
// Targets
import { GithubAPIClient } from "../src/api";
// Libraries
import assert = require("assert");
import sinon = require("sinon");


describe("src/api.ts", () => {

  const client = new GithubAPIClient();

  describe("Method: search.repositories", () => {

    it("A full-name of 1st item is 'peco/peco' when search by 'peco'", async () => {

      const clientMock = sinon.mock(client).expects("search");
      clientMock.withArgs("peco").returns({
        items: [{"full_name": "peco/peco"}]
      });

      const response = await client.search("peco");
      assert.equal(
        response.items[0].full_name,
        "peco/peco"
      );

    });

  });

});
