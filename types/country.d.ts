export type State = { name: string; code: string };
export type Country = { country_id: number; country_name: string; states: State[] };