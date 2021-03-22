import { WebPlugin } from '@capacitor/core';

import type { MacAddressPlugin } from './definitions';

export class MacAddressWeb extends WebPlugin implements MacAddressPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
