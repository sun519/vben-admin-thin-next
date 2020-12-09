/*
 * @Author: admin
 * @Description:
 */
module.exports = {
    printWidth: 100,
    tabWidth: 4,
    useTabs: false,
    semi: true, // 语句末尾不使用分号
    vueIndentScriptAndStyle: true, // vue文件的script标签和Style标签下的内容需要缩进
    singleQuote: true, // 强制使用单引号
    quoteProps: 'as-needed',
    bracketSpacing: true, // 字面量对象括号中的空格
    trailingComma: 'es5',
    jsxBracketSameLine: false,
    jsxSingleQuote: false,
    arrowParens: 'always',
    insertPragma: false,
    requirePragma: false,
    proseWrap: 'never',
    htmlWhitespaceSensitivity: 'strict',
    endOfLine: 'lf',
    rangeStart: 0,
    overrides: [
        {
            files: '*.md',
            options: {
                tabWidth: 4,
            },
        },
    ],
};
