//固宜居美缝
var productData = [
  [
    {
      link: './product_detail/detail.html',
      "url": "./image/product1.png",
      "href":"./product_detail/detail.html",
      "text": "固宜居美缝剂",
      "shop":"https://item.taobao.com/item.htm?spm=a230r.1.14.16.52e9344cVDAa1T&id=582159718402&ns=1&abbucket=17#detail"
    },
    {
      link: './product_detail/ci_feng_wang.html',
      "url": "./image/detail/ci_feng_wang.png",
      "href":"./product_detail/ci_feng_wang.html",
      "text": "固宜居瓷缝王",
      "shop":"https://item.taobao.com/item.htm?spm=a230r.1.14.26.52e9344cVDAa1T&id=581841988148&ns=1&abbucket=17#detail"
    },
    {
      link: './product_detail/zhen_ci_wang.html',
      "url": "./image/detail/zhen_ci_wang.png",
      "href":"./product_detail/zhen_ci_wang.html",
      "text": "固宜居真瓷王",
      "shop":"https://item.taobao.com/item.htm?spm=a230r.1.14.21.52e9344cVDAa1T&id=582034377909&ns=1&abbucket=17#detail"
    }
  ]
];
//首页
var homeData = {
  //轮播图
  "banner": [
    {
      "id": 1,
      "img": "./image/banner1.jpg",
      "link": "./products.html"
    },
    {
      "id": 2,
      "img": "./image/banner2.png",
      "link": "./products.html"
    },
    {
      "id": 3,
      "img": "./image/banner3.jpg",
      "link": "./products.html"
    }
  ],
  //以下是正文的数据，titleUrl是标题前面图标的路径，subTitle是副标题，分为普通颜色和着重色，content是具体的内容
  "part1": {
    "title": "明星产品",
    "titleUrl": "./image/home_icon1.png",
    "subTitle": {
      "normal": "固宜居美缝剂",
      "bold": "\"热销产品推荐\""
    },
    "content": [
      {
        "url": "./image/product1.png",
        "href":"./product_detail/detail.html",
        "describe": "固宜居美缝剂",
        "shop":"https://item.taobao.com/item.htm?spm=a230r.1.14.16.52e9344cVDAa1T&id=582159718402&ns=1&abbucket=17#detail"
      },
      {
        "url": "./image/detail/ci_feng_wang.png",
        "href":"./product_detail/ci_feng_wang.html",
        "describe": "固宜居瓷缝王",
        "shop":"https://item.taobao.com/item.htm?spm=a230r.1.14.26.52e9344cVDAa1T&id=581841988148&ns=1&abbucket=17#detail"
      },
      {
        "url": "./image/detail/zhen_ci_wang.png",
        "href":"./product_detail/zhen_ci_wang.html",
        "describe": "固宜居真瓷王",
        "shop":"https://item.taobao.com/item.htm?spm=a230r.1.14.21.52e9344cVDAa1T&id=582034377909&ns=1&abbucket=17#detail"
      }
    ]
  },
  "part2": {
    "title": "品牌故事",
    "titleUrl": "./image/home_icon2.png",
    "subTitle": {
      "normal": "固宜居美缝剂，\"安全环保，为健康而生\"",
      "bold": ""
    },
    "content": {
      "url": "./image/product1.png",
      "backgroundUrl": "./image/product_background.png",
      "title": "湖南固宜居新材料有限公司——中国美缝行业领跑者",
      "text": "湖南固宜居新材料有限公司成立于2015年，是一家专业美缝产品研发，生产和销售为一体的高科技公司。领先的科技技术，完善的管理理念，先进的生产设备和绿色环保的原材料使得美缝剂成为中国美缝行业中的佼佼者。公司秉承绿色、环保、可持续发展和实用、方便、快捷的研究理念，坚持以德取人，在学习中育才，在竞争中才的用人思路，认真学习，利用当代先进的管理思想，技术设备和“一丝不苟，精益求精”的工作作风，研制出了美缝剂系列产品。"
    }
  },
  "part3": {
    "title": "技术支持",
    "titleUrl": "./image/home_icon3.png",
    "subTitle": {
      "normal": "将环保做到更好",
      "bold": "这是固宜居做事的态度"
    },
    "content": {
      "url": "",
      "backgroundUrl": "./image/home_technology_background.png",
      "title": "雄厚的技术研发、生产销售、售后服务实力",
      "text": "绿色环保、材料先进，无毒、无味，不含苯、甲苯、二甲苯。符合《国标GB18583-2008》各项有害物质限量指标。美缝剂凝固后表面光滑如瓷，装饰效果特别强，颜色丰富，具有光泽，不褪色，给墙、地面带来更好的整体效果"
    }
  },
  "part4": {
    "title": "服务专区",
    "titleUrl": "./image/home_icon4.png",
    "subTitle": {
      "normal": "愿我的服务质量和你随时相伴",
      "bold": "为你，做得更好"
    },
    "backgroundUrl": "./image/home_service_background.png",
    "content": {
      "url": "",
      "backgroundUrl": "",
      "title": "一个电话，免费上门，10项免费服务;瓷砖美缝更容易",
      "text": "入驻佛山陶瓷总部基地，与各大品牌瓷砖厂家达成战略合作，提供一砖一 配色服务,匠心，让每一米缝隙更有温度，让每一个空间更有内涵，入驻佛山陶瓷总部基地，与各大品牌瓷砖厂家达成战略合作，提供一砖一 配色服务,匠心，让每一米缝隙更有温度，让每一个空间更有内涵，"
    }
  },
  "part5": {
    "title": "荣誉证书",
    "titleUrl": "./image/home_icon5.png",
    "subTitle": {
      "normal": "愿我的服务质量和你随时相伴",
      "bold": "为你，做得更好"
    },
    "content": [
      {
        "url": "./image/cert_1.jpg",
        "title": "中国著名品牌",
        "date":'',
        "text":''
      },
      {
        "url": "./image/cert_2.jpg",
        "title": "中国绿色环保产品",
        "date":'',
        "text":''
      },
      {
        "url": "./image/cert_3.jpg",
        "title": "中国美缝剂行业十大品牌",
        "date":'',
        "text":''
      }
    ]
  }
};
//品牌故事
var storyData = {
  part0: {
    title: '湖南固宜居新材料有限公司——中国美缝行业领跑者',
    url: './image/aboutUs1.png',
    imgDescribe: '配图示例-仅供参考',
    text: [
      '湖南固宜居新材料有限公司成立于2015年，是一家专业美缝产品研发，生产和销售为一体的高科技公司。领先的科技技术，完善的管理理念，先进的生产设备和绿色环保的原材料使得美缝剂成为中国美缝行业中的佼佼者。公司秉承绿色、环保、可持续发展和实用、方便、快捷的研究理念，坚持以德取人，在学习中育才，在竞争中才的用人思路，认真学习，利用当代先进的管理思想，技术设备和“一丝不苟，精益求精”的工作作风，研制出了美缝剂系列产品。',
      '公司主要生产的环氧树脂AB胶，环氧改性固化剂、美缝剂、瓷缝剂，等系列产品，有着丰富的颜色可供选择，一经推出就受到广大客户的好评，现诚招代理，代加工贴标，欢迎全国各地朋友 加入美缝剂行业，同固宜居一起吃鸡！'
    ]
  },
  part1: {
    content: [
      {
        title: '公司愿景',
        text: ['固宜居建材有限公司是瓷砖美化系统领跑者。固宜居建材始终以“追求卓越，志存高远”为企业核心理念，在业内率先实现了流程化、标准化、规模化、品牌化运营的转型，在市场中广受消费者赞誉。','我们注重成效，以确保企业的蓬勃发展和长效业绩。同时也为公司在社会及慈善行动中打下了坚实基础。我们积极进取，以负责求实的企业家精神，为实现目标而不谢努力。'

        ]
      },
      {
        title: '', text: []
      }
    ]
  }
};
//精英团队
var teamData = {
  banner: './image/team_banner.png',
  content: [
    [
      {
        url: './image/team1.png',
        href:'./team_detail/1.html',
        title: '图片仅供参考固宜居美缝团队0',
        text: '美缝团队的整体简介 美缝团队的整体简介 美缝团队的整体简介 美缝团队的整体简介 ......',
      },
      {
        url: './image/team2.png',
        href:'./team_detail/1.html',
        title: '图片仅供参考固宜居美缝团队',
        text: '美缝团队的整体简介 美缝团队的整体简介 美缝团队的整体简介 美缝团队的整体简介 ......',
      },
      {
        url: './image/team3.png',
        href:'./team_detail/1.html',
        title: '图片仅供参考固宜居美缝团队',
        text: '美缝团队的整体简介 美缝团队的整体简介 美缝团队的整体简介 美缝团队的整体简介 ......',
      },
    ],
  ]
};
//服务专区
var serviceData = {
  content: [
    [
      {
        question: '1、我家的是无缝砖，那么还需要留缝吗？大概留多宽？',
        answer: '答：无缝砖也必须要留缝，留1mm的宽度。0.5毫米的深度。',
        date: '12-08',
        time: '11:36',
      },
      {
        question: '2、请问：仿古砖留多宽的缝比较美观？',
        answer: '答：留3-5mm是再好不过了，留5mm是理想状态做完美缝比较清晰',
        date: '11-07',
        time: '14:24',
      },
      {
        question: '3、请问：缝要勾吗？',
        answer: '答：要，一定要勾，固宜居美缝剂在粘在填缝剂上面的，这样既经济、粘接度又牢。勾缝的，那样才会出效果，用美缝剂来做才能体现出好砖的效果，材质一般的砖做完后会感觉提高了几个层次。',
        date: '10-28',
        time: '16:22',
      },
      {
        question: '4、用什么勾缝呢？',
        answer: '答：几十年来大多数是用白水泥进行勾缝，近三四年出现用彩色填缝剂来勾缝，现在最流行的就是用固宜居美缝剂勾缝。',
        date: '09-21',
        time: '08:56',
      },
      {
        question: '5、美缝剂？是不是就是填缝剂中的一种？',
        answer: '答：不是的，它是填缝剂（勾缝剂）的升级产品，就是用来解决填缝剂（勾缝剂）解决不了的瓷砖缝黑的问题，是高分子纳米材料，干了形成一个瓷化的表面和瓷砖一样防水防油，脏了可以和瓷砖一起擦洗，彻底了解决了瓷砖缝黑问题。它具有原来的填缝剂所没有的功能',
        date: '09-24',
        time: '12:31',
      },
      {
        question: '6、为什么美缝剂可以防水防油？',
        answer: '答：因为它是由高分子材料做成的，凝固后表面光滑细腻不挂灰，工人施工的质量也是考虑因素之一',
        date: '08-08',
        time: '09:36',
      },
    ],
  ]
};
//新闻资讯
var newsData = {
  content: [
    [
      {
        url: './image/news1.png',
        href:'./news_detail/1.html',
        title: '固宜居美缝“百日惠战”启东会议，隆重召开！',
        text: '惠万千家庭，铸铁军劲旅。固宜居美缝“百日惠战”启动会议今天正式开始。偌大的会场内聚集了固宜居美缝10位大区经理和50位区域经理,惠万千家庭，铸铁军劲旅。固宜居美缝“百日惠战”启动会议今天正式开始。偌大的会场内聚集了固宜居美缝10位大区经理和50位区域经理',
        date: '12-08',
      },
      {
        url: './image/news2.png',
        href:'./news_detail/1.html',
        title: '固宜居美缝“百日惠战”启东会议，隆重召开！',
        text: '惠万千家庭，铸铁军劲旅。固宜居美缝“百日惠战”启动会议今天正式开始。偌大的会场内聚集了固宜居美缝10位大区经理和50位区域经理,惠万千家庭，铸铁军劲旅。固宜居美缝“百日惠战”启动会议今天正式开始。偌大的会场内聚集了固宜居美缝10位大区经理和50位区域经理',
        date: '12-08',
      },
      {
        url: './image/news3.png',
        href:'./news_detail/1.html',
        title: '固宜居美缝“百日惠战”启东会议，隆重召开！',
        text: '惠万千家庭，铸铁军劲旅。固宜居美缝“百日惠战”启动会议今天正式开始。偌大的会场内聚集了固宜居美缝10位大区经理和50位区域经理,惠万千家庭，铸铁军劲旅。固宜居美缝“百日惠战”启动会议今天正式开始。偌大的会场内聚集了固宜居美缝10位大区经理和50位区域经理',
        date: '12-08',
      },
      {
        url: './image/news4.png',
        href:'./news_detail/1.html',
        title: '固宜居美缝“百日惠战”启东会议，隆重召开！',
        text: '惠万千家庭，铸铁军劲旅。固宜居美缝“百日惠战”启动会议今天正式开始。偌大的会场内聚集了固宜居美缝10位大区经理和50位区域经理,惠万千家庭，铸铁军劲旅。固宜居美缝“百日惠战”启动会议今天正式开始。偌大的会场内聚集了固宜居美缝10位大区经理和50位区域经理',
        date: '12-08',
      },
    ],
  ]
};
//详情
var detailData1 = {
  part1: {
    title: '你还在为这些问题发愁吗？',
    subTitle: 'Are you still worried about these issues？',
    content: [
      {
        url: '../image/detail/detail_part1_1.png',
        text: '卫生间受潮发霉，砖缝脏又黑',
      },
      {
        url: '../image/detail/detail_part1_2.png',
        text: '厨房砖缝被菜汤油渍渗透，严重影响美观',
      },
      {
        url: '../image/detail/detail_part1_3.png',
        text: '使用劣质美缝产品导致地砖空鼓',
      },
      {
        url: '../image/detail/detail_part1_4.png',
        text: '瓷砖缝发霉发黑整体档次 直线下降',
      },
    ]
  },
  part2: {
    title: '固宜居美缝剂/您身边的美缝专家',
    subTitle: 'The American sewing expert',
    content: {
      url: '../image/detail_part2.png',
      text: [
        '1. 优异的自洁性。表面光滑如瓷，不沾脏污，易清洁、一擦就净，真正让瓷砖缝隙永不脏黑。',
        '2. 防水防菌防霉。由高分子聚合物制成，结构致密均匀，形成一层致密的保护膜，防水密封。砖缝不再潮湿，自然不会发生霉变。',
        '3. 抗油污耐酸耐碱耐腐蚀。美缝剂优异的耐酸碱抗油污性能，彻底解决了厨房、卫生间等场所经常与油污和酸碱性物质导致瓷砖缝隙被腐蚀的这一难题。',
        '4. 强度高耐磨损抗老化。普通的填缝材料粘接强度低、易脱落，造成使用寿命很短。固宜居美缝剂高分子化合物分子间依靠碳连接，结构规整、紧密、强度很高，粘接强度很强，耐磨损、抗老化，使用寿命长。'
      ],
      btn: '我要试试',
      btn_href:'../relation.html'
    }
  },
  part3: {
    title: '固宜居美缝剂特点',
    subTitle: 'porcelain characteristics',
    url: '../image/detail_part3.png',
  },
  part4: {
    title: '固宜居美缝剂/选择我们的理由',
    subTitle: 'Choose our reasons',
    describe: '绿色环保、材料先进，无毒、无味，不含苯、甲苯、二甲苯。符合《国标GB18583-2008》各项有害物质限量指标。美缝剂凝固后表面光滑如瓷，装饰效果特别强，颜色丰富，具有光泽，不褪色，给墙、地面带来更好的整体效果',
    content: [
      {
        url: '../image/detail/detail_part4_1.png'
      },
      {
        url: '../image/detail/detail_part4_2.png'
      },
      {
        url: '../image/detail/detail_part4_3.png'
      },
      {
        url: '../image/detail/detail_part4_4.png'
      },
    ]
  },
  part5: {
    title: '固宜居美缝剂/施工案例',
    subTitle: 'Construction case',
    content: [
      {
        url: '../image/detail/detail_part5_1.png',
        text: '施工前'
      },
      {
        url: '../image/detail/detail_part5_2.png',
        text: '施工前'
      },
      {
        url: '../image/detail/detail_part5_3.png',
        text: '施工前'
      },
      {
        url: '../image/detail/detail_part5_4.png',
        text: '施工前'
      },
      {
        url: '../image/detail/detail_part5_5.png',
        text: '施工后'
      },
      {
        url: '../image/detail/detail_part5_6.png',
        text: '施工后'
      },
      {
        url: '../image/detail/detail_part5_7.png',
        text: '施工后'
      },
      {
        url: '../image/detail/detail_part5_8.png',
        text: '施工后'
      },
    ]
  },
  part6: {
    title: '固宜居美缝剂/其它产品推荐',
    subTitle: 'Other products recommended',
    content: [
      {
        "url": "../image/product1.png",
        "link":"./detail.html",
        "text": "固宜居美缝剂",
        "shop":"https://item.taobao.com/item.htm?spm=a230r.1.14.16.52e9344cVDAa1T&id=582159718402&ns=1&abbucket=17#detail"
      },
      {
        "url": "../image/detail/ci_feng_wang.png",
        "link":"./ci_feng_wang.html",
        "text": "固宜居瓷缝王",
        "shop":"https://item.taobao.com/item.htm?spm=a230r.1.14.26.52e9344cVDAa1T&id=581841988148&ns=1&abbucket=17#detail"
      },
      {
        "url": "../image/detail/zhen_ci_wang.png",
        "link":"./zhen_ci_wang.html",
        "text": "固宜居真瓷王",
        "shop":"https://item.taobao.com/item.htm?spm=a230r.1.14.21.52e9344cVDAa1T&id=582034377909&ns=1&abbucket=17#detail"
      }
    ]
  },

};

var ci_feng_wang = {
  part1: {
    title: {
      num:'01',
      cn:'产品介绍',
      en:'Product introduction'
    },
    content: {
      url:'../image/home/home_part1.png',
      describe:'瓷缝王',
      title:'瓷缝王美缝介绍：',
      text:'固宜居美缝剂是高品质的双组份环保美缝产品，采用德国技术的进口优质环保材料，利 用先进设备和精良工艺制成。其色彩丰富、光亮如瓷、具有防霉抑菌、防碱抗裂、粘结牢固、耐污易清洁等优异性能，彻底解决了瓷砖缝隙。房间边角存在的脏黑变黄。发霉生菌、易粘油污、难以擦洗的难越。固宜居 美缝剂是真正的绿色环保产品，无微不至的呵护着美缝师和人们的身体健康。'
    }
  },
  part2: {
    title: {
      num:'02',
      cn:'产品特点',
      en:'Product features'
    },
    content: [
      {
        url:'../image/detail/lv_se_huan_bao.png',
        describe:'绿色环保'
      },
      {
        url:'../image/detail/se_cai_feng_fu.png',
        describe:'色彩丰富'
      },
      {
        url:'../image/detail/yong_bu_zang_hei.png',
        describe:'永不脏黑'
      },
      {
        url:'../image/detail/kang_wu_nai_zang.png',
        describe:'抗污耐脏'
      },
    ]
  },
  part3: {
    title: {
      num:'03',
      cn:'施工事项',
      en:'Construction items'
    },
    content: {
      image:{
        url:'../image/home/home_part1.png',
        describe:'瓷缝王'
      },
      article:[
        {
          tit:'适用范围',
          text:' 1.适用于各种室内墙砖、地砖的美缝，包括瓷砖、微晶石、天然大理石、人造石材、混凝土、木材、玻璃、铝塑板等。 \n \n 2.对于游泳池、蒸人造石材、混凝土、木材、玻璃、铝塑板等',
        },
        {
          tit:'注意事项',
          text:'1、在施工过程中，如中断超过约20分钟未连续打胶时，在混合管内的胶体以渐固化， 不出时，则需要更换新的混合音。 \n \n 2、由于双组份美结剂是通过胶嘴混合后固化 .所以施工时先打出40cm不可使用，以防止混合不均匀出现无法固化现象。 \n \n 3、本公司产品保证出厂质置合格，但用户必须自行决定产品的适用性，对于因施工不当或外来因索所导致的质量问题，其所造成的损失本公司概不承担贵任，本公司拥有最终解释权。'
        }
      ]
    },
  },
  part4: {
    title: {
      num:'04',
      cn:'施工步骤',
      en:'Construction steps'
    },
    content:{
      prod:{
        url:'../image/home/home_part1.png',
        describe:'瓷缝王'
      },
      steps:{
        url:'../image/detail/shi_gong_bu_zhou.png',
        describe:'施工步骤'
      }
    }
  },
  part5: {
    title: {
      num:'05',
      cn:'施工案例',
      en:'Construction steps'
    },
    content:[
      {
        url:'../image/detail/CFW_5_1.png',
        alt:''
      },
      {
        url:'../image/detail/CFW_5_2.png',
        alt:''
      },
      {
        url:'../image/detail/CFW_5_3.png',
        alt:''
      },
      {
        url:'../image/detail/CFW_5_4.png',
        alt:''
      },
      {
        url:'../image/detail/CFW_5_5.png',
        alt:''
      },
      {
        url:'../image/detail/CFW_5_6.png',
        alt:''
      },
    ]
  },
  part6: {
    title: {
      num:'06',
      cn:'推荐产品',
      en:'recommended products'
    },
    content: [
      {
        "url": "../image/product1.png",
        "link":"./detail.html",
        "text": "固宜居美缝剂",
        "shop":"https://item.taobao.com/item.htm?spm=a230r.1.14.16.52e9344cVDAa1T&id=582159718402&ns=1&abbucket=17#detail"
      },
      {
        "url": "../image/detail/ci_feng_wang.png",
        "link":"./ci_feng_wang.html",
        "text": "固宜居瓷缝王",
        "shop":"https://item.taobao.com/item.htm?spm=a230r.1.14.26.52e9344cVDAa1T&id=581841988148&ns=1&abbucket=17#detail"
      },
      {
        "url": "../image/detail/zhen_ci_wang.png",
        "link":"./zhen_ci_wang.html",
        "text": "固宜居真瓷王",
        "shop":"https://item.taobao.com/item.htm?spm=a230r.1.14.21.52e9344cVDAa1T&id=582034377909&ns=1&abbucket=17#detail"
      }
    ]
  },
};

var zhen_ci_wang = {
  part1: {
    title: {
      num:'1',
      cn:'产品介绍',
      en:'Product introduction'
    },
    content: {
      url:'../image/detail/ZCW_part1.png',
      describe:'真瓷王',
      title:'产品详情/ product details',
      text:'固宜居美缝剂是高品质的双组份环保美缝产品，采用德国技术的进口优质环保材料，利 用先进设备和精良工艺制成。其色彩丰富、光亮如瓷、具有防霉抑菌、防碱抗裂、粘结牢固、耐污易清洁等优异性能，彻底解决了瓷砖缝隙。房间边角存在的脏黑变黄。发霉生菌、易粘油污、难以擦洗的难越。固宜居 美缝剂是真正的绿色环保产品，无微不至的呵护着美缝师和人们的身体健康。'
    }
  },
  part2: {
    title: {
      num:'2',
      cn:'产品特点',
      en:'Product features'
    },
    content: {
      url:'../image/detail/ZCW_part2.png',
      alt:'八大特点'
    }
  },
  part3: {
    title: {
      num:'3',
      cn:'注意事项',
      en:'Matters needing attention'
    },
    content: {
      image:{
        url:'../image/detail/ZCW_part1.png',
        describe:'瓷缝王'
      },
      article:[
        {
          tit:'适用范围',
          text:'1.适用于各种室内墙砖、地砖的美缝，包括瓷砖、微晶石、天然大理石、人造石材、混凝土、木材、玻璃、铝塑板等。 \n \n   2.对于游泳池、蒸人造石材、混凝土、木材、玻璃、铝塑板等',
        },
        {
          tit:'注意事项',
          text:'1、在施工过程中，如中断超过约20分钟未连续打胶时，在混合管内的胶体以渐固化， 不出时，则需要更换新的混合音.\n \n 2、由于双组份美结剂是通过胶嘴混合后固化 .所以施工时先打出40cm不可使用，以防止混合不均匀出现无法固化现象.\n \n 3、本公司产品保证出厂质置合格，但用户必须自行决定产品的适用性，对于因施工不当或外来因索所导致的质量问题，其所造成的损失本公司概不承担贵任，本公司拥有最终解释权。'
        }
      ]
    },
  },
  part4: {
    title: {
      num:'4',
      cn:'工艺流程',
      en:'Technological process'
    },
    content:{
      prod:{
        url:'../image/detail/ZCW_part1.png',
        describe:'真瓷王'
      },
      steps:{
        url:'../image/detail/shi_gong_bu_zhou.png',
        describe:'施工步骤'
      }
    }
  },
  part5: {},
  part6: {
    title: {
      num:'5',
      cn:'推荐产品',
      en:'recommended products'
    },
    content: [
      {
        "url": "../image/product1.png",
        "link":"./detail.html",
        "text": "固宜居美缝剂",
        "shop":"https://item.taobao.com/item.htm?spm=a230r.1.14.16.52e9344cVDAa1T&id=582159718402&ns=1&abbucket=17#detail"
      },
      {
        "url": "../image/detail/ci_feng_wang.png",
        "link":"./ci_feng_wang.html",
        "text": "固宜居瓷缝王",
        "shop":"https://item.taobao.com/item.htm?spm=a230r.1.14.26.52e9344cVDAa1T&id=581841988148&ns=1&abbucket=17#detail"
      },
      {
        "url": "../image/detail/zhen_ci_wang.png",
        "link":"./zhen_ci_wang.html",
        "text": "固宜居真瓷王",
        "shop":"https://item.taobao.com/item.htm?spm=a230r.1.14.21.52e9344cVDAa1T&id=582034377909&ns=1&abbucket=17#detail"
      }
    ]
  },
};

//联系我们
var relationData = {
  map: {
    title:'湖南固宜居新材料有限公司',
    address:'地址：湖南省长沙市黄兴镇',
    phone:'电话：0731-86865157',
    postcode:'手机：18108408876 欧阳',

    mapCenter:[113.0839061737, 28.132230],

    mapLnglats:[113.111490,28.135230],
  }
};

// 新闻详情页
var newsDetail1 = {
  title:' 所有人都在怀疑的问题，固宜居美缝小编给您一个答案',
  describe:{
    describeImg:'../image/news_detail.png',
    describeText:[
      '雄鹰搏击长空，你可知道它初生时的孱弱；大河滔滔灌海，         你可知道它孕育于涓涓细流。任何事情的成功都不是一蹴而就的          ，正如固宜居美缝剂能够成长为美缝行业的领跑者一样！',
      '很小的时候，我们就听过——绝对不要忽视细微事物的威力。因为细微事物的独特定位，我们就绝不能忽视它未来将会拥有的巨大潜力。',
      '美缝行业的开辟，对于装修行业来说无疑是一件大事。而它的成长，也是自萌芽到茁壮、从细微到磅薄。今天我们就来谈谈，美缝剂的成长之路，谈谈它的成长给我们的启示——'
    ],
    imgDescribe:''
  },
  text:[
    {title:'01填缝剂', text:[
      '早期的填缝剂是“砂浆”，由沙子混合石灰膏、黏土等粘结材料，和水制成。它的优点是价格低廉、黏结性好，但容易形成空隙，极容易变脏。',
        '后来，出现了白色硅酸盐水泥，简称“白水泥”。相信做过装修的人都不会陌生。这种填缝剂极易发霉，隐藏污渍、细菌'
      ]},
    {title:'02近年的成熟产品', text:[
      '经过“填缝”工艺的发展，满满的开始出现了改进型产品——聚合物水泥基填缝剂。是比较好的一种填缝剂，它在成分上加入了防霉剂、聚合物粉末乳胶材料、颜料等，强度高，具备防霉特征，颜色也更丰富。'
      ]},
    {title:'03美缝剂', text:[
      '环氧树脂填缝剂，俗称真瓷胶、美瓷剂等。这一时期，标志着美缝剂产品的初步成型。利用环氧树脂的高防腐特性、高强度、耐磨的特点，搭配固化剂及颜料，对于瓷砖美缝的耐用性能及美观体验，有了质的飞跃。',
    ]},
  ]
};


//团队详情页
var teamDetail1 = {
  title:'固宜居美缝团队 ',
  describe:{
    describeImg:'../image/team_detail.png',
    describeText:[
      {
        type:'title',
        text:'★★★★★固宜居五星级美缝顾问'
      },{
        type:'subtitle',
        text:'【美缝热线】：0731-86865157'
      },
      {
        text:'从事美缝行业多年，有非常资深的美缝施工经验，以专业的服务态度，过硬的美缝施工技术，完善的售后服务得到了广大业主的一致好评。'
      }
    ],
    imgDescribe:''
  },
  text:[
    {title:'免费量房、选色；一砖一配色', text:[
      '固宜居系列产品授权服务团队，给全城业主提供更实惠的服务，免费量房选色，或者是根据您家的瓷砖由固宜居品牌专业美缝顾问推荐一砖一配色服务！给您打造一个更完美的家！'
      ]},
    {title:
      '固宜居品牌星级美缝施工团队，服务更有保障', text:[
      '告别游击队的偷工减料工程，选择固宜居品牌星级施工团队，正式开工之前签订协议，所用产品均是厂家直供，每一位美缝师都是经过系统培训后上岗，有长达5年施工经验，能够完美的做好各种材质类型的瓷砖'
      ]},
    {title:'一户一保，售后更有保障！', text:[
      '选择固宜居品牌产品授权施工团队，签订一户一保协议，更有售后保障！央视网商城优选品牌美缝产品+星级美缝施工团队+中国人保协议！无任何后顾之忧，美缝，就选固宜居！',
    ]},
  ]
};
