<style lang="less" scoped>
.home-con {
  padding-top: 30px;
  .icon-arrow {
    width: 18px;
    height: 18px;
    display: inline-block;
    background: url("../../images/arrow.png") 2px 2px no-repeat;
  }
  .input-label {
    line-height: 40px;
  }
  .large-btn {
    width: 220px;
    height: 40px;
    margin: auto;
    margin-top: 20px;
    border-radius: 5px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    background: linear-gradient(to right, blue, purple);
  }
  .btn-more {
    width: 70px;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    border: 1px solid #bea8f0;
    float: right;
    text-align: center;
    font-size: 12px;
    color: #4e14d6;
    margin-top: 10px;
    cursor: pointer;
  }
  .btn-info {
    color: #999;
    line-height: 30px;
    text-align: center;
  }
  .carousel-item {
    img {
      border-radius: 5px;
    }
  }
  .card {
    padding: 20px 25px;
    background: #fff;
    border-radius: 5px;
    &-title {
      font-size: 20px;
      line-height: 50px;
    }
  }
  //   已售
  .finish-tip {
    border: 4px solid #f35aa5;
    width: 56px;
    height: 26px;
    line-height: 18px;
    text-align: center;
    font-weight: bold;
    position: absolute;
    right: -5px;
    bottom: 20px;
    color: #f35aa5;
    font-size: 16px;
  }
  .shop-list {
    li {
      list-style: none;
      float: left;
      width: 335px;
      margin: 0 40px;
    }
    &-card {
      background: url("../../images/bg_card.png") no-repeat;
      background-size: 100% 100%;
      width: 335px;
      height: 190px;
      border-radius: 5px;
      position: relative;
      cursor: pointer;
      p:nth-child(1) {
        font-size: 50px;
        line-height: 190px;
        color: #fff;
        //   font-weight: bold;
        text-align: center;
      }
      p:nth-child(2) {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 40px;
        color: #fff;
        background: rgba(0, 0, 0, 0.7);
        line-height: 40px;
        padding-left: 25px;
        font-size: 16px;
      }
    }
    &-text {
      .item-name {
        color: #333;
        font-size: 20px;
        line-height: 40px;
      }
      .item-price {
        font-size: 16px;
        b {
          color: #4e14d6;
          font-size: 18px;
          padding-left: 5px;
          line-height: 30px;
        }
      }
    }
  }
  //   精品
  .boutique-list,
  .flat-list {
    li {
      list-style: none;
      float: left;
      width: 250px;
      margin: 0 15px;
      cursor: pointer;
    }
    &-card {
      background: url("../../images/bg_card.png") no-repeat;
      background-size: 100% 100%;
      width: 250px;
      height: 170px;
      border-radius: 5px;
      position: relative;
      p:nth-child(1) {
        font-size: 50px;
        line-height: 170px;
        color: #fff;
        text-align: center;
      }
    }
    &-text {
      .item-name {
        color: #333;
        font-size: 20px;
        line-height: 40px;
      }
      .item-price {
        font-size: 14px;
        b {
          color: #4e14d6;
          font-size: 18px;
          line-height: 26px;
        }
      }
    }
  }
  .flat-list {
    li {
      margin: 0 18px 40px;
    }
  }
  //   平价
  .flat {
    width: 1200px;
    height: 700px;
    margin-top: 15px;
  }
  //   域名
  .domain-list {
    padding-left: 20px;
    li {
      cursor: pointer;
      list-style: none;
      float: left;
      width: 170px;
      height: 40px;
      line-height: 40px;
      border-radius: 5px;
      padding-left: 50px;
      margin: 5px 15px;
      background: url("../../images/icon_logo.png") 10px 15px no-repeat;
    }
    li:hover,
    li:active {
      background-color: #f7f7f7;
    }
  }
  .entrust {
    &-title {
      font-size: 16px;
      line-height: 40px;
    }
  }
  .article {
    &-title {
      font-size: 16px;
      font-weight: 700;
      line-height: 30px;
      margin-top: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    &-con {
      text-indent: 2em;
      margin-top: 20px;
      font-size: 14px;
      line-height: 30px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
    }
  }
  .home-two {
    height: 570px;
    margin-top: 15px;
    > div {
      float: left;
    }
    .two-l {
      width: 880px;
      margin-right: 15px;
      margin-bottom: 15px;
      .bargain {
        height: 375px;
      }
      .recom {
        height: 180px;
        margin-top: 15px;
      }
    }
    .two-r {
      width: 300px;
      height: 570px;
    }
  }
  .home-three {
    height: 390px;
    margin-top: 15px;
    > div {
      float: left;
    }
    .three-l {
      width: 895px;
      margin-right: 15px;
      height: 390px;
    }
    .three-r {
      height: 390px;
      width: 290px;
    }
  }
  position: relative;
  .fix-con {
    width: 120px;
    height: 380px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #fff;
    position: fixed;
    right: -10px;
    top: 120px;
    text-align: center;
    padding-top: 20px;
    p:nth-child(1) {
      font-size: 16px;
      line-height: 30px;
      color: #4407d3;
    }
    p:nth-child(2) {
      font-size: 12px;
      color: #999999;
    }
    ul {
      margin-top: 30px;
      list-style: none;
    }
  }
}
</style>

<template>
  <div class="home-con">
    <Carousel :value="0" :autoplay="true" :autoplay-speed="2000" :radius-dot="true" arrow="never">
      <CarouselItem>
        <div class="carousel-item">
          <img src="@/images/banner.png" alt>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="carousel-item">
          <img src="@/images/banner.png" alt>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="carousel-item">
          <img src="@/images/banner.png" alt>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="carousel-item">
          <img src="@/images/banner.png" alt>
        </div>
      </CarouselItem>
    </Carousel>
    <!-- 定位元素 -->
    <div class="fix-con">
      <p>13522865253</p>
      <p>7/24小时服务热线</p>
      <ul>
        <li>
          <a>
            <img src="@/images/fix_icon1.png" alt>
          </a>
        </li>
        <li>
          <a>
            <img src="@/images/fix_icon2.png" alt>
          </a>
        </li>
        <li>
          <a>
            <img src="@/images/fix_icon3.png" alt>
          </a>
        </li>
        <li>
          <a>
            <img src="@/images/fix_icon4.png" alt>
          </a>
        </li>
        <li>
          <a>
            <img src="@/images/fix_icon5.png" alt>
          </a>
        </li>
      </ul>
    </div>
    <div class="home-two">
      <div class="two-l">
        <!-- 每日特价 -->
        <div class="bargain card">
          <p class="card-title">每日特价</p>
          <div class="card-con">
            <ul class="shop-list">
              <li v-for="(item,idx) in aBargain" :key="idx">
                <div class="shop-list-card" @click="turnTo('domain',idx)">
                  <p>{{item.name}}</p>
                  <p>{{item.status?'倒计时：'+item.endTime:'已结束'}}</p>
                  <span class="finish-tip" v-if="!item.status">已售</span>
                </div>
                <div class="shop-list-text">
                  <p class="item-name">{{item.name}}</p>
                  <p class="item-price">
                    价格：
                    <b>{{item.num}}元</b>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 推荐域名 -->
        <div class="recom card">
          <p class="card-title">推荐域名</p>
          <div class="card-con">
            <ul class="domain-list">
              <li v-for="(item,idx) in aDomain" :key="idx" @click="turnTo('domain',idx)">
                <span>{{item.name}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 域名委托 -->
      <div class="two-r card">
        <p class="card-title">域名委托</p>
        <div class="card-con entrust">
          <p class="entrust-title">
            提交需求
            <i class="icon-arrow"></i>经济谈判
            <i class="icon-arrow"></i>完成交易
          </p>
          <p class="input-label">域名：</p>
          <Input v-model="objForm.domain" placeholder="请输入域名"/>
          <p class="input-label">称呼：</p>
          <Input v-model="objForm.name" placeholder="请填写您的称呼"/>
          <p class="input-label">手机：</p>
          <Input v-model="objForm.phone" placeholder="请填写您的手机号，以便我们联系您"/>
          <p class="input-label">预算：</p>
          <Input v-model="objForm.budget" placeholder="请填写您的预算">
            <Select v-model="objForm.budget_type" slot="append" style="width: 70px">
              <Option value="0">人民币</Option>
              <Option value="1">美元</Option>
            </Select>
          </Input>
          <p style="textAlign:center;lineHeight:30px;marginTop:20px;">
            <RadioGroup v-model="objForm.type">
              <Radio label="0">代售</Radio>
              <Radio label="1">代购</Radio>
            </RadioGroup>
          </p>
          <p class="large-btn" @click="handleSubmit">提交信息</p>
          <p class="btn-info">交易不成功不收取任何费用</p>
        </div>
      </div>
    </div>
    <div class="home-three">
      <div class="three-l card">
        <p class="card-title">
          精品
          <span class="btn-more"  @click="turnTo('boutique')">more</span>
        </p>
        <div class="card-con">
          <ul class="boutique-list">
            <li v-for="(item,idx) in aBoutique" :key="idx">
              <div class="boutique-list-card" @click="turnTo('domain',idx)">
                <p>{{item.name}}</p>
              </div>
              <div class="boutique-list-text">
                <p class="item-name">{{item.name}}</p>
                <p class="item-price">
                  <b>￥{{item.num}}</b>
                </p>
                <p>域名行业：{{item.tags.join('、')}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="three-r card">
        <p class="card-title">
          快讯
          <span class="btn-more"  @click="turnTo('latest')">more</span>
        </p>
        <div class="card-con article">
          <p class="article-title">{{aArticle[0].title}}</p>
          <p class="article-con">{{aArticle[0].con}}</p>
        </div>
      </div>
    </div>
    <!-- 中间banner -->
    <Carousel
      style="margin-top:15px;"
      :value="0"
      :autoplay="true"
      :autoplay-speed="2000"
      :radius-dot="true"
      arrow="never"
    >
      <CarouselItem>
        <div class="carousel-item">
          <img src="@/images/banner_mid.png" alt>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="carousel-item">
          <img src="@/images/banner_mid.png" alt>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="carousel-item">
          <img src="@/images/banner_mid.png" alt>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="carousel-item">
          <img src="@/images/banner_mid.png" alt>
        </div>
      </CarouselItem>
    </Carousel>
    <!-- 平价域名 -->
    <div class="flat card">
      <p class="card-title">
        平价域名
        <span class="btn-more" @click="turnTo('flat')">more</span>
      </p>
      <div class="card-con">
        <ul class="flat-list">
          <li v-for="(item,idx) in aFlat" :key="idx">
            <div class="flat-list-card" @click="turnTo('domain',idx)">
              <p>{{item.name}}</p>
            </div>
            <div class="flat-list-text">
              <p class="item-name">{{item.name}}</p>
              <p class="item-price">
                <b>￥{{item.num}}</b>
              </p>
              <p>域名行业：{{item.tags.join('、')}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      // 提交信息
      objForm: {
        domain: "",
        name: "",
        phone: "",
        budget: "",
        budget_type: "0",
        type: "0"
      },
      // 域名list
      aDomain: [
        {
          name: "aa.com",
          link: "http://aa.com",
          id: 1
        },
        {
          name: "bb.com",
          link: "http://aa.com",
          id: 2
        },
        {
          name: "cc.com",
          link: "http://aa.com",
          id: 3
        },
        {
          name: "dd.com",
          link: "http://aa.com",
          id: 4
        },
        {
          name: "ee.com",
          link: "http://aa.com",
          id: 5
        },
        {
          name: "ff.com",
          link: "http://aa.com",
          id: 6
        },
        {
          name: "gg.com",
          link: "http://aa.com",
          id: 7
        },
        {
          name: "hh.com",
          link: "http://aa.com",
          id: 8
        }
      ],
      //   特价list
      aBargain: [
        {
          id: 1,
          name: "glb1.com",
          status: 0,
          num: "1250"
        },
        {
          id: 2,
          name: "glb2.com",
          status: 1,
          endTime: "05:21:43",
          num: "1350"
        }
      ],
      //   精品list
      aBoutique: [
        {
          id: 1,
          name: "glb1.com",
          num: "1250",
          tags: ["金融投资", "区块链", "生活服务", "体育用品", "牌商标"]
        },
        {
          id: 2,
          name: "glb2.com",
          num: "1350",
          tags: ["金融投资", "区块链", "生活服务", "体育用品", "牌商标"]
        },
        {
          id: 3,
          name: "glb3.com",
          num: "2250",
          tags: ["金融投资", "区块链", "生活服务", "体育用品", "牌商标"]
        }
      ],
      //   快讯
      aArticle: [
        {
          id: 12,
          title: "水滴回应“寻求新一轮融资”对于融资一直都是开放心态",
          con:
            "36氪讯，近日据彭博报道，腾讯旗下的水滴公司正在寻求新一轮融资，估值超过10亿美元。水滴公司对此回应称，在融资方面水滴的态度一向开放，该公司品牌公关负责嘀嘀嘀嘀嘀滴滴嘀嘀嘀"
        }
      ],
      //   平价list
      aFlat: [
        {
          id: 1,
          name: "glb1.com",
          num: "1250",
          tags: ["金融投资", "区块链", "生活服务", "体育用品", "牌商标"]
        },
        {
          id: 2,
          name: "glb2.com",
          num: "1350",
          tags: ["金融投资", "区块链", "生活服务", "体育用品", "牌商标"]
        },
        {
          id: 3,
          name: "glb3.com",
          num: "2250",
          tags: ["金融投资", "区块链", "生活服务", "体育用品", "牌商标"]
        },
        {
          id: 4,
          name: "glb3.com",
          num: "2250",
          tags: ["金融投资", "区块链", "生活服务", "体育用品", "牌商标"]
        },
        {
          id: 5,
          name: "glb3.com",
          num: "2250",
          tags: ["金融投资", "区块链", "生活服务", "体育用品", "牌商标"]
        },
        {
          id: 6,
          name: "glb3.com",
          num: "2250",
          tags: ["金融投资", "区块链", "生活服务", "体育用品", "牌商标"]
        },
        {
          id: 7,
          name: "glb3.com",
          num: "2250",
          tags: ["金融投资", "区块链", "生活服务", "体育用品", "牌商标"]
        },
        {
          id: 8,
          name: "glb3.com",
          num: "2250",
          tags: ["金融投资", "区块链", "生活服务", "体育用品", "牌商标"]
        }
      ]
    };
  },
  methods: {
    handleSubmit() {
      console.log("a", this.objForm);
    },
    turnTo(name, id) {
      let params = null;
      if (id) {
        params = {
          id: id
        };
      }
      this.$router.push({
        name: name,
        params: params
      });
    }
  },
  mounted() {}
};
</script>

