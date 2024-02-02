// 复制提醒
document.addEventListener("copy", function () {
    debounce(function () {
        new Vue({
            data: function () {
                this.$notify({
                    title: "成功复制分享链接🍬",
                    message: "您现在可以通过粘贴直接和小伙伴分享啦🍾",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success",
                    duration: 5000
                });
            }
        })
    }, 300);
})

// 分享本页
function share_() {
    let url = window.location.origin + window.location.pathname
    try {
        // 截取标题
        var title = document.title;
        var subTitle = title.endsWith("| 懒总不想学习想睡觉💤") ? title.substring(0, title.length - 14) : title;
        navigator.clipboard.writeText('懒总💤的站内分享\n标题：' + subTitle + '\n链接：' + url + '\n欢迎来到大肥羊学校！🐑🐏🐑');
        new Vue({
            data: function () {
                this.$notify({
                    title: "成功复制分享信息🎉",
                    message: "您现在可以通过粘贴直接跟小伙伴分享了！",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success", 
                    duration: 5000
                });
                // return { visible: false }
            }
        })
    } catch (err) {
        console.error('复制失败！', err);
    }
    new ClipboardJS(".share", { text: function () { return '标题：' + document.title + '\n链接：' + url } });
    btf.snackbarShow("本页链接已复制到剪切板，快去分享吧~")
}

// 防抖
function share() {
    debounce(share_, 300);
}

// new Vue({
//     data: function () {
//         this.$message({
//             title: "成功复制分享链接😜",
//             message: "您现在可以通过粘贴直接和小伙伴分享啦🍾",
//             position: 'top-left',
//             offset: 50,
//             showClose: true,
//             type: "success",
//             duration: 5000
//         });
//     }
// })

