import _camelCase from 'lodash-es/camelCase.js';
import _upperFirst from 'lodash-es/upperFirst.js';

import typescript from '@rollup/plugin-typescript';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
import nodePolyfills from 'rollup-plugin-polyfill-node';

const pkgs = [];

[
  {name: 'index'},
  {name: 'is'},
  {name: 'ajax'},
  {name: 'swal'},
  {name: 'url'},
].forEach((pkg) => {
  const isCombined = pkg.name === 'index';

  const inputPath = `src/${pkg.name}.ts`;

  let outputName = `EsUtils`;
  let outputFileDir = `dist`;
  let outputFileName = `es-utils`;

  if (!isCombined) {
    outputName += `_${_upperFirst(_camelCase(pkg.name))}`;
    outputFileDir += `/${pkg.name}`;
    outputFileName += `.${pkg.name}`;
  }

  const rollupConfig = {
    input: inputPath,
    output: [
      {
        name: outputName,
        banner: `/*! ${outputName} ${(new Date()).toISOString()} */\n`,
        file: `${outputFileDir}/${outputFileName}.cjs.js`,
        format: 'cjs'
      },
      {
        name: outputName,
        banner: `/*! ${outputName} ${(new Date()).toISOString()} */\n`,
        file: `${outputFileDir}/${outputFileName}.esm.js`,
        format: 'esm'
      },

      {
        name: outputName,
        banner: `/*! ${outputName} ${(new Date()).toISOString()} */\n`,
        file: `${outputFileDir}/${outputFileName}.umd.js`,
        format: 'umd'
      },
      {
        name: outputName,
        banner: `/*! ${outputName} ${(new Date()).toISOString()} */\n`,
        file: `${outputFileDir}/${outputFileName}.umd.min.js`,
        format: 'umd',
        plugins: [terser()]
      }
    ],
    plugins: [
      typescript(),
      nodePolyfills(),
      nodeResolve(),
      commonjs(),
    ],
  };

  if (pkg.name === 'swal' || pkg.name === 'ajax' || pkg.name === 'index') {
    // https://github.com/sweetalert2/sweetalert2/blob/576e7a16c488bdcc3f07037e7cd8599e71ebf945/gulpfile.js#L81
    rollupConfig.onwarn = (warning, rollupWarn) => {
      if (warning.code !== 'CIRCULAR_DEPENDENCY' && warning.code !== 'THIS_IS_UNDEFINED') {
        rollupWarn(warning)
      }
    }
  }

  pkgs.push(rollupConfig);
});

export default pkgs;
