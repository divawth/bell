module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['mocha', 'chai'],
    plugins: ['karma-mocha', 
      'karma-chai', 
      'karma-chrome-launcher', 
      'karma-coverage',
      'babel-plugin-istanbul'
    ],
    reporters: ['coverage'],
    files: [
      './test.js'
    ],
    coverageReporter: {
      // 配置生成的代码覆盖率文件存放位置
      dir: './coverage',
      reporters: [
        // 生成 lcov.info 以及 html 文件，lcov.info 该文件中包含了详细的每个文件，每行，每个函数的执行信息。
        { type: 'lcov', subdir: '.' },
        // 在命令行输出简要覆盖率数据
        { type: 'text-summary' }
      ]
    },
    preprocessors: {
      './test.js': []
    },
    singleRun: true
  })
}