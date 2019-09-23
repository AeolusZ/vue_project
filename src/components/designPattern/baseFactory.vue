<template>
    <div>
        简单工厂模式
        <ul>
            <li id="text"></li>
            <li id="link"></li>
            <li id="img"></li>
        </ul>
    </div>
</template>
<script>
// 简易版
const factory = {}
factory.student= function(){
    console.log('student')
}
factory.teacher = function(){
    console.log('teacher')
}
factory.getRole = function(type) {
    return new factory[type]
}

var page = page || {};
page.dom = page.dom || {};

//子函数1：处理文本
page.dom.Text = function () {
    this.insert = function (where) {
        var txt = document.createTextNode(this.url);
        where.appendChild(txt);
    };
};

//子函数2：处理链接
page.dom.Link = function () {
    this.insert = function (where) {
        var link = document.createElement('a');
        link.href = this.url;
        link.appendChild(document.createTextNode(this.url));
        where.appendChild(link);
    };
};

//子函数3：处理图片
page.dom.Image = function () {
    this.insert = function (where) {
        var im = document.createElement('img');
        im.src = this.url;
        im.style.height = '400px'
        im.style.width = '300px'
        where.appendChild(im);
    };
};

page.dom.factory = function (type) {
    return new page.dom[type];
}

console.log(factory.getRole('teacher'))
export default {
    name: 'baseFactory',
    data(){
        return {
           
        }
    },
    mounted(){
        var oLink = page.dom.factory('Link');
        oLink.url = 'https://baike.baidu.com/item/%E6%B1%AA%E8%8B%8F%E6%B3%B7/5068978?fr=aladdin';
        oLink.insert(document.getElementById('link'));

        var oText = page.dom.factory('Text');
        oText.url = '汪苏泷是一个小可爱';
        oText.insert(document.getElementById('text'));
    
        var oText = page.dom.factory('Image');
        oText.url = 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=367bd7509c529822113e3191b6a310ae/c8ea15ce36d3d539c658e4543687e950342ab0c4.jpg';
        oText.insert(document.getElementById('img'));
    },
    methods: {
       
    }
}
</script>
<style  scoped>

</style>