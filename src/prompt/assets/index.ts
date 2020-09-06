// Types
import { Answers } from 'inquirer';
import { ReposListReleasesResponseData } from '@octokit/types';
// Libraries
import inquirer = require("inquirer");
import {
  generateChoicesFromReleases,
  makeQuestions
} from "./assets";


export async function promptAssets(releases: ReposListReleasesResponseData): Promise<Answers> {
  const choices = generateChoicesFromReleases(releases);
  const questions = makeQuestions(choices);
  return await inquirer.prompt(questions)
}
