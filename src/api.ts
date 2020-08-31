// Types
import {
  SearchReposResponseData,
  ReposListReleasesResponseData,
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

  public async releases(owner: string, repo: string): Promise<ReposListReleasesResponseData>{
    const response = await this.octokit.repos.listReleases({owner, repo});
    return response.data;
  }
}
