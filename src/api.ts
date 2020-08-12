// Types
import {
  SearchReposResponseData,
} from "@octokit/types";
// Libraries
import { Octokit } from "@octokit/rest";


const octokit = new Octokit();

export class GithubAPIClient {

  public async search(query: string): Promise<SearchReposResponseData> {
    const response = await octokit.search.repos({q: query, sort: "stars"});
    return response.data;
  }

}
