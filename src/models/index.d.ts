// Generated using amplify-cli-version: 7.6.5, amplify-codegen-version: 2.26.21

import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type HomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Home {
  readonly id: string;
  readonly address?: string;
  readonly image_url?: string;
  readonly price?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Home, HomeMetaData>);
  static copyOf(source: Home, mutator: (draft: MutableModel<Home, HomeMetaData>) => MutableModel<Home, HomeMetaData> | void): Home;
}