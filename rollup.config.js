import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'dist/esm/example.js',
  output: [
    {
      file: 'dist/bundle/browser/example.js',
      format: 'iife',
      name: 'exampleModule'
    },
    {
      file: 'dist/bundle/esm/example.js',
      format: 'es',
    },
  ],
  plugins: [
    resolve(),
  ]
};