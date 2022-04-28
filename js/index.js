import data from "./data.js";
//创建dom
const doms = {
    header: null,
    paragraphHeader: null,
    paragraphP: null,
    image: null,
    footer: null,
    beforeBtn: null,
    nextBtn: null,
    checkBox:null,
    audio:null,
}
// 初始化page值
let page = 1
// 初始化音乐播放状态
let play = false
//当页面加载完毕
window.onload = function () {
    getDoms()
    setPageData(page)
    watchBtn()
}
//获取dom节点
function getDoms() {
    doms.header = document.getElementById('header-text')
    doms.paragraphHeader = document.getElementById('paragraph-header-text')
    doms.paragraphP = document.getElementById('paragraph-p-text')
    doms.paragraph = document.getElementById('paragraph')
    doms.image = document.getElementById('image')
    doms.imageBox = document.getElementById('img-box')
    doms.footer = document.getElementById('footer-text')
    doms.beforeBtn = document.getElementById('before-btn')
    doms.nextBtn = document.getElementById('next-btn')
    doms.checkBox = document.getElementById('check-me')
    doms.audio =  document.getElementById('audio')
}
//重置动画
function setAnimista() {
    //先去除元素中动画的class
    doms.header.classList.remove('slide-bottom')
    doms.paragraph.classList.remove('slide-right')
    doms.imageBox.classList.remove('slide-left')
    doms.footer.classList.remove('slide-top')
    //重置元素宽度，只有这样才能重新激活动画
    void doms.header.offsetWidth;
    void doms.paragraph.offsetWidth;
    void doms.imageBox.offsetWidth;
    void doms.footer.offsetWidth;
    //将动画的类重新附上
    doms.header.classList.add("slide-bottom");
    doms.paragraph.classList.add("slide-right");
    doms.imageBox.classList.add("slide-left");
    doms.footer.classList.add("slide-top");
}
//监听按钮事件
function watchBtn() {
    doms.beforeBtn.onclick = function () {
        page -= 1
        setPageData(page)
        setAnimista()
    }
    doms.nextBtn.onclick = function () {
        page += 1
        setPageData(page)
        setAnimista()
    }
    doms.checkBox.onclick = function(){
        play = !play
        // 控制音乐播放
        if(play){
            doms.audio.play()
        }else{
            doms.audio.pause()
        }
    }
}
//渲染页面数据
function setPageData(page) {
    //根据页面渲染不同数据
    switch (page) {
        case 1:
            //设置按钮显示隐藏
            doms.beforeBtn.setAttribute('style', 'display:none')
            doms.nextBtn.setAttribute('style', 'display:inline-block')
            //设置头部文本
            doms.header.innerHTML = data.pageOne.header
            //设置文章标题文本
            doms.paragraphHeader.innerHTML = data.pageOne.contentBlack
            //设置文章内容文本
            doms.paragraphP.innerHTML = data.pageOne.content
            //设置图片路径
            doms.image.setAttribute('src', data.pageOne.ImageUrl)
            //设置图片说明属性
            doms.image.setAttribute('alt', 'page1')
            //设置页脚文本
            doms.footer.innerHTML = data.pageOne.footer
            break;
        case 2:
            doms.beforeBtn.setAttribute('style', 'display:inline-block')
            doms.nextBtn.setAttribute('style', 'display:inline-block')
            doms.header.innerHTML = ''
            doms.paragraphHeader.innerHTML = data.pageTwo.contentBlack
            doms.paragraphP.innerHTML = data.pageTwo.content
            doms.image.setAttribute('src', data.pageTwo.ImageUrl)
            doms.image.setAttribute('alt', 'page2')
            doms.footer.innerHTML = data.pageTwo.footer
            break;
        case 3:
            doms.beforeBtn.setAttribute('style', 'display:inline-block')
            doms.nextBtn.setAttribute('style', 'display:inline-block')
            doms.header.innerHTML = ''
            doms.paragraphHeader.innerHTML = data.pageThree.contentBlack
            doms.paragraphP.innerHTML = data.pageThree.content
            doms.image.setAttribute('src', data.pageThree.ImageUrl)
            doms.image.setAttribute('alt', 'page3')
            doms.footer.innerHTML = data.pageThree.footer
            break;
        case 4:
            doms.beforeBtn.setAttribute('style', 'display:inline-block')
            doms.nextBtn.setAttribute('style', 'display:none')
            doms.header.innerHTML = ''
            doms.paragraphHeader.innerHTML = data.pageFour.contentBlack
            doms.paragraphP.innerHTML = data.pageFour.content
            doms.image.setAttribute('src', data.pageFour.ImageUrl)
            doms.image.setAttribute('alt', 'page4')
            doms.footer.innerHTML = data.pageFour.footer
            break;
        default:
            break;
    }
}