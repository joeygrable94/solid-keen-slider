import withSolid from 'rollup-preset-solid';

export default withSolid([
  {
    input: 'src/index.tsx',
    targets: ['esm', 'cjs']
  },
  {
    input: 'src/plugins/autoplay/index.ts',
    targets: ['esm', 'cjs']
  },
  {
    input: 'src/plugins/adaptiveHeight/index.ts',
    targets: ['esm', 'cjs']
  },
  {
    input: 'src/plugins/adaptiveWidth/index.ts',
    targets: ['esm', 'cjs']
  }
]);
