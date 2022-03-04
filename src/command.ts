// Types
// Libraries
import { Command, flags } from "@oclif/command";
import { validateFlags } from "./validate";
import { GithubAPIClient } from "./api";
import { promptRepositories } from "./prompt/repos/";
import { promptAssets } from "./prompt/assets/";
import { parseRepository } from './helpers';
import { download } from './download';


const pkg: any = require("../package.json");

export class ApplicationCommand extends Command {

  static usage = " [options]";
  static description = pkg.description;
  static flags = {
    query: flags.string({
      char: "q",
      description: "A query string to find Github repository.",
      exclusive: ["repository"]
    }),
    repository: flags.string({
      char: "r",
      description: "A repository full-name (format: author/name).",
      exclusive: ["query"]
    })
  };

  async run() {
    const context = this.parse(ApplicationCommand);
    const flags = validateFlags(context.flags);

    if (!Object.keys(flags).length) {
      this._help();
      this.exit(1);
    }

    const client = new GithubAPIClient();
    const repository: string = await new Promise(async (resolve) => {

      if (flags.query) {
        const { items: repositories } = await client.search(flags.query);
        const answer = await promptRepositories(repositories);
        resolve(answer.repository);
      }

      else if (flags.repository) {
        resolve(flags.repository);
      }

    });

    const assetUrl: string = await new Promise(async (resolve) => {
      const { owner, repo } = parseRepository(repository);
      const releases = await client.releases(owner, repo);
      const asset = await promptAssets(releases);
      resolve(asset.asset);
    });

    const { fileName } = await download(assetUrl);
    this.log(`Downloaded: ${fileName}`);
    this.exit(0);
  }

}
