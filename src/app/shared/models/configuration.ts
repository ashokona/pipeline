export interface Configuration {
  service?: string;
  inputJson?: InputJson[];
}

export interface InputJson {
  type: string;
  model: string;
}

