import { Command, flags } from "@oclif/command";

const pkg: any = require("../package.json");

export class ApplicationCommand extends Command {

  static usage = "asset-downloader [options]";
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
    const { flags } = this.parse(ApplicationCommand);
    console.log(flags);
  }

}
