// Types
import {
  SearchReposResponseData,
  ReposGetResponseData,
} from "@octokit/types";
// Libraries
import { Octokit } from "@octokit/rest";


export class GithubAPIClient {

  octokit: Octokit;

  constructor() {
    this.octokit = new Octokit();
  }

  public async search(query: string): Promise<SearchReposResponseData> {
    const response = await this.octokit.search.repos({q: query, sort: "stars"});
    return response.data;
  }

  public async repository(owner: string, repo: string): Promise<ReposGetResponseData> {
    const response = await this.octokit.repos.get({ owner, repo });
    return response.data;
  }
}
