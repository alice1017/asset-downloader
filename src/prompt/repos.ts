// Types
import { Repository, Choice } from "../types";
import { GlobalOptions } from "columnify";
// Libraries
import columnify = require("columnify");


export function renderRepositories<R extends Repository>(repositories: R[]): string {

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

export function column2Choice() {}

export function makeQuestions() {}

export function prompt() {}
