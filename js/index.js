
// close ad btn
var headad = document.querySelector('.head-ad');
var span = document.querySelector('.iconfont'); 
var alink =  headad.querySelector('a');
  //广告关闭
span.onclick = function(){
  headad.style.display = 'none';
};
  // 跳转链接
var server_data = function(type,sl,callback){
  var xhr = new XMLHttpRequest();
  xhr.open(type,sl);
  xhr.send();
  xhr.addEventListener('readystatechange',function(){
    if(xhr.readyState === 4){
      var serverData = JSON.parse(xhr.response);
      callback(serverData);
    }
  });
}

let callback_get_data = function(a){
    // 背景图片
  headad.style.backgroundImage =`url('${a.url1}')` +','+`${a.url2}`;
  headad.addEventListener('click',function(){
      alink.href = a.link;
    });
};

server_data('GET','http://127.0.0.1:8000/resource',callback_get_data);

// 头部经过字体颜色
var headContent = document.querySelector('.head-content');
for(var i=1; i<headContent.children.length; i++){
  headContent.children[i].addEventListener('mouseover',function(){
    for(var i=1; i<headContent.children.length; i++){
      headContent.children[i].style.color = '#353535';      
    }
    this.style.color= '#fa8919';
    this.addEventListener('mouseout',function(){
      this.style.color = '#353535';
    })
  })  
};

// 头部下拉菜单
var icon = document.querySelector('.icon-xiangxia');
var pt = document.querySelector('.pt-rt');
var dropdown = document.querySelector('.course-dropdown');
pt.addEventListener('mouseover',function(){
  dropdown.style.display = 'block';
  icon.classList.remove('re-rotate');
  icon.classList.add('rotate');
});
pt.addEventListener('mouseout',function(){
  dropdown.style.display = 'none';
  icon.classList.remove('rotate');
  icon.classList.add('re-rotate');
});

var practiseIcon = document.querySelector('#Getspan');
var practiseDropdown = document.querySelector('.practise-dropdown');
var getA = document.querySelector('#GetA');
getA.addEventListener('mouseover',function(){
  practiseDropdown.style.display = 'block';
  practiseIcon.classList.remove('re-rotate');
  practiseIcon.classList.add('rotate');
});
getA.addEventListener('mouseout',function(){
  practiseDropdown.style.display = 'none';
  practiseIcon.classList.remove('rotate');
  practiseIcon.classList.add('re-rotate');
});
  // 搜索框
var iconsearch =document.querySelector('.icon-search');
var inputSearch = document.querySelector('#Search input');
var searchDropdown = document.querySelector('.search-dropdown');
var searchMain = document.querySelector('.hot-name');
var hotname = searchMain.children; //事件委托原理e.target是最小的子元素如果点击图片无效返回输入框文字
console.log(hotname[1].children[1]);
var namelist = document.querySelectorAll('.txt');
inputSearch.addEventListener('focus',function(){
  if(inputSearch.value.length === 0){
    searchDropdown.style.display = 'block';
  }else{
    searchDropdown.style.display = 'none';
  }
  
  // 点击下拉菜单事件
  for(var i=0; i<hotname.length; i++){
    hotname[i].setAttribute('data-index',i);
    hotname[i].addEventListener('click',function(){
      var index = this.getAttribute('data-index')
      inputSearch.value = namelist[index].innerHTML;
      iconsearch.click();
      console.log('click');
      if(inputSearch.value.length !== 0){
        searchDropdown.style.display = 'none';
      }
    })
  };
  // 输入事件
  inputSearch.addEventListener('keyup',function(){
    if(inputSearch.value.length === 0){
      searchDropdown.style.display = 'block';
    }else{
      searchDropdown.style.display = 'none';
    }
  });
  // 由于单线程click与blur同等条件下 同时触发时 blur先执行与代码的先后顺序无关 可以给blur加个定时器
  inputSearch.addEventListener('blur',function(){
    console.log('先blur');
    setTimeout(function(){
      searchDropdown.style.display = 'none';
      console.log('延迟执行blur')
    },220);  //这里延迟事件最少超过0.22秒不然还是先执行
  });
});

// left-course
var leftCourse = document.querySelector('.left-course');
let callback_get_course = function(a){
  // var b=Object.keys(a); //这个是对象所有属性值 数组形式
  // var c=Object.values(a) //这个是对象所有值 数组形式
  // for(var i=0; i<b.length/2; i++){
  //   var odd = c[i*2+1];
  //   var even = c[i*2]
  //   var creat_a = document.createElement('a');
  //   creat_a.href = even;
  //   creat_a.innerHTML = odd;
  //   leftCourse.appendChild(creat_a);
  // }
  console.log(a);
  for(var i=0; i<a.length; i++){
    var creat_a = document.createElement('a');
    creat_a.href = a[i].link;
    creat_a.innerHTML = a[i].name;
    leftCourse.appendChild(creat_a);
  }

}

server_data('GET','http://127.0.0.1:8000/leftcourse',callback_get_course);

// 直播课
var aimg = document.querySelectorAll('.live img');
var adot = document.querySelectorAll('.min-dot div');
var rightBtn = document.querySelector('.right-btn'); 
var leftBtn = document.querySelector('.left-btn'); 
  // 后台链接
let callback_get_live =function(a){
  for(var i=0; i<a.length; i++){
    aimg[i].setAttribute('data-index',i);
    aimg[i].src = a[i].src;
    aimg[i].addEventListener('click',function(){
      var index1= this.getAttribute('data-index');
      console.log('date-index',index1);
      window.open(a[index1].ahref);
    })
  };
}
server_data('GET','http://127.0.0.1:8000/live',callback_get_live); 
  // 轮播图自动切换事件

var  num= function(){
  for(var i=0; i<aimg.length ;i++){
    if(aimg[i].className.length>3){
      var num = i;
      return num;
    }
  }
}

var timer = setInterval(function(){
  var num1 = num();
  // console.log(num());
  aimg[num1].className = '';
  adot[num1].className = '';
  var num2 = (num1 + 1)%aimg.length;
  aimg[num2].className = 'on-opactity';
    adot[num2].className = 'active';
    num1 = num2;
},5000);

// 左右点击事件
rightBtn.addEventListener('click',function(){
  clearInterval(timer);
  var num3 = num();
  aimg[num3].className = ''; /*清除上一张样式*/
  adot[num3].className = '';
  var num4 = (num3+1)%aimg.length;
  aimg[num4].className = 'on-opactity'; /*设置当前样式*/
  adot[num4].className = 'active';
  timer = timer = setInterval(function(){  /*重新启用时不用声明var 不然会打开两个定时器*/
    var num1 = num();
    // console.log(num());
    aimg[num1].className = '';
    adot[num1].className = '';
    var num2 = (num1 + 1)%aimg.length;
    aimg[num2].className = 'on-opactity';
    adot[num2].className = 'active';
    num1 = num2;
  },5000);  
});

leftBtn.addEventListener('click',function(){
  clearInterval(timer);
  var num5 = num();
  aimg[num5].className = ''; /*清除上一张样式*/
  adot[num5].className = '';
  if(num5 === 0){
    var num6 = 4;
  }else{
    num6 = num5-1;
  }
  aimg[num6].className = 'on-opactity'; /*设置当前样式*/
  adot[num6].className = 'active';
  timer = timer = setInterval(function(){
    var num1 = num();
    // console.log(num());
    aimg[num1].className = '';
    adot[num1].className = '';
    var num2 = (num1 + 1)%aimg.length;
    aimg[num2].className = 'on-opactity';
    adot[num2].className = 'active';
    num1 = num2;
  },5000);  
})

//  var numValue = function(callback,num){
//   var ab = setInterval(function(){
//     aimg[num].className = '';
//     adot[num].className = '';
//     var num1 = (num + 1)%aimg.length;
//     aimg[num1].className = 'on-opactity';
//     adot[num1].className = 'active';
//     num = num1;
//     console.log(1);
//     callback(num1)
//   },1000);
//   if(clear === 10){
//     setTimeout(function(){
//       clearInterval(ab);
//     },5001)
//   }
//  }
// var a =numValue(function(a){
//   a;
// },0);
// clearInterval(a);

// numValue(function(a){
//   console.log(a)
// },0)
 
  // 小圆点点击事件
for(var i=0; i<adot.length; i++){
  adot[i].setAttribute('data-index',i);
  adot[i].addEventListener('click',function(){
    clearInterval(timer);
    for(var i=0; i<adot.length; i++){
      adot[i].className = '';
      aimg[i].className = '';
    }
    var index = this.getAttribute('data-index');
    this.className ='active';
    aimg[index].className = 'on-opactity';
    timer = timer = setInterval(function(){
      var num1 = num();
      // console.log(num());
      aimg[num1].className = '';
      adot[num1].className = '';
      var num2 = (num1 + 1)%aimg.length;
      aimg[num2].className = 'on-opactity';
      adot[num2].className = 'active';
      num1 = num2;
    },5000);     
  })
}

// 登录链接
var beLog = document.querySelector('.be-log');
beLog.addEventListener('click',function(){
  window.open('https://account.geekbang.org/signin?redirect=https%3A%2F%2Ftime.geekbang.org%2F');
});

var download = document.querySelector('.download-app');
download.addEventListener('click',function(){
  window.open('https://time.geekbang.org/download');
})

// 学习路径
  // 路径链接
var allStudy = document.querySelector('.all-study');
allStudy.addEventListener('click',function(){
  window.open('https://time.geekbang.org/learning/path');
})
  // 课程路径
var rightBt = document.querySelector('.right-bt');
var leftBt = document.querySelector('.left-bt');
var learnContain = document.querySelector('.learn-contain');
var learnList = document.querySelectorAll('.learn-list');
console.log(learnList[0].children[0].children[0]);
let callback_get_mainLearn = function(a){
  console.log(a);
  for(var i=0; i< learnList.length; i++){
    // 后台获取课程跳转链接
    learnList[i].setAttribute('data-index',i);
    learnList[i].addEventListener('click',function(){
      var index3 = this.getAttribute('data-index');
      for(var k=0; k<learnList[index3].children.length; k++){
        learnList[index3].children[k].addEventListener('click',function(){
          var index4 = this.getAttribute('data-index');
          console.log(index4);
          window.open(a[index3][index4].href)
        })
      }
    })
    for(var j=0; j<learnList[i].children.length; j++){
      learnList[i].children[j].setAttribute('data-index',j)
      learnList[i].children[j].children[0].src =a[i][j].src /*图片链接*/     
    }  
  }
}
server_data('GET','http://127.0.0.1:8000/mainLearn',callback_get_mainLearn);
  // 课程路径左右箭头点击
console.log(learnContain.children.length)
function learnContainIndex(){
  for(var i = 0 ; i < learnContain.children.length ; i++){
    var numi = (-1009)*i;
    var c=`translate3d(${numi}px, 0px, 0px)`;
    if(learnContain.style.transform ==c){
      return i;
    }
  }
}

// function arr(){
//   var arr = [];
//   for(var i = 0; i < )
// }
rightBt.addEventListener('click',function(){
  var i = learnContainIndex();
  console.log(i);
  i++;
  i = i%4;
  var x=-1009*i;
  learnContain.style.transform = 'translate3d('+x +'px,0,0)';
})

leftBt.addEventListener('click',function(){
  var i = learnContainIndex();
  if(i == 0){
    i = 3;
  }else{
    i--;
    i = i%4;
  }
  var x = -1009*i;
  learnContain.style.transform = 'translate3d('+x +'px,0,0)';
})

// right-fixed
var Appload = document.querySelector('#Appload');
Appload.addEventListener('click',function(){
  window.open('https://time.geekbang.org/download')
});

var hotjion = document.querySelectorAll('.hot-jion');
function jion(elt,href){
  elt.addEventListener('click',function(){
    window.open(href)  
  })
} 
jion(hotjion[0],'https://time.geekbang.org/activity/promo?page_name=page_509');
jion(hotjion[1],'https://time.geekbang.org/activity/promo?page_name=page_158');
jion(hotjion[2],'https://time.geekbang.org/activity/promo?page_name=page_409');

var man =document.querySelector('.man');
// jion(man,'#man');