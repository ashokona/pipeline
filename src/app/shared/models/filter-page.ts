export interface FilterPage {
  title?: string;
  filters?: FilterItem[];
}

export interface FilterItem {
  type: string;
  model: string;
  placeHolder?: string;
  options?: any[];
  sourceUrl?: string;
}

export interface FilterPageOptions {
  name: string;
  description: string;
  renders: string[];
  parses: string[];
  filter_fields: string[];
  actions: any;
}
