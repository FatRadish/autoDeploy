import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

export default [
  // ES 模块版本
  {
    input: 'app.js',
    output: {
      file: 'dist/autoUpload.js',
      format: 'es',
      banner: '#!/usr/bin/env node',
      sourcemap: true
    },
    external: [
      'archiver',
      'inquirer',
      'node-ssh',
      'child_process',
      'fs',
      'path',
      'node:path',
      'node:fs'
    ],
    plugins: [
      nodeResolve({
        preferBuiltins: true
      }),
      commonjs(),
      json(),
      terser({
        compress: {
          drop_console: false, // 保留 console 输出
          drop_debugger: true
        },
        mangle: {
          reserved: ['main'] // 保留 main 函数名
        }
      })
    ]
  },
  // CommonJS 版本
  {
    input: 'app.js',
    output: {
      file: 'dist/autoUpload.cjs',
      format: 'cjs',
      banner: '#!/usr/bin/env node',
      sourcemap: true
    },
    external: [
      'archiver',
      'inquirer',
      'node-ssh',
      'child_process',
      'fs',
      'path',
      'node:path',
      'node:fs'
    ],
    plugins: [
      nodeResolve({
        preferBuiltins: true
      }),
      commonjs(),
      json(),
      terser({
        compress: {
          drop_console: false,
          drop_debugger: true
        },
        mangle: {
          reserved: ['main']
        }
      })
    ]
  }
];
