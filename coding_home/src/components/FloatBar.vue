<template>
    <div class="float-bar">
        <div class="bar-icon"></div>
        <div :class="{
            'bar-content': true, 'bar-content-show': barContentShow
        }">
            <div class="bar-nav-box">
                <a :class="{ 'bar-nav-item': true, 'bar-nav-item-act': index == barNavIndex }" :href="item.location"
                    @click="barNavIndexChange(index)" v-for="(item, index) in barNavList" :key="index">
                    <i :class="['bar-nav-icon', `icon-${index + 1}`]"></i>
                    <span class="bar-nav-text">{{ item.name }}</span>
                </a>
                <a class="bar-nav-item" href="javascript:void(0)" @click="gotoTop">
                    <i class="bar-nav-icon icon-7"></i>
                    <span class="bar-nav-text">回顶部</span>
                </a>
            </div>
            <div class="qr-box sidebaricon">
                <div class="qr-code-box">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAYAAAAdHLWhAAAgAElEQVR4nL19eXRURdr+c5dek3QSAgGyIiQB2REQZBEBB1RwQEVQcGRQUHEEdBT1cxuHGWUG/EQUBUQZB2EUFRARFUVBFgEFgRC2sCUhhBCy9r7d+/7+aG5R3X27OzB+v+ece0533bpVdZd6690LAM4BsP8Wx/jx4+1EZCci+3PPPadb59ixY6yOdnzzzTe6dVesWBFVt7a21p6cnGwHYB8wYEDU+ViH3++3t23b1g7A3rVr14T1x44dG/deR44cqXvd5MmTf5Nneek4JwPIwm8EQRB0f8eqo6Ft27a6dR0OBwCAiNh1RASn0wkAqKura/bYDAYDzp8/DwA4e/Zswvpa31eKWPd9lUiRATgApNhsNvTs2RNEBCJq1tWSJMHpdGLfvn1X3LPX68XevXshSRJ27drFynNyclBYWAi324327dtHXWc0GnHzzTfD5XKhffv22LFjBwKBALsOAE6dOoWKigoYDAZ2naqquPXWW9HQ0ICCggJWfvHiRRw+fBiyLIf1U1BQAL/fDwDYu3cvPB7PFd9jz549kZaWhmAw2OxrJElCcXExGhoagNC7gR0A3XTTTXQ1OHfuHAEgADRhwgRW/vzzz7Ny/jh+/DgREZ08eVL3/Isvvtjsvvfv36/b95QpU3TbdjqdrI6qqkRE9MEHH+jW/eqrr1jdTp06RZ0fOXKk7pj++Mc/sjqlpaXNvhceo0aN0tqwi9qbUxTlSj8QAIDL5dItv3Dhgm659lXG6s/tdje77xYtWrDfqqqy36Io6lWH3W5nvzVSFGv8PPk8duxY1PmUlJSE47uSe+HBzzg2r/kbPHToEDZv3gyLxaJ7sdFoxH333Qer1coeOIAw0jhq1CgIggBJklj7oiiiZcuWICK0aNECjzzyCCsHQuTLarXizTffhKqquOWWW9CxY8ew9cfj8WDVqlVwuVxQFAWPPvooDAYDkpKS8NZbb4GI0LZtW8ycOZONTVVVyLKsez99+/bFtGnTIIoiBEEAEUFVVXTt2pXVefHFF1FXVweHw4FVq1ZBVVUcPXoUy5Ytg9PpxPXXX4+BAwdGta317/V6sXLlSni93ihSCoRe5LBhw9CzZ8+odwFcInEDBw5kU2zu3Lm6054/KisriYiopKREl8zEg6IoMc8tWLCAtbdo0aKo8xcuXGDnO3TowMpXrlzJyhcvXtyscTQHGinUIMty1LO477772HmexP38889ERFRfX5/weT7//POsjd/97nfRJI5HWlqaXjGD0WjU/RKai1gkCAif3p06dYrbDr9wV1dXs9+xyOv/FTIzM+OelyQJNpstbp2MjAzd8qt6ys1hJdevX49vvvkGgiDgoYceYtNXQ11dHV566SWoqoouXbrgsccei2rjn//8J77++mu43W4888wzyM/PR3JyMpYuXYqmpqYwLm/kyJHs980338x+v/HGGzh27BgMBgP+9re/IS0tDVVVVXjllVegKAr69u2LBx98MO69vvzyy2hoaIDdbo8iP819Hv8N+x1F4hYvXhx3OppMJqquriai2CTuwQcfZOUrV66MIh2nT59m56+99lpW/tprr+n2uXXr1qsiUW3btmVtlJWVERHRzz//zMr69euXsI14zwIAPfnkk6yuHolramqi1NTUuG28/vrrrI2EJO63QJs2bXR/a+CnNC+XxPrSjEYjAMSV0RRFiTrP960xLDx5zspKLKdfe+21Cev8X+HqF5IrwOOPP47WrVuz9UUUxbD146effsLw4cMRCAQwaNAgbNu2LYyUaGQQCLHKEyZMgMvlYg/c7/dj7NixmD17dtgLVlUVy5cvR21tLQwGA1q1agUAKCwsxA8//ABJknDo0CHceOONMddFQRBQUVHx2z6QK4DuC/L5fHEv8vl8urQ4FkpKSlBSUhLzfF1dHX744QcAwMCBAzF48OCYda1WKzZt2hRVnp2dHTX7RFGMWvsAIDk5GUOHDgUA1NbWYvv27c26j6sFEaGpqSluHa/Xq1uu+4KsVitkWYYsy1E3HQwGYbVa2dd7pTCbzTAYDAgGgyAiGI1G+Hw+9lF4vV4Eg0EEAoGoawVBQH19PVq2bAm32w1FUdh1ycnJCAaDcLvdsFgsYWqeeAgGgzHvVRRFEBG8Xu8VfZB6487MzER9fb3uuAKBAJKSknSv1X1B9913H0aPHq3LSiuKwgTOq8HWrVvRqVMnJsSZTCZ88803mDBhAgDg3XffxerVq3VfEACkpqZi7969sNls2L17N2677TYAwOrVq7Fp0ya4XC689tprmDZtWrPGM2bMGFRUVOjeqyRJICL069cPp06duprbBRD6eA4fPoxgMKj7YQeDQaSmpupey0ZlMplY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"
                        alt="">
                    <div>关注扣叮公众号</div>
                </div>
            </div>
            <div class="answer-box sidebaricon">
            </div>
        </div>
    </div>
</template>
    
<script setup>
import { onMounted, ref } from 'vue';
const barNavList = [
    {
        name: '实验室',
        location: '#codeToolModule'
    },
    {
        name: '学好课',
        location: "#courseModule"
    }, {
        name: '好作品',
    }, {
        name: '资讯',
    }, {
        name: '校园',
    }, {
        name: '合作'
    }
]
let barNavIndex = ref(0)
const barNavIndexChange = (index) => {
    barNavIndex.valueindex
}
const gotoTop = () => {
    document.body.scrollTop = 0
}
let barContentShow = ref(false)
onMounted(() => {
    document.body.addEventListener('scroll', (e) => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 180) {
            barContentShow.value = true
        } else {
            barContentShow.value = false

        }
    })
})
</script>
    
<style lang="less">
.float-bar {
    position: fixed;
    right: 1.5%;
    bottom: 30px;
    width: 105px;
    position: fixed;
    z-index: 9999;

    .bar-icon {
        background-position: 0px -279px;
        width: 102px;
        height: 136px;
        cursor: pointer;
        background-image: url('https://coding.qq.com/home/dist/4cba4f0c88006ad6e6e9.png');

    }

    .bar-icon:hover {
        background-position: 0px -139px;
    }

    .bar-content {
        height: 0;
        visibility: hidden;
        transition: all 0.3s;

        .bar-nav-box {
            width: 60px;
            background-color: #fff;
            border-radius: 10px;
            text-align: center;
            font-size: 12px;
            margin: 10px auto;
            overflow: hidden;


            box-shadow: 0px 0px 4px rgb(74 89 111 / 20%);
        }

        .bar-nav-item {
            cursor: pointer;
            color: rgba(74, 89, 111, 0.6);
            height: 70px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid rgba(120, 110, 110, 0.2);
        }

        .bar-nav-item-act {
            color: #009cff;
        }

        .bar-nav-icon {
            width: 18px;
            height: 18px;
            margin: 0 auto;
            margin-bottom: 5px;
        }
    }

    .bar-content-show {
        height: 620px;
        visibility: visible;
    }

    .bar-nav-item:hover,
    .qr-box:hover,
    .answer-box:hover {
        background-color: #009cff;
        color: #fff;

        .qr-code-box {
            display: block;
        }
    }

    .qr-box,
    .answer-box {
        width: 60px;
        cursor: pointer;
        height: 60px;
        border-radius: 100%;
        background-color: #fff;
        box-shadow: 0px 0px 4px rgb(74 89 111 / 20%);
        margin: 10px auto;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;


    }

    .qr-box {
        .qr-code-box {
            display: none;
            width: 180px;
            height: 205px;
            padding-top: 36px;
            background-color: #fff;
            position: absolute;
            margin-left: -280px;
            border-radius: 10px;
            box-shadow: 0px 0px 4px rgb(74 89 111 / 20%);
            color: rgba(74, 89, 111, 0.6);
            font-size: 14px;
            line-height: 24px;
            text-align: center;

            img {
                display: block;
                width: 105px;
                height: 105px;
                margin: 0 auto;
                margin-bottom: 10px;
            }
        }

        .qr-code-box::before {
            width: 0px;
            height: 0px;
            content: "";
            position: absolute;
            right: -10%;
            top: 50%;
            transform: translateY(-50%);
            border-bottom: 10px solid transparent;
            border-top: 10px solid transparent;
            border-right: 10px solid transparent;
            border-left: 10px solid rgba(255, 255, 255, 1);
        }
    }
}
</style>