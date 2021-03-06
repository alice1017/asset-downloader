// Types
import { SearchAPIResult, Choice } from "../../types";
import { GlobalOptions } from "columnify";
import { QuestionCollection } from "inquirer";
// Libraries
import columnify = require("columnify");


export function renderRepositories<S extends SearchAPIResult>(repositories: S[]): string {

  interface Column {
    repository: string,
    description?: string
  }

  const columns: Column[] = repositories.map(repo => {
    const { full_name, description } = repo;
    return {
      repository: full_name,
      description: description
    };
  });

  const options: GlobalOptions = {
    truncate: true,
    showHeaders: false,
    config: {
      repository: {
        maxWidth: 30
      },
      description: {
        maxWidth: 50
      }
    }
  };

  return columnify(columns, options);

}

export function column2Choice(column: string): Choice[] {
  const columns: string[] = column.split("\n");
  return columns.map(column => {
    const repo = column.split(" ")[0];
    return {
      name: column,
      short: repo,
      value: repo
    };
  });
}

export function makeQuestions(choices: Choice[]): QuestionCollection {
  return [{
    type: "list",
    name: "repository",
    message: "Please select a repository what you want to download an asset",
    loop: false,
    choices: choices
  }];
}
