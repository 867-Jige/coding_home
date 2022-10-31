<template>
    <div class="course-module">
        <div class="title">趣味课程，名师名家带你学</div>
        <div class="sub-title">学习丰富的权威认证课程</div>
        <div class="content-box">
            <div class="grade-course-tab-box">
                <div :class="{ 'tab-item': true, 'tab-act-item': courseActIndex == index }"
                    v-for="(item, index) in courseList" :key="index" @click="courseActIndexChange(index)">
                    {{ item.tabName }}
                </div>
            </div>
            <div class="course-box">
                <div class="course-item" v-for="(cItem, cIndex) in courseList[courseActIndex].courseItems"
                    :key="cIndex">
                    <div class="course-img-warp">
                        <img class="course-img" :src="cItem.courseImg" alt="">
                        <div class="level-1" v-if="cItem.level == 1">简单</div>
                        <div class="level-2" v-if="cItem.level == 2">中等</div>
                        <div class="level-3" v-if="cItem.level == 3">困难</div>
                    </div>
                    <div class="course-name">{{ cItem.courseName }}</div>
                </div>
            </div>
        </div>
        <div class="moer-course">更多课程＞＞</div>
    </div>
</template>
    
<script setup >
import { ref } from 'vue';

let courseActIndex = ref(0)
const courseList = [
    {
        tabName: '编辑推荐',
        courseItems: [
            {
                level: 1,
                courseImg: '	https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200925_ley7xak5xfl.jpg',
                courseName: '神奇画板'
            }, {
                level: 1,
                courseImg: '	https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200929_ljjstzp9asc.jpg',
                courseName: '发射器的密码'
            }, {
                level: 1,
                courseImg: '		https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200911_9ppjd7xydg6.jpg',
                courseName: '趣味打气球'
            }, {
                level: 1,
                courseImg: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200831_2qquh3nmog8.png',
                courseName: '初代益智休闲游戏：俄罗斯方块（上集）'
            }, {
                level: 1,
                courseImg: '	https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200925_bxz2eqa09cq.jpg',
                courseName: '球球大作战'
            }, {
                level: 1,
                courseImg: '	https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200909_999y6omn98u.jpg',
                courseName: '航天器发射计划'
            }, {
                level: 1,
                courseImg: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200925_cdxn2wractu.jpg',
                courseName: '扣叮音乐节'
            }, {
                level: 1,
                courseImg: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200929_ee0bgh5wel5.png',
                courseName: '斐波那契数列'
            }
        ]
    }, {
        tabName: '低年级（三年级或以下）',
        courseItems: [
            {
                level: 1,
                courseImg: '	https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_3vvqgnboy37.png',
                courseName: '一起去郊游'
            }, {
                level: 1,
                courseImg: 'https://p.qpic.cn/qqgameedu/0/3d331987fa9216a04cf5435ab3d2b07c/0',
                courseName: '贪吃鸡'
            }, {
                level: 1,
                courseImg: '	https://p.qpic.cn/qqgameedu/0/9f9957f843abe3a29ec671f6162ed392/0',
                courseName: '科普八大行星'
            }, {
                level: 1,
                courseImg: 'https://p.qpic.cn/qqgameedu/0/f63787a90f25c088e813e1d3ac8444bb/0',
                courseName: '一起舞蹈吧'
            }, {
                level: 1,
                courseImg: 'https://p.qpic.cn/qqgameedu/0/b3aceefa13fcf0e08b674693ad1b93ff/0',
                courseName: '小火车'
            }, {
                level: 1,
                courseImg: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_q9imnokbxt.png',
                courseName: '马达动起来'
            }, {
                level: 1,
                courseImg: '	https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_rf46gppvaaf.png',
                courseName: 'JS实验室绘图'
            }, {
                level: 1,
                courseImg: '	https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_bi5mqf656yu.png',
                courseName: '米老鼠拓展课（一）'
            }
        ]
    }, {
        tabName: '高年级（四年级或以上）',
        courseItems: [
            {
                level: 1,
                courseImg: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_fv4dtm89rf4.png',
                courseName: '欢乐打地鼠'
            }, {
                level: 2,
                courseImg: 'https://p.qpic.cn/qqgameedu/0/41d677564ffeed6110f452f70c691d66/0',
                courseName: '保卫农场'
            }, {
                level: 1,
                courseImg: '	https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_2ldwryeur4j.png',
                courseName: '旋转摩天轮'
            }, {
                level: 2,
                courseImg: '	https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_5ev5qjofm5u.png',
                courseName: '开动汽车'
            }, {
                level: 2,
                courseImg: '	https://p.qpic.cn/qqgameedu/0/57f1729002eb5790f335a8b6aad03fda/0',
                courseName: '躲避陨石'
            }, {
                level: 1,
                courseImg: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_s2e1kqnvox.png',
                courseName: '埃舍尔视觉错觉作品'
            }, {
                level: 1,
                courseImg: '	https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200608_232p1644um8.png',
                courseName: 'Python-Turtle 初识'
            }, {
                level: 1,
                courseImg: '	https://p.qpic.cn/qqgameedu/0/9f9957f843abe3a29ec671f6162ed392/0',
                courseName: '科普八大行星'
            }
        ]
    }, {
        tabName: '初中及以上',
        courseItems: [
            {
                level: 2,
                courseImg: '	https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_c22d8kc2e5f.png',
                courseName: '白细胞大作战'
            }, {
                level: 3,
                courseImg: 'https://p.qpic.cn/qqgameedu/0/36a6d292401611680aa1276ceaa4c094/0',
                courseName: '月球采矿任务'
            }, {
                level: 2,
                courseImg: '	https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_vz2jmyadnh.png',
                courseName: '消防车出击'
            }, {
                level: 3,
                courseImg: '	https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_ydi6ow891s.png',
                courseName: '救援大行动'
            }, {
                level: 2,
                courseImg: '	https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_1dgvn8qg7zz.png',
                courseName: '其他输入'
            }, {
                level: 3,
                courseImg: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_ixi5o7a3whl.png',
                courseName: '项目：互动贺卡'
            }, {
                level: 2,
                courseImg: '	https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200805_r500sw89gxj.png',
                courseName: '摘苹果'
            }, {
                level: 3,
                courseImg: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200805_hbff6k2i34.jpg',
                courseName: '小猫钓鱼'
            }
        ]
    }
]
const courseActIndexChange = (index) => {
    courseActIndex.value = index
}

</script>
    
<style lang="less">
.course-module {
    padding-top: 70px;
    padding-bottom: 50px;
    background-color: #fff;

    .title {
        text-align: center;
        font-size: 40px;
        font-weight: bold;
    }

    .sub-title {
        text-align: center;
        margin-bottom: 25px;
        font-size: 16px;
        color: rgba(74, 89, 111, 0.6);
    }

    .content-box {
        width: 1200px;
        margin: 0 auto;

        .grade-course-tab-box {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 40px;

            .tab-item {
                padding: 0 20px;
                line-height: 34px;
                background-color: #f0f3f7;
                border-radius: 20px;
                margin: 0 10px;
                color: #4a596f;
                cursor: pointer;
            }

            .tab-item:hover {
                color: #009cff;
            }

            .tab-act-item.tab-item:hover {
                color: #fff;
            }

            .tab-act-item {
                background-color: #009cff;
                color: #fff;
            }

        }

        .course-box {
            display: flex;
            flex-wrap: wrap;

            .course-item {
                width: 288px;
                margin-right: 15px;
                padding-bottom: 15px;
            }

            .course-item:nth-child(4) {
                margin-right: 0;
            }

            .course-item:nth-child(8) {
                margin-right: 0;
            }

            .course-img-warp {
                width: 288px;
                height: 226px;
                border-radius: 5px;
                overflow: hidden;

                .course-img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    transition: all 0.4s;
                    cursor: pointer;


                }

                .course-img:hover {
                    transform: scale(1.05);
                }

                .level-1,
                .level-2,
                .level-3 {
                    width: 50px;
                    height: 24px;
                    line-height: 24px;
                    color: #fff;
                    font-size: 16px;
                    text-align: center;
                    border-bottom-right-radius: 10px;
                    border-top-right-radius: 10px;
                    position: absolute;
                    top: 10px;
                    left: 10px;
                }

                .level-1 {
                    background-color: #00ce9e;
                }

                .level-2 {
                    background-color: #ff9d00;
                }

                .level-3 {
                    background-color: #9972ff;
                }
            }

            .course-name {
                line-height: 26px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: auto;
                font-size: 16px;
                margin-top: 12px;
                margin-bottom: 27px;
            }

        }


    }

    .moer-course {
        text-align: center;
        font-size: 16px;
        color: #4a596f;
        cursor: pointer;
        line-height: 24px;
    }

    .moer-course:hover {
        color: #009cff;
    }
}
</style>