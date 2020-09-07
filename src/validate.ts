// Types
import { Flags } from "./types";
// Libraries
import { errors } from "./errors";
import { invalidRepository } from "./helpers";


export function validateFlags(flags: Flags): Flags {
  const { repository } = flags;

  if (repository && invalidRepository(repository)) {
    throw Error(errors.got.invalid.repository);
  }

  return flags;
}

