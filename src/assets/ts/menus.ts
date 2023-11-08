//顶部菜单和页脚菜单都放这里
const navMenu = [
    {
        name: 'menu.home',
        path: '/',
        subMenuVisible: false,
        isExpand:false,
        isSelected:false,
        isHover:false,
        subMeuns: []
    },
    { name: 'menu.products',
        path: '/products',
        subMenuVisible: false,
        isExpand:false,
        isSelected:false,
        isHover:false,
        subMeuns: [
            {router:"/rental-led-display",name:"Rental LED Display",path:'/series',seriesId:3,isHover:false,isSelected:false,desc:"租赁显示屏",subMenuVisible: false,},
            {router:"/fixed-install-led-display",name:"Fixed Install Led Display",path:'/series',seriesId:4,isHover:false,isSelected:false,subMenuVisible: false,
                desc:"固定安装LED显示屏",
                subMenus:[
                    {router:"/led-cube-screen",name:"led-cube-screen",path:"/product-list",seriesId:3,isHover:false,isSelected:false,desc:"立方体屏幕",},
                ]},
            {router:"/fines-mall-pixel-led-display",name:"Fine/small Pixel Led Display",path:'/series',seriesId:1,isHover:false,isSelected:false,desc:"精细/小像素LED显示屏",subMenuVisible: false,},
            {router:"/transparent-led-display",name:"Transparent LED Display",path:'/series',seriesId:2,isHover:false,isSelected:false,desc:"透明LED显示屏",subMenuVisible: false,},
            {router:"/iposter",name:"Iposter LED Display",path:'/series',seriesId:5,isHover:false,isSelected:false,desc:"海报LED显示屏",subMenuVisible: false,},
            {router:"/creative-display",name:"Creative Display",path:'/series',seriesId:6,isHover:false,isSelected:false,desc:"创意LED显示屏",subMenuVisible: false,},
            {router:"/led-module",name:"LED Module",path:'/series',seriesId:7,isHover:false,isSelected:false,desc:"LED模块",subMenuVisible: false,},
            {router:"/led-display-accessories",name:"LED Display Accessories",path:'/series',seriesId:7,isHover:false,isSelected:false,desc:"显示屏配件",subMenuVisible: false,},
        ] },
    { name: 'menu.news',
        path: '/news',
        subMenuVisible: false,
        isExpand:false,
        isSelected:false,
        isHover:false,
        subMeuns: [
            {router:"company-news",name:"Company News",path:'/news-list',seriesId:2,isHover:false,isSelected:false,desc:"公司新闻",subMenuVisible: false,},
        ] },
    { name: 'menu.case',
        path: '/case',
        subMenuVisible: false,
        isExpand:false,
        isSelected:false,
        isHover:false,
        subMeuns: [
        ] },
    { name: 'menu.factoryShow',
        path: '/factory/aging-test',
        subMenuVisible: false,
        isExpand:false,
        isSelected:false,
        isHover:false,
        subMeuns: [
            {router:"aging-test",name:"Aging Test",path:'/series?seriesId=1',seriesId:2,isHover:false,isSelected:false,desc:"公司新闻",subMenuVisible: false,},
            {router:"smt-machine",name:"SMT Machine",path:'/series?seriesId=1',seriesId:2,isHover:false,isSelected:false,desc:"公司新闻",subMenuVisible: false,},
            {router:"production-line-and-aging-test-area",name:"Production Line and Aging Test Area",path:'/series?seriesId=1',seriesId:2,isHover:false,isSelected:false,desc:"公司新闻",subMenuVisible: false,},
        ] },
    { name: 'menu.contactUs',
        path: '/contact',
        subMenuVisible: false,
        isExpand:false,
        isSelected:false,
        isHover:false,
        subMeuns: [
        ] },
    { name: 'menu.aboutUs',
        path: '/aboutus',
        subMenuVisible: false,
        isExpand:false,
        isSelected:false,
        isHover:false,
        subMeuns: [
            {router:"company-style",name:"Company Style",path:'/news-list',seriesId:2,isHover:false,isSelected:false,desc:"公司风采",subMenuVisible: false,},
            {router:"exhibition",name:"Exhibition Activities",path:'/news-list',seriesId:2,isHover:false,isSelected:false,desc:"展会活动",subMenuVisible: false,},
            {router:"cert",name:"Certifications",path:'/news-list',seriesId:2,isHover:false,isSelected:false,desc:"证书资质",subMenuVisible: false,},
            {router:"team-service",name:"Team Service",path:'/news-list',seriesId:2,isHover:false,isSelected:false,desc:"团队服务",subMenuVisible: false,},
            {router:"delivery",name:"Delivery",path:'/news-list',seriesId:2,isHover:false,isSelected:false,desc:"交货现场",subMenuVisible: false,},
            {router:"responsibility",name:"Responsibility",path:'/news-list',seriesId:2,isHover:false,isSelected:false,desc:"责任使命",subMenuVisible: false,},
            {router:"faq",name:"FAQ",path:'/news-list',seriesId:2,isHover:false,isSelected:false,desc:"问题反馈",subMenuVisible: false,},
        ] },
]
/*const navMenu = [
    {
        name: 'menu.home',
        path: '/',
        subMenuVisible: false,
        isExpand:false,
        isSelected:false,
        isHover:false,
        subMeuns: []
    },
    { name: 'menu.products',
        path: '/products',
        subMenuVisible: false,
        isExpand:false,
        isSelected:false,
        isHover:false,
        subMeuns: [
            {router:"rental-led-display",name:"Rental LED Display",path:'/series',seriesId:3,isHover:false,isSelected:false,desc:"租赁显示屏",subMenuVisible: false,},
            {router:"fixed-install-led-display",name:"Fixed Install Led Display",path:'/series',seriesId:4,isHover:false,isSelected:false,subMenuVisible: false,
                desc:"固定安装LED显示屏",
                minMenu:[
                    {router:"/led-cube-screen",name:"led-cube-screen",path:"/product-list",seriesId:3,isHover:false,isSelected:false,desc:"立方体屏幕",},
                ]},
            {router:"fines-mall-pixel-led-display",name:"Fine/small Pixel Led Display",path:'/series',seriesId:1,isHover:false,isSelected:false,desc:"精细/小像素LED显示屏",subMenuVisible: false,},
            {router:"transparent-led-display",name:"Transparent LED Display",path:'/series',seriesId:2,isHover:false,isSelected:false,desc:"透明LED显示屏",subMenuVisible: false,},
            {router:"iposter",name:"Iposter LED Display",path:'/series',seriesId:5,isHover:false,isSelected:false,desc:"海报LED显示屏",subMenuVisible: false,},
            {router:"creative-display",name:"Creative Display",path:'/series',seriesId:6,isHover:false,isSelected:false,desc:"创意LED显示屏",subMenuVisible: false,},
            {router:"led-module",name:"LED Module",path:'/series',seriesId:7,isHover:false,isSelected:false,desc:"LED模块",subMenuVisible: false,},
            {router:"led-display-accessories",name:"LED Display Accessories",path:'/series',seriesId:7,isHover:false,isSelected:false,desc:"显示屏配件",subMenuVisible: false,},
        ] },
    { name: 'menu.news',
        path: '/news',
        subMenuVisible: false,
        isExpand:false,
        isSelected:false,
        isHover:false,
        subMeuns: [
            {router:"company-news",name:"Company News",path:'/news-list',seriesId:2,isHover:false,isSelected:false,desc:"公司新闻",subMenuVisible: false,},
        ] },
    { name: 'menu.case',
        path: '/case',
        subMenuVisible: false,
        isExpand:false,
        isSelected:false,
        isHover:false,
        subMeuns: [
        ] },
    { name: 'menu.factoryShow',
        path: '/factory/aging-test',
        subMenuVisible: false,
        isExpand:false,
        isSelected:false,
        isHover:false,
        subMeuns: [
            {router:"aging-test",name:"Aging Test",path:'/series?seriesId=1',seriesId:2,isHover:false,isSelected:false,desc:"公司新闻",subMenuVisible: false,},
            {router:"smt-machine",name:"SMT Machine",path:'/series?seriesId=1',seriesId:2,isHover:false,isSelected:false,desc:"公司新闻",subMenuVisible: false,},
            {router:"production-line-and-aging-test-area",name:"Production Line and Aging Test Area",path:'/series?seriesId=1',seriesId:2,isHover:false,isSelected:false,desc:"公司新闻",subMenuVisible: false,},
        ] },
    { name: 'menu.contactUs',
        path: '/contact',
        subMenuVisible: false,
        isExpand:false,
        isSelected:false,
        isHover:false,
        subMeuns: [
        ] },
    { name: 'menu.aboutUs',
        path: '/aboutus',
        subMenuVisible: false,
        isExpand:false,
        isSelected:false,
        isHover:false,
        subMeuns: [
            {router:"company-style",name:"Company Style",path:'/news-list',seriesId:2,isHover:false,isSelected:false,desc:"公司风采",subMenuVisible: false,},
            {router:"exhibition",name:"Exhibition Activities",path:'/news-list',seriesId:2,isHover:false,isSelected:false,desc:"展会活动",subMenuVisible: false,},
            {router:"cert",name:"Certifications",path:'/news-list',seriesId:2,isHover:false,isSelected:false,desc:"证书资质",subMenuVisible: false,},
            {router:"team-service",name:"Team Service",path:'/news-list',seriesId:2,isHover:false,isSelected:false,desc:"团队服务",subMenuVisible: false,},
            {router:"delivery",name:"Delivery",path:'/news-list',seriesId:2,isHover:false,isSelected:false,desc:"交货现场",subMenuVisible: false,},
            {router:"responsibility",name:"Responsibility",path:'/news-list',seriesId:2,isHover:false,isSelected:false,desc:"责任使命",subMenuVisible: false,},
            {router:"faq",name:"FAQ",path:'/news-list',seriesId:2,isHover:false,isSelected:false,desc:"问题反馈",subMenuVisible: false,},
        ] },
]*/
const footContact = {
    title:"CONTACT",
    menu:[
        {
            isHover:false,
            isSelected:false,
            name:"address",
            imgUrl:"https://tentech.oss-cn-shenzhen.aliyuncs.com/icon/address-icon.svg",
            value:"2nd floor ,block14 ,fifth Industry Zone ,Tianliao community ,Guangming New area ,Shenzhen ,China",
        },
        {
            isHover:false,
            isSelected:false,
            name:"email",
            imgUrl:"https://tentech.oss-cn-shenzhen.aliyuncs.com/icon/email-icon.svg",
            value:"flamehu@tentech-leddisplay.com",
        },
        {
            isHover:false,
            isSelected:false,
            name:"phone",
            imgUrl:"https://tentech.oss-cn-shenzhen.aliyuncs.com/icon/phone-icon.svg",
            value:"+86-15818643042",
        },
    ]
}
const footMenu = [
    {
        title:"INFORMATION",
        menu:[
            {
                isHover:false,
                isSelected:false,
                name:"Delivery",
                router:"/",
            },
            {
                isHover:false,
                isSelected:false,
                name:"Team Service",
                router:"/",
            },
            {
                isHover:false,
                isSelected:false,
                name:"News",
                router:"/",
            },
            {
                isHover:false,
                isSelected:false,
                name:"Certifications",
                router:"/",
            },
            {
                isHover:false,
                isSelected:false,
                name:"Site Map",
                router:"/",
            },
        ]
    },
    {
        title:"ABOUT US",
        menu:[
            {
                isHover:false,
                isSelected:false,
                name:"Company Info",
                router:"/",
            },
            {
                isHover:false,
                isSelected:false,
                name:"Company Style",
                router:"/",
            },
            {
                isHover:false,
                isSelected:false,
                name:"Exhibition Activities",
                router:"/",
            },
            {
                isHover:false,
                isSelected:false,
                name:"Responsibility",
                router:"/",
            },
            {
                isHover:false,
                isSelected:false,
                name:"FAQ",
                router:"/",
            },
        ]
    },
    {
        title:"LINKS",
        menu:[
            {
                isHover:false,
                isSelected:false,
                name:"LED Module",
                router:"/",
            },
            {
                isHover:false,
                isSelected:false,
                name:"Creative Display",
                router:"/",
            },
            {
                isHover:false,
                isSelected:false,
                name:"Rental LED Display",
                router:"/",
            },
            {
                isHover:false,
                isSelected:false,
                name:"Fixed Install Led Display",
                router:"/",
            },
            {
                isHover:false,
                isSelected:false,
                name:"Transparent LED Display",
                router:"/",
            },
        ]
    },
]
export default {
    navMenu,footMenu,footContact
}