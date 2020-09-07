// Types
// Libraries


export function invalidRepository(repository: string): boolean {
  return repository.includes("/") === false;
}
