module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module'
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'no-new': 0,
        'no-undef': 0,
        'no-unused-vars': 0,
        'arrow-parens': 0,
        "spaced-comment": 0, //注释风格要不要有空格什么的
        // allow debugger during development
        'no-debugger': 0,
        "indent": [0, 4],
        "space-before-function-paren": [0, "always"], //函数定义时括号前面要不要有空格
    }
}
