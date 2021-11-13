window.addEventListener('load',function(){
    var btnl = document.querySelector('.btnl');
    var btnr = document.querySelector('.btnr');
    var box = document.querySelector('.box');
    //鼠标移入 移出
    box.addEventListener('mouseenter',function(){
        btnl.style.display = 'block';
        btnr.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    box.addEventListener('mouseleave',function(){
        btnl.style.display = 'none';
        btnr.style.display = 'none';
        timer = setInterval(function(){
            btnr.click();
        },2000)
    })
    //底部小圆圈
    var ol = document.querySelector('ol');
    var ul = document.querySelector('ul');
    for(var i = 0 ; i < ul.children.length ; i++){
        var li = document.createElement('li');
        ol.appendChild(li);
        li.setAttribute('index',i);
        li.addEventListener('click',function(){
            for(var i = 0 ;i < ol.children.length; i++){
                ol.children[i].className = '';
            }
            this.className = 'current';
            //点击小圆圈移动
            var index = this.getAttribute('index');
            circle = num = index;
            var ulMove = -index * box.offsetWidth ;
            animate(ul,ulMove);
        })
    }
    ol.children[0].className = 'current';
    ol.style.left = (box.offsetWidth - ol.offsetWidth) / 2 + 'px';
    //复制节点
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //右侧点击移动
    var num = 0;
    var circle = 0;
    btnr.addEventListener('click',function(){
        if(num == ul.children.length - 1){
            ul.style.left = 0 ;
            num = 0;
        }
        num++;
        var ulMove = box.offsetWidth * num;
        animate(ul,-ulMove);
        circle++;
        if(circle == ol.children.length){
            circle = 0;
        }
        fn1();
    })
    //左侧点击移动
    btnl.addEventListener('click',function(){
        if(num == 0){
            num = ul.children.length - 1;
            ul.style.left = - num * box.offsetWidth + 'px';
            
        }
        num--;
        var ulMove = box.offsetWidth * num;
        animate(ul,-ulMove);
        circle--;
        if(circle < 0){
            circle = ol.children.length - 1;
        }
        fn1();
    })
    function fn1(){
        for(var i = 0; i < ol.children.length ; i++){
            ol.children[i].className = '';
            
        }
        ol.children[circle].className = 'current';
    }
    var timer = setInterval(function(){
        btnr.click();
    },2000)
})