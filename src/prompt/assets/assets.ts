//Types
import { Choice } from "../../types";
import { QuestionCollection } from 'inquirer';
//Libraries


export interface Release {
  tag_name: string,
  assets: {
    name: string,
    browser_download_url: string
  }[]
};

export function generateChoicesFromReleases<R extends Release[]>(releases: R): Choice[] {

  const choices: Choice[] = [];

  for (const release of releases) {
    const { tag_name: tagName, assets } = release;

    for (const asset of assets) {
      const { name: assetName, browser_download_url: downloadUrl } = asset;

      choices.push({
        name: `${tagName}/${assetName}`,
        value: downloadUrl,
      });
    }

  }

  return choices;
}


export function makeQuestions(choices: Choice[]): QuestionCollection {
  return [
    {
      type: "list",
      name: "asset",
      message: "Please select an asset what you want to download",
      loop: false,
      choices: choices
    }
  ];
}
