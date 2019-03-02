/**
 * @file Babel config
 */

'use strict';

const path = require('path');

module.exports = {
    env: {
        development: {
            plugins: [
                [
                    'module-resolver',
                    {
                        alias: {
                            'okam-example': path.join(__dirname, 'example/src'),
                            'test': path.join(__dirname, 'test/tasks')
                        }
                    }
                ]
            ]
        }
    }
};
