// Types
import {
  SearchReposResponseData,
  ReposGetResponseData
} from "@octokit/types";
// Libraries
import { Octokit } from "@octokit/rest";


const octokit = new Octokit();

export class GithubAPIClient {

  public async search(query: string): Promise<SearchReposResponseData> {
    const response = await octokit.search.repos({q: query, sort: "stars"});
    return response.data;
  }

  public async repository(owner: string, repo: string): Promise<ReposGetResponseData> {
    const response = await octokit.repos.get({ owner, repo });
    return response.data;
  }
}
