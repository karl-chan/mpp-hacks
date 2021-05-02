import typescript from '@rollup/plugin-typescript'

export default {
  input: 'index.ts',
  output: {
    dir: 'dist',
    format: 'iife'
  },
  plugins: [typescript()]
}
