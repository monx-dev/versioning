import rollupConfig from '@monx/rollup-config';
import { main, browser, module, dependencies } from './package.json';

export default rollupConfig({
  main,
  browser,
  module,
  dependencies,
  file: 'src/index.ts',
  output: 'asd',
});
