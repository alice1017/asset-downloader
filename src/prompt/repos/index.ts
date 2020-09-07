// Types
import { SearchAPIResult } from "../../types";
import { Answers } from "inquirer";
// Libraries
import inquirer = require('inquirer');
import {
  renderRepositories,
  column2Choice,
  makeQuestions
} from "./repos";

export async function promptRepositories<S extends SearchAPIResult>(repositories: S[]): Promise<Answers> {
  const column = renderRepositories(repositories);
  const choices = column2Choice(column);
  const questions = makeQuestions(choices);
  return await inquirer.prompt(questions);
}

