// Types
import { Repository } from "./types";
// Libraries
import { errors } from "./errors";


export function invalidRepository(repository: string): boolean {
  return repository.includes("/") === false;
}

export function parseRepository(repository: string): Repository {
  if (repository.includes("/") === false) {
    throw Error(errors.got.invalid.repository);
  }
  const [owner, repo] = repository.split("/");
  return { owner, repo };
}
