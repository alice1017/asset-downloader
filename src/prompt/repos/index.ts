// Types
import { Repository } from "../../types";
import { Answers } from "inquirer";
// Libraries
import inquirer = require('inquirer');
import {
  renderRepositories,
  column2Choice,
  makeQuestions
} from "./repos";

export async function promptRepositories<R extends Repository>(repositories: R[]): Promise<Answers> {
  const column = renderRepositories(repositories);
  const choices = column2Choice(column);
  const questions = makeQuestions(choices);
  return await inquirer.prompt(questions);
}

