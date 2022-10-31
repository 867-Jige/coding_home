<template>
    <header class="header-box">
        <a class="home-logo" href="https://zhuimeng.qq.com/"></a>
        <span class="line-icon"></span>
        <a class="index-logo" href="/"></a>
        <div class="nav-box">
            <span :class="{ 'nav-item': true, 'actNav': index == actNavIndex }" v-for="(item, index ) in navList"
                :key="index">
                <a href="/">{{ item }}</a>
            </span>
        </div>
        <div class="creation-btn">立即创作
            <div class="select-box">
                <div class="item-warp">
                    <div class="select-item" v-for="(item, index) in selectList" :key="index">
                        <img class="icon" :src="item.icon" alt="">
                        <span class="name">{{ item.name }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="login-btn">登录</div>
    </header>
    <main>
        <!-- 轮播 -->
        <div class="swiper-box">
            <swiper :loop="swiperOptions.loop" @swiper="onSwiper" :autoplay="swiperOptions.autoplay"
                @slideChange="onSlideChange" :centeredSlides="swiperOptions.centeredSlides" :speed="swiperOptions.speed"
                :delay="swiperOptions.delay" :pagination="{ clickable: true }" :navigation="swiperOptions.navigation"
                :effect="'fade'">
                <swiper-slide class="slide-item">
                    <img src="https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20220909_2huzgbj4onv.png" alt="">
                </swiper-slide>
                <swiper-slide class="slide-item">
                    <img src="https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20221017_i1n62bthmuobanner.png" alt="">
                </swiper-slide>
                <swiper-slide class="slide-item">
                    <img src="https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20220901_rz0z7qqh2gtgebanner.jpg" alt="">
                </swiper-slide>
                <swiper-slide class="slide-item">
                    <img src="https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20220909_9e0choci7rg_20220909101245.jpg"
                        alt="">
                </swiper-slide>
                <swiper-slide class="slide-item">
                    <img src="https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20211230_u9kh06gxj4a79e15a997c42203c515773168a900f9.jpg"
                        alt="">
                </swiper-slide>
                <div class="swiper-nav-tox">
                    <div class="next_btn"></div>
                    <div class="pagination-box">
                        <div @click="toSwiperIndex(0)"
                            :class="{ 'pagination-item': true, 'act-pagination-item': actPaginationIndex == 0 }">第四届追梦营
                        </div>
                        <div @click="toSwiperIndex(1)"
                            :class="{ 'pagination-item': true, 'act-pagination-item': actPaginationIndex == 1 }">
                            深圳创意节创意编程赛
                        </div>
                        <div @click="toSwiperIndex(2)"
                            :class="{ 'pagination-item': true, 'act-pagination-item': actPaginationIndex == 2 }">
                            深圳TGE虚拟机器人挑战赛
                        </div>
                        <div @click="toSwiperIndex(3)"
                            :class="{ 'pagination-item': true, 'act-pagination-item': actPaginationIndex == 3 }">
                            编程与人工智能活动
                        </div>
                        <div @click="toSwiperIndex(4)"
                            :class="{ 'pagination-item': true, 'act-pagination-item': actPaginationIndex == 4 }">
                            腾讯游戏年度故事篇
                        </div>
                    </div>
                    <div class="pre_btn"></div>
                </div>

            </swiper>
        </div>
        <!-- 广播 -->
        <div class="broadcast-box">
            <div class="broadcast-img"></div>
            <div class="broadcast-text">
                {{ broadcastText }}
            </div>
            <div class="broadcast-hot">Hot</div>

        </div>
        <!-- 编程工具 -->
        <div id="codeToolModule" name='codeToolModule'>
            <CodeToolModule></CodeToolModule>
        </div>
        <!-- 课程模块 -->
        <div id="courseModule" name="courseModule">
            <CourseModule></CourseModule>
        </div>
        <!-- 底部 -->
        <div id="footModule">
            <FootModule></FootModule>
        </div>
        <!-- 浮动导航 -->
        <div id="floatBar">
            <FloatBar></FloatBar>
        </div>
    </main>
</template>
    
<script setup >
import { ref, reactive } from 'vue';
import chuangyiIcon from "../assets/imgs/zhongguohangtiantubiaoheji-weizhuanlunkuo-.png"
import PythonIcon from "../assets/imgs/tingche.png"
import threeDIcon from "../assets/imgs/zhengfangti-xianxing.png"
import AiIcon from "../assets/imgs/rengongzhinengdanao.png"
import gameIcon from "../assets/imgs/xiaoyouxi.png"
import yishuIcon from "../assets/imgs/yishu.png"
import cpuIcon from "../assets/imgs/cpuchuliqiyingjian.png"
import jsIcon from "../assets/imgs/js.png"
import CodeToolModule from '../components/CodeToolModule.vue'
import CourseModule from '../components/CourseModule.vue'
import FootModule from '../components/FootModule.vue'
import FloatBar from '../components/FloatBar.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation, EffectFade, Autoplay } from 'swiper';
import 'swiper/less';
import 'swiper/less/navigation';
import "swiper/css/effect-fade";

// Import Swiper styles
import 'swiper/css';
SwiperCore.use([Navigation, EffectFade, Autoplay]);

const navList = ['首页', '实验室', '课程', '名师团', '校园', '社区', '追梦营', 'CodingDay', '赛事活动'];
const selectList = [
    {
        icon: chuangyiIcon,
        name: "创意实验室"
    }, {
        icon: PythonIcon,
        name: "Python实验室"
    }, {
        icon: threeDIcon,
        name: "3D实验室"
    }, {
        icon: AiIcon,
        name: "人工智能实验室"
    }, {
        icon: gameIcon,
        name: "游戏实验室"
    }, {
        icon: yishuIcon,
        name: "艺术(p5)实验室"
    }, {
        icon: cpuIcon,
        name: '硬件实验室'
    }, {
        icon: jsIcon,
        name: 'JS实验室'
    }
]
let broadcastText = ref(null)
let actPaginationIndex = ref(0)
let actNavIndex = ref(0)
let swiperThis = null


const onSwiper = (swiper) => {
    swiperThis = swiper
};
const toSwiperIndex = (index) => {
    swiperThis.slideToLoop(index)
};

const onSlideChange = (swiper) => {
    actPaginationIndex.value = swiper.realIndex
};

const swiperOptions = reactive({
    slidesPerView: 1, // 解决最后一张切换到第一张中间的空白
    centeredSlides: true, // 设置slide居中
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: '.next_btn',
        prevEl: '.pre_btn'
    }, // 自定义分页器
    autoplay: {
        delay: 1500, // 自动切换的时间间隔
        disableOnInteraction: false // 用户操作swiper之后，是否禁止autoplay
    },
    loop: true, // 开启循环
    speed: 1000, // 切换速度
})
const broadcastTextChange = () => {
    const broadcastList = ["立项四年，腾讯互娱如何做编程教育", "2021腾讯追梦营嘉年华圆满落幕", "腾讯编程课进村，这是孩子们创作的“APP”"]
    let index = 0
    broadcastText.value = broadcastList[index]

    setInterval(() => {
        index++
        if (index >= broadcastList.length) {
            index = 0
        }
        broadcastText.value = broadcastList[index]
    }, 1800)
}
broadcastTextChange()
</script>
    
<style scoped lang="less">
.header-box {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    // justify-content: flex-start;

    .home-logo {
        width: 180px;
        height: 52px;
        margin-left: 40px;
        background-image: url('https://coding.qq.com/packages/ecNavigationHeader/2.1.2-alpha.1/dist/2611814e22a171d522f9.png');
        background-size: 180px 52px;
    }

    .line-icon {
        margin: 0 10px;
        width: 1px;
        height: 25px;
        background: #d4dce8;
        display: block;
    }

    .index-logo {
        width: 133px;
        height: 57px;
        background-image: url('../assets/imgs/index_logo.png');
        background-size: 133px 57px;
    }

    .nav-box {
        display: flex;
        align-items: center;
        margin-left: 20px;
        text-align: center;

        .nav-item {
            line-height: 34px;
            border-radius: 26px;
            transition: all 200ms;
            white-space: nowrap;

            a {
                padding: 0 28px;
            }

            @media screen and (max-width: 1300px) {
                a {
                    padding: 0 15px;
                }
            }
        }

        .actNav a {
            color: #0080ff;
            font-weight: bold;
        }

        .nav-item:hover {
            background: rgba(74, 89, 111, 0.1);
        }
    }

    .creation-btn {
        width: 112px;
        line-height: 34px;
        border-radius: 17px;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        background-color: #0080ff;
        text-align: center;
        transition: all 0.5s ease;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .creation-btn::after {
        width: 0px;
        height: 0px;
        content: "";
        border-bottom: 6px solid #fff;
        border-right: 6px solid transparent;
        border-left: 6px solid transparent;
        margin-left: 5px;
        transition: all 200ms;
    }

    .creation-btn:hover {
        .select-box {
            display: block;
        }
    }

    .login-btn {
        line-height: 60px;
        color: rgb(74 89 111 / 60%);
        cursor: pointer;
        margin: 0 0 0 20px;

    }

    .select-box::before {
        // border-color: transparent transparent #fff transparent;
        width: 0px;
        height: 0px;
        content: "";
        position: absolute;
        top: -5px;
        left: 50%;
        margin-left: -10px;
        border-bottom: 10px solid #fff;
        border-right: 10px solid transparent;
        border-left: 10px solid transparent;
    }

    .item-warp {
        border-radius: 10px;
        overflow: hidden;

    }

    .select-box {
        position: absolute;
        top: 36px;
        color: #4a596f;
        border-radius: 10px;
        display: none;
        box-shadow: 0 4px 20px rgb(77, 90, 109, 0.5);
        line-height: 34px;
        font-size: 14px;
        z-index: 10000;
        width: 180px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #fff;

        .select-item {
            padding: 0 20px;
            display: flex;
            align-items: center;

            .icon {
                display: block;
                width: 16px;
                height: 15px;
                margin-right: 10px;
            }
        }

        .select-item:hover {
            background: #f0f3f7;
            color: #009cff;
        }

    }
}

.slide-item {
    img {
        width: 100%;
    }
}

.swiper-nav-tox {
    display: flex;
    align-items: center;
    height: 50px;
    background: rgba(255, 255, 255, 0.7);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    overflow: hidden;
    position: relative;
    top: -50px;
    width: 1200px;
    margin: 0 auto;
    z-index: 1999;
    justify-content: space-between;

    .next_btn,
    .pre_btn {
        width: 50px;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }



    .next_btn::before,
    .pre_btn::before {
        width: 0px;
        height: 0px;
        content: "";
        position: relative;
        left: -25%;
        border-bottom: 15px solid transparent;
        border-top: 15px solid transparent;
        border-right: 15px solid rgba(120, 110, 110, 0.6);
        border-left: 15px solid transparent;
    }

    .pre_btn::before {
        border-left: 15px solid rgba(120, 110, 110, 0.6);
        border-right: 15px solid transparent;
        position: relative;
        left: 25%;
    }

    .next_btn {
        border-right: 1px solid rgba(255, 255, 255, 1);

    }

    .pre_btn {
        // border-left: 1px solid rgba(255, 255, 255, 1);

    }

    // .next_btn:hover,
    // .pre_btn:hover {

    //     .next_btn::before,
    //     .pre_btn::before {
    //         border-left: 15px solid rgba(0, 156, 255, 0.6) !important;
    //     }


    // }
}

.pagination-box {
    flex: 1;
    display: flex;
    text-align: center;
    justify-content: space-between;

    .pagination-item {
        flex: 1;
        border-right: 1px solid rgba(255, 255, 255, 1);
        cursor: pointer;
        line-height: 50px;

    }

    .pagination-item:hover {
        color: #009cff;
    }

    .act-pagination-item {
        color: #009cff;
        border-bottom: 5px solid #009cff;
    }
}

.broadcast-box {
    width: 1200px;
    height: 70px;
    padding: 0 30px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #fff;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: -50px;

    .broadcast-img {
        background-image: url('https://coding.qq.com/home/dist/4cba4f0c88006ad6e6e9.png');
        background-position: 0px -40px;
        width: 138px;
        height: 22px;
    }

    .broadcast-text {
        margin-left: 10px;
    }

    .broadcast-hot {
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        background-color: #EB676A;
        font-size: 10px;
        color: #fff;
        line-height: 16px;
        padding: 0 8px;
        margin-left: 10px;
    }
}
</style>
