module.exports = {
  root: true, // 标识这是根配置文件
  env: {
    browser: true, // 支持浏览器全局变量
    es2021: true, // 支持 ES2021 语法
    node: true, // 支持 Node.js 全局变量
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error', // 将 Prettier 规则作为 ESLint 错误
    'no-console': 'warn', // 禁用 console 语句，显示警告
    'no-debugger': 'error', // 禁用 debugger 语句，显示错误
    'no-unused-vars': 'off', // 禁用 no-unused-vars 规则，因为 TypeScript 会处理
    '@typescript-eslint/no-unused-vars': ['error'], // 启用 @typescript-eslint/no-unused-vars 规则
    'no-empty': ['error', { 'allowEmptyCatch': true }], // 禁用空块语句，但允许空的 catch 子句
    'no-duplicate-imports': 'error', // 禁止重复导入
    'eqeqeq': ['error', 'always'], // 强制使用 === 和 !==
    'curly': ['error', 'all'], // 强制所有控制语句使用大括号
    'semi': ['error', 'always'], // 强制使用分号
    'quotes': ['error', 'single'], // 强制使用单引号
    'indent': ['error', 2], // 强制使用 2 个空格缩进
    'linebreak-style': ['error', 'unix'], // 强制使用 Unix 风格的换行符
    'comma-dangle': ['error', 'always-multiline'], // 在多行元素结尾添加逗号
    'object-curly-spacing': ['error', 'always'], // 强制在对象字面量的大括号内使用空格
  }
};
