import { registerPlugin } from '@capacitor/core';

import type { MacAddressPlugin } from './definitions';

const MacAddress = registerPlugin<MacAddressPlugin>('MacAddress', {
  web: () => import('./web').then(m => new m.MacAddressWeb()),
});

export * from './definitions';
export { MacAddress };
