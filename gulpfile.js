/**
 * @file gulpfile.js
 * @author xiaohong8023@outlook.com
 */

const fs = require('fs');
const gulp = require('gulp');
const zip = require('gulp-zip');

function getTemplates() {
    let dirData = fs.readdirSync('./templates');
    return dirData;
}

/**
 * 压缩模板文件
 */
gulp.task('zip', function (done) {
    let templates = getTemplates();
    templates.forEach(template => {
        console.log(`compress template [${template}]`);
        gulp.src(
            [
                `templates/${template}/**`,
                `!templates/${template}/{node_modules,node_modules/**,dist,dist/**}`
            ],
            {
                dot: true
            })
            .pipe(zip(`${template}.zip`))
            .pipe(gulp.dest('zips'));
    });

    done();
});


