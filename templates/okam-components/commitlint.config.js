/**
 * @file commitlint.config.js
 * @author ${author}
 */

module.exports = {
    rules: {
        'body-leading-blank': [1, 'always'],
        'footer-leading-blank': [1, 'always'],
        'header-max-length': [2, 'always', 72],
        'scope-case': [2, 'always', 'lower-case'],
        'subject-case': [
            2,
            'never',
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
        ],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'type-enum': [
            2,
            'always',
            [
                'feat', // 新功能
                'wip', // 正常功能更新完善
                'fix', // Bug修复
                'refactor', // 代码重构，无新增功能
                'chore', // 其它修改，非代码或者测试修改
                'perf', // 代码性能优化
                'style', // 代码格式修改
                'build', // 构建或者外部依赖变更
                'ci', // 变更 CI 相关配置或者脚本
                'revert', // 回滚上次提交
                'test', // 增加或修改测试用例
                'docs' // 文档修改
            ]
        ]
    }
};
