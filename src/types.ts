

export interface Flags {
  query?: string,
  repository?: string
};

export interface SearchAPIResult {
  full_name: string,
  description?: string
}

export interface Choice {
  name: string,
  value: string,
  short?: string
}
