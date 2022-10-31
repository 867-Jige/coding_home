<template>
    <div class="code-tool-module">
        <div class="title">编程好工具，学习更轻松</div>
        <div class="sub-title">选择适合你的编程神器</div>
        <div class="content-box">
            <div class="left-nav-box">
                <div :class="{ 'left-nav-item': true, 'left-nav-item-act': index == codeToolActIndex }"
                    @click="toolNavClick(index)" v-for="(item, index) in codeToolList" :key="index">
                    <div class="icon-box">
                        <img class="icon" :src="item.icon" alt="">
                    </div>
                    <div class="text-box">
                        <div class="left-nav-name">{{ item.name }}</div>
                        <div class="nav-des">{{ item.navDes }}</div>
                    </div>
                </div>
            </div>
            <div class="right-content-box">
                <div class="right-content-top-box">
                    <div class="right-content-top-left-box">
                        <div class="top-text">
                            <img :src="jianglidanIcon" alt="">
                            <span class="title">{{ codeToolList[codeToolActIndex].content.contentDes }}</span>
                        </div>
                        <div class="nav-name">{{ codeToolList[codeToolActIndex].name }}</div>
                        <div class="content-text-box">{{ codeToolList[codeToolActIndex].content.contentText }}</div>
                        <div class="creation-btn">立即创作</div>
                        <div class="moer-btn">了解更多 ＞＞</div>
                    </div>
                    <div class="right-content-top-right-box">
                        <video
                            v-if="codeToolList[codeToolActIndex].content.contentUrl.toLowerCase().indexOf('.mp4') != -1"
                            :id="`video${codeToolActIndex}`" :src="codeToolList[codeToolActIndex].content.contentUrl"
                            autoplay="" playsinline="" webkit-playsinline="true" mtt-playsinline="true" loop=""
                            style="width: 100%; height: 100%;">
                        </video>
                        <img v-else :src="codeToolList[codeToolActIndex].content.contentUrl" alt="">
                    </div>
                </div>
                <div class="right-content-bottom-box" v-if="codeToolList[codeToolActIndex].content.caseList.length > 0">
                    <div class="introduction-box">
                        <span>入门学习</span>
                        <span class="moer-case">更多案例＞＞</span>
                    </div>
                    <div class="study-item" v-for="(item, index) in codeToolList[codeToolActIndex].content.caseList"
                        :key="index">
                        <div class="case-img-warp">
                            <img class="case-img" :src="item.caseUrl" alt="" />
                        </div>

                        <div class="case-name">{{ item.caseName }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>
import { ref } from 'vue';
import jianglidanIcon from "../assets/imgs/jianglidan.png"
const codeToolList = [
    {
        icon: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200306_g9ofq50ftsdcreative.png',
        name: '创意实验室',
        navDes: '6+岁创造力图形化',
        content: {
            contentDes: "像搭积木一样编程创作",
            contentText: "让学编程和搭积木一样简单，有效帮助孩子形成编程思维，锻炼逻辑思维，轻松制作有趣有料的编程项目，发挥自己的无限创意。",
            contentUrl: "https://wuji-30130.sz.gfp.tencent-cloud.com/20200323_8htrkrqaeb52.mp4",
            caseList: [
                {
                    caseUrl: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_03b5pb9xb9xp.png',
                    caseName: '一起去郊游'
                }, {
                    caseUrl: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_2058cxoa8hv.png',
                    caseName: '让贺卡动起来'
                }, {
                    caseUrl: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_1e0fz8k4etw.png',
                    caseName: '下雪吧'
                }]
        }
    }, {
        icon: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200306_7h0exzofi7tpython.png',
        name: 'Ptyon实验室',
        navDes: '7+岁逻辑思维Python',
        content: {
            contentDes: "通用易读的编程语言",
            contentText: "从图形化编程到文本编程，从AI应用到硬件物联，首创带有舞台区的编辑模式，运用动画和声音制作游戏，全方面体会Python语言的乐趣。",
            contentUrl: "https://wuji-30130.sz.gfp.tencent-cloud.com/20200317_qrjirl2blsbpython.mp4",
            caseList: [
                {
                    caseUrl: '	https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_7wbr2yla49.png',
                    caseName: '画星星'
                }, {
                    caseUrl: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_5wctvliuxin.png',
                    caseName: 'AI智能（语音+ 图像）'
                }, {
                    caseUrl: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_5hedqxj4g5c.png',
                    caseName: '计算生日'
                }]
        }
    }, {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAiCAYAAABBY8kOAAAEFElEQVRIia2XX0wcVRTGf3NnlyW0S11boLS1FhpLADXWKqCl0QbTmFRTNT5oYoyvuIkaEx/wyRfdN01MiL41vhijSY1SH7Q2TYWaUPoHWwoNVFppkQCtlUJhd2dmx9zZuduZ2eXf4vcyOefc+31z7px77h1tsu09lkEV8DLQCuwFtgApYBw4C/QA3wOTS9E4QtFEPC8w29HZBHwONC/3Ji56gXeiifjpAI/zFIVmzHZ0drgTVyqCO7bXnZuHUEDgEeALd4my0AWh+hpCjbXoD1YjysuwzQz2nTms8WnMS6OYQ1fByqgZn8x2dB4E2qOJ+EXlDAWUfSKh+h1EDrYiNm7wDdJ0Ha0ihqiIEX5sF5lbM6R+6sEcuqaG7HW5WnPv+0FtC5HnmmQ2HwJvZZkgcqCF0kPPoJWVLrtmckz40V1oIR1r9IZyb08f7zOBblQxAE8Dp9SIyIFmSvY/saxAIaRPnCH1S683IrP7XRXDp/eWq4aSZ4sTkZBzQw01XpfDLdx9ka0uXRB5cZ+zdEVDLvsL+xwuF5J7a8jdjNlsGmsRsWhOIjNxk+SRE2SmbiMqY5S+sh9RvWnZuOQINe7EvDCihr4kvJURbqj15bHw7a9YN6aw04bzlPZK42H/8rVKoSZliQeqfESZqX+KtsV2H1ez+kbZYPk6H7HcJ8XaIurj2iKFclvatm0fcemrbYjNG0HXnbWX9orjmq+iRMjtwg85QjNzaJvuy0X1bZWse/c1FsNScXtu3mtOyowuKysz/e+ipKuF9fdN74zzwj1PHJiXr62VP4cAV48UOpoL9g9jzyfXLCI5JJcHR6XQINDvDEgbwT5VFFLHeh0uF5J7UPWJ3GFlnB5wzphiYY5cx+gd8M52uJXQTM6taQhP5a0WemUMhO6ddckrlOve4d11iKr7ixbSNqwn/LCvlb2hhCqAFsclBCVtTxYtohDaXec1DymhN3MD6ncgYuVrF9q5LXhMhP3d+/G6RSevTklHW1/m9WyWQnuUpW+t/H+ELAv77oLXM13wXrcWAQmjbwhMS3nPAEl/Cxoec5723STmwJ+r1jH6R5j7+DDJH0963Z/h3ut+Bl6XRqqr29lw1pXraKUR52gPtHuM/mGs0XEizz+VdxWzRsaCXVverL7GrbqvgHNOJoaJefEK9kKKzO07GH+M4GfKkPrhJEbfIOnu876QPGKMwatBkXZlqG/UrsS8cDIcHssK35oh2dWNnUxnMzt1AeuvCcjYThYL3xwDw1Szz0YT8da8K7H7B7BntqOz2i33j4AG2YUXDncV/B4y+/kvjxSMAe8HHb6qiybiE9FE/Ds3w9zdtgDu9cZ8vB1NxH8Lupf6EZMNTwrKDOXuvuVWqLy8y58uFZPtSx6nKnY8jwn4DzeQgHU7MSGyAAAAAElFTkSuQmCC',
        name: '腾讯扣叮-编程第一课',
        navDes: '6-9岁编程启蒙计算思维',
        content: {
            contentDes: "专为6-9岁孩子定制的编程启蒙App",
            contentText: "腾讯自研的游戏化编程启蒙APP，作为孩子的“编程第一课”，通过趣味的积木编程闯关，让孩子学习编程更简单、更有趣、更高效。",
            contentUrl: "https://wuji-30130.sz.gfp.tencent-cloud.com/20210516_rfqbytd62t.MP4",
            caseList: [
                {
                    caseUrl: '	https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20210514_667b2qum87qimg1.png',
                    caseName: '妙趣剧情，学习不枯燥'
                }, {
                    caseUrl: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20210516_8hkhp06cbfq04.png',
                    caseName: '编程闯关，探索编程奥秘'
                }, {
                    caseUrl: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20210514_7xvlv329fmpimg3.png',
                    caseName: '知识解锁，收获丰富趣味知识'
                }]
        }
    }, {
        icon: '	https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200429_ir7137irhcn48X48.png',
        name: '3D实验室',
        navDes: '6岁+创造力3D立体',
        content: {
            contentDes: "创意实验室的3D版本",
            contentText: "扣叮和艾兰岛共同出品，学会了创意实验室就可以轻松上手，培养空间思维，制作3D创意作品。也可前往艾兰岛官网体验更专业的游戏编辑器。",
            contentUrl: "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200429_1gi3qhorm28360X270.png",
            caseList: []
        }
    }, {
        icon: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200306_whgr206kz0sai.png',
        name: '人工智能实验室',
        navDes: '10+岁前沿科技走进AI',
        content: {
            contentDes: "算法模型，感受前沿科技",
            contentText: "初学者直接应用简单的AI能力（拍照识花、语音识别、智能聊天等），体会AI的乐趣；高阶学习者参与常见算法模型的调参过程，学习AI的底层逻辑。",
            contentUrl: "https://wuji-30130.sz.gfp.tencent-cloud.com/20200317_ojl6d4y4ciq.mp4",
            caseList: [
                {
                    caseUrl: '	https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_f32mm1mf6bu.png',
                    caseName: '姿态侦测'
                }, {
                    caseUrl: '	https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_zezz83b7i8s.png',
                    caseName: '涂鸦'
                }, {
                    caseUrl: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200318_vqtfx8vb56t.png',
                    caseName: '智能聊天'
                }]
        }
    }, {
        icon: '	https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200306_16yws3wyo7hgame.png',
        name: '游戏实验室',
        navDes: '6-8岁创意游戏零基础',
        content: {
            contentDes: "图形化编程，创意游戏闯关",
            contentText: "积木块拼接而成的丰富多彩的创意游戏世界，零基础小朋友也可以通过图形化编程进行寻路闯关。",
            contentUrl: "https://wuji-30130.sz.gfp.tencent-cloud.com/20200430_qdivvm8bin.mp4",
            caseList: []
        }
    }, {
        icon: '	https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200306_otye6yv5nvart.png',
        name: '艺术(P5)实验室',
        navDes: '7+岁艺术表达数理知识',
        content: {
            contentDes: "用编程进行艺术表达",
            contentText: "将编程与艺术、数学等STEAM多方面知识相结合，制作可视化的艺术案例，激发学生的想象力和创造力，帮助更好地学习理解数理知识。",
            contentUrl: "https://wuji-30130.sz.gfp.tencent-cloud.com/20200430_nhuts1fwacd.mp4",
            caseList: [
                {
                    caseUrl: '		https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200319_tis672tlbb3.gif',
                    caseName: '蒙德里安'
                }, {
                    caseUrl: '		https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200319_kmojlnizag1.gif',
                    caseName: 'wavemaker'
                }, {
                    caseUrl: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200319_1zhg4pshyjkh2.gif',
                    caseName: 'recursice tree'
                }]
        }
    }
];
let codeToolActIndex = ref(0)
const toolNavClick = (index) => {
    codeToolActIndex.value = index
}
</script>
    
<style lang="less">
.code-tool-module {
    width: 1200px;
    margin: 0 auto;
    padding-top: 70px;
    padding-bottom: 50px;

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
        width: 100%;
        height: 600px;
        background-color: #fff;
        border-radius: 10px;
        overflow: hidden;
        display: flex;
    }

    .left-nav-box {
        width: 290px;
        background-color: #009cff;

        .left-nav-item {
            height: 82px;
            // border: 5px solid #009cff;
            position: relative;
            padding: 0 20px;
            display: flex;
            align-items: center;
            cursor: pointer;
            color: #fff;

            .icon-box {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #fff;
                border-radius: 10px;
                width: 50px;
                height: 50px;
                transition: all 0.4s;

            }

            .icon {
                transition: all 0.4s;

            }

            .text-box {
                margin-left: 15px;

                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .left-nav-name {
                font-size: 18px;

            }

            .nav-des {
                font-size: 12px;

            }
        }

        .left-nav-item::before {
            width: 5px;
            background-color: #0080ff;
            height: 82px;
            position: absolute;
            left: 0;
            content: '';
            display: none;
        }

        .left-nav-item:hover {
            background: rgba(255, 255, 255, 0.1);

            .icon {
                transform: scale(0.9)
            }

            .icon-box {
                border-radius: 100%;
            }

            // border: 5px solid rgba(255, 255, 255, 0.1);

        }

        .left-nav-item-act {
            background-color: #fff;
            color: #498ff6;
        }

        .left-nav-item-act:hover {
            background-color: #fff;

        }

        .left-nav-item.left-nav-item-act::before {
            display: block;

        }
    }

    .right-content-box {
        padding: 0 50px;
        padding-top: 30px;
        flex: 1;

        .right-content-top-box {
            border-bottom: 1px solid #999;
            display: flex;
        }

        .top-text {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            img {
                display: block;
                width: 24px;
                height: 24px;
                margin-right: 10px;
            }
        }

        .top-text .title {
            height: 30px;
            font-size: 16px;
            color: #4a596f;
            font-weight: 400;
        }

        .right-content-top-left-box {
            color: #4a596f;
            width: 410px;

            .nav-name {
                padding: 24px 12px;
                font-size: 24px;
            }

            .content-text-box {
                color: rgba(74, 89, 111, 0.6);
                line-height: 30px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
            }

            .creation-btn {
                width: 150px;
                height: 40px;
                background: #0080ff;
                color: #fff;
                text-align: center;
                line-height: 40px;
                border-radius: 20px;
                margin-right: 28px;
                cursor: pointer;
                margin: 20px 0;
            }

            .moer-btn {
                font-size: 16px;
                color: #4a596f;
                position: absolute;
                height: 30px;
                line-height: 30px;
                left: 200px;
                bottom: 25px;
                cursor: pointer;
            }

            .moer-btn:hover {
                color: #009cff;
            }
        }

        .right-content-top-right-box {
            width: 360px;
            height: 270px;
            border-radius: 10px;
            overflow: hidden;
            margin-left: 40px;

            video {
                width: 100%;
                height: 100%;
            }
        }


    }

    .right-content-bottom-box {
        padding-top: 20px;
    }

    .introduction-box {
        line-height: 30px;
        font-size: 18px;
        color: #4a596f;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;

        .moer-case {
            font-size: 16px;
        }
    }

    .study-item {
        width: 258px;

        margin-right: 12px;
        float: left;
        border-radius: 5px;
        overflow: hidden;
    }

    .case-img,
    .case-img-warp {
        width: 258px;
        height: 140px;
        border-radius: 5px;
        cursor: pointer;
        overflow: hidden;
    }

    .case-name {
        cursor: pointer;
        margin-top: 10px;
    }

    .case-name:hover {
        color: #009cff;
    }

    .case-img-warp:hover {
        img {
            transform: scale(1.1);
            transition: all 1s;
        }
    }

}
</style>