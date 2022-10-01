const { response } = require('express');
const express = require('express');

const app = express();

app.all('/resource',(request, response)=>{  
  response.setHeader('Access-Control-Allow-Origin','*');
  response.setHeader('Access-Control-Allow-Headers','*');
  var data = {
    url1: 'https://static001.geekbang.org/resource/image/08/f7/081c82455d0f7fe5622cbc96b5b732f7.png',
    url2: 'linear-gradient(180deg,rgba(128,0,225,.1),rgba(128,0,225,.4))',
    link: 'https://time.geekbang.org/activity/promo?page_name=page_503'
  }
  var str = JSON.stringify(data);
  response.send(str)
  // response.send('url("https://static001.geekbang.org/resource/image/08/f7/081c82455d0f7fe5622cbc96b5b732f7.png",linear-gradient(to bottom,rgba(128,0,225,.1),rgba(128,0,225,.4))');
});

app.all('/leftcourse',(req,res)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','*');
  // var data = {
  //   link1: 'https://time.geekbang.org/resource?m=0&d=5&c=5',
  //   name1: '前端/移动',
  //   link2: 'https://time.geekbang.org/resource?m=0&d=9&c=9',
  //   name2: '计算机基础',
  //   link3: 'https://time.geekbang.org/resource?m=0&d=3&c=3',
  //   name3: '后端/架构',
  //   link4: 'https://time.geekbang.org/resource?m=0&d=8&c=8',
  //   name4: 'AI/大数据',
  //   link5: 'https://time.geekbang.org/resource?m=0&d=6&c=6',
  //   name5: '运维/测试',
  //   link6: 'https://time.geekbang.org/resource?m=0&d=7&c=7',
  //   name6: '产品/运营',
  //   link7: 'https://time.geekbang.org/resource?m=0&d=4&c=4',
  //   name7: '管理/成长',
  //   link8: 'https://time.geekbang.org/resource?m=0&d=68&c=68',
  //   name8: '人文/兴趣',
  //   link9: 'https://time.geekbang.org/resource?m=0&d=69&c=69',
  //   name9: '面试专场',
  //   linkA: 'https://time.geekbang.org/resource?m=0&d=71&c=71',
  //   nameA: '个人成长'
  // }
  var data = [
    {
      link: 'https://time.geekbang.org/resource?m=0&d=5&c=5',
      name: '前端/移动',
    },
    {
      link: 'https://time.geekbang.org/resource?m=0&d=9&c=9',
      name: '计算机基础',
    },
    {
      link: 'https://time.geekbang.org/resource?m=0&d=3&c=3',
      name: '后端/架构',
    },
    {
      link: 'https://time.geekbang.org/resource?m=0&d=8&c=8',
      name: 'AI/大数据',
    },
    {
      link: 'https://time.geekbang.org/resource?m=0&d=6&c=6',
      name: '运维/测试',
    },
    {
      link: 'https://time.geekbang.org/resource?m=0&d=7&c=7',
      name: '产品/运营',
    },
    {
      link: 'https://time.geekbang.org/resource?m=0&d=4&c=4',
      name: '管理/成长',
    },
    {
      link: 'https://time.geekbang.org/resource?m=0&d=68&c=68',
      name: '人文/兴趣',
    },
    {
      link: 'https://time.geekbang.org/resource?m=0&d=69&c=69',
      name: '面试专场',
    },
    {
      link: 'https://time.geekbang.org/resource?m=0&d=71&c=71',
      name: '个人成长',
    }
  ]
  var str=JSON.stringify(data);
  res.send(str)
});

app.all('/live',(req,res)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  var data = [
    {
      src: 'https://static001.geekbang.org/resource/image/31/77/3188290ec240d1a400e9cdfe79850977.jpg?x-oss-process=image/resize,m_fill,h_800,w_1636',
      ahref: 'https://app.jingsocial.com/microFrontend/leadGeneration/jsf-leads/list/webinar/QK7NLUyg47zkeoEPhz3s57/X24bpTDB3qDrsbMAoqDhke'
    },
    {
      src: 'https://static001.geekbang.org/resource/image/de/ae/de9a0cc0493f3018960982eca40a72ae.jpg?x-oss-process=image/resize,m_fill,h_800,w_1636',
      ahref: 'https://time.geekbang.org/column/intro/100002201'
    },
    {
      src: 'https://static001.geekbang.org/resource/image/c7/78/c7b3d85be1b51107f5f6a2f12e20fa78.jpg?x-oss-process=image/resize,m_fill,h_800,w_1636',
      ahref: 'https://time.geekbang.org/activity/promo?page_name=page_498'
    },
    {
      src: 'https://static001.geekbang.org/resource/image/24/9d/24c3e47a3c3f94468b6d2dd1be93909d.jpg?x-oss-process=image/resize,m_fill,h_800,w_1636',
      ahref: 'https://time.geekbang.org/column/intro/100114001'
    },
    {
      src: 'https://static001.geekbang.org/resource/image/39/3b/399fd91196f547cca78c1cd8e11f953b.png?x-oss-process=image/resize,m_fill,h_800,w_1636',
      ahref: 'https://u.geekbang.org/subject/intro/1001226?channel=632ab8c589512&utm_term=banner'
    }
  ]
  var str = JSON.stringify(data);
  res.send(str);
})

app.all('/mainLearn',(req,res)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  var data = [
    [
      {
        src:'	https://static001.geekbang.org/resource/image/ee/9d/ee4e027522f8f7144b12bcd3d8f6b29d.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp',
        href: 'https://time.geekbang.org/learning/path-detail/1',
      },
      {
        src: 'https://static001.geekbang.org/resource/image/30/36/304bfd86dea2698cd6c8147ee8f63c36.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp',
        href: 'https://time.geekbang.org/learning/path-detail/5',
      },
      {
        src: 'https://static001.geekbang.org/resource/image/25/d0/2541de63f52593f6ea77ae38441d46d0.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp',
        href: 'https://time.geekbang.org/learning/path-detail/9',
      },
      {
        src: 'https://static001.geekbang.org/resource/image/99/02/996a69d911814a20eb71012fca4e2002.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp',
        href: 'https://time.geekbang.org/learning/path-detail/26',
      },
      {
        src: 'https://static001.geekbang.org/resource/image/0a/4e/0a03a1e02f4a4bee36989b5a8183274e.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp',
        href: 'https://time.geekbang.org/learning/path-detail/3',
      },
    ],
    [
      {
        src: 'https://static001.geekbang.org/resource/image/8c/c5/8c01e6fea05ef735b122fa6ce9aaa5c5.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp',
        href: 'https://time.geekbang.org/learning/path-detail/11',
      },
      {
        src: 'https://static001.geekbang.org/resource/image/d9/1c/d939189d3152c6d408d2408013608d1c.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp',
        href: 'https://time.geekbang.org/learning/path-detail/6',
      },
      {
        src: 'https://static001.geekbang.org/resource/image/47/3d/4719c58c939a153311e22936d9640c3d.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp',
        href: 'https://time.geekbang.org/learning/path-detail/2',
      },
      {
        src: 'https://static001.geekbang.org/resource/image/d9/eb/d947e24d99fbb947d64a3c00b2af18eb.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp',
        href: 'https://time.geekbang.org/learning/path-detail/10',
      },
      {
        src: 'https://static001.geekbang.org/resource/image/d6/18/d6cc801441d3a8ed981e2b2665d84518.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp',
        href: 'https://time.geekbang.org/learning/path-detail/7',
      },
    ],
    [
      {
        src: 'https://static001.geekbang.org/resource/image/d4/cc/d47d898c4c555325ca5e0e7d6bd707cc.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp',
        href: 'https://time.geekbang.org/learning/path-detail/8',
      },
      {
        src: 'https://static001.geekbang.org/resource/image/46/3c/46747fb5329b26f9826519446eda6f3c.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp',
        href: 'https://time.geekbang.org/learning/path-detail/12',
      },
      {
        src: 'https://static001.geekbang.org/resource/image/dc/a3/dc96f63ca8baea2f6d8ec8e192a353a3.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp',
        href: 'https://time.geekbang.org/learning/path-detail/13',
      },
      {
        src: 'https://static001.geekbang.org/resource/image/7e/d6/7e070c3ab1e7baa6aba589108d912ed6.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp',
        href: 'https://time.geekbang.org/learning/path-detail/14',
      },
      {
        src: 'https://static001.geekbang.org/resource/image/d1/7a/d1a95c305786eb4902362c04c189af7a.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp',
        href: 'https://time.geekbang.org/learning/path-detail/15',
      },
    ],
    [
      {
        src: 'https://static001.geekbang.org/resource/image/1c/17/1c83100965449ef7e1a5144d94744317.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp',
        href: 'https://time.geekbang.org/learning/path-detail/16',
      },
      {
        src: 'https://static001.geekbang.org/resource/image/0c/51/0cc452e11f61a1b7d152316baccd0f51.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp',
        href: 'https://time.geekbang.org/learning/path-detail/17',
      },
    ],
  ]
  var str = JSON.stringify(data);
  res.send(str);
})

app.listen(8000, ()=>{
  console.log('服务已启动，8000端口监听中')
});
