<style lang="less">
.card {
  padding: 20px 25px;
  background: #fff;
  border-radius: 5px;
  &-title {
    font-size: 20px;
    line-height: 50px;
  }
}
.boutique {
  .btn {
    width: 70px;
    height: 30px;
    display: inline-block;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
  }
  .act-btn {
    background: #ff66ff;
    color: #fff;
  }
  .ok {
    color: #fff;
    background: #4e14d6;
    margin-left: 25px;
  }
  .reset {
    border: 1px solid #4e14d6;
    color: #4e14d6;
    margin-left: 10px;
  }
  .other {
    line-height: 26px;
    font-size: 14px;
    .divider {
      padding: 0 5px;
    }
  }
  .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
    background: #fff;
  }

  padding: 15px 0;
  .search-con {
    > div {
      display: inline-block;
      vertical-align: top;
    }
    .search-l {
      width: 80px;
      .search-title {
        line-height: 26px;
        font-weight: bold;
        font-size: 14px;
      }
    }
    .search-r {
      width: 1000px;
      .search-list {
        list-style: none;
        li {
          height: 26px;
          line-height: 26px;
          text-align: center;
          padding: 0 10px;
          border-radius: 13px;
          float: left;
          display: inline-block;
          font-size: 14px;
          margin: 0 5px 10px;
          cursor: pointer;
        }
      }
      .params-list {
        list-style: none;
        li {
          height: 30px;
          line-height: 30px;
          text-align: center;
          padding: 0 10px;
          border-radius: 10px;
          float: left;
          display: inline-block;
          border: 1px solid #ff66ff;
          font-size: 14px;
          margin: 0 5px 10px;
          color: #ff66ff;
          i.btn_close {
            display: inline-block;
            cursor: pointer;
            width: 20px;
            height: 20px;
            float: right;
            margin-top: 5px;
            margin-left: 5px;
            background: right url("../../images/icon_close.png") no-repeat;
          }
        }
      }
    }
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
  .main-con {
    margin-top: 15px;
    > div {
      display: inline-block;
      vertical-align: top;
      // float: left;
    }
    .main-con-l {
      min-height: 100px;
      width: 890px;
      margin-right: 15px;
      padding: 20px;
    }
    .main-con-r {
      height: 970px;
      width: 290px;

      // 快讯

      .article {
        border-bottom: 1px solid #ccc;
        padding-bottom: 10px;
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
        &-info {
          color: #ccc;
          line-height: 20px;
        }
      }
    }
  }
  .sort-con {
    width: 850px;
    height: 44px;
    border-radius: 5px;
    background: #f8f8f8;
    margin: 0 auto;
    padding: 15px 10px;
    &-title {
      font-size: 14px;
      line-height: 14px;
    }
    .sort-item {
      list-style: none;
      float: right;
      li {
        float: left;
        width: 150px;
        font-size: 14px;
        span {
          display: inline-block;
          vertical-align: top;
          line-height: 24px;
        }
        span:nth-child(1) {
          width: 100px;
          text-align: right;
          padding-right: 2px;
        }
        span:nth-child(2) {
          width: 50px;
          margin-top: 5px;
        }
      }
    }
  }
  .page{
    text-align: right;
    padding-right: 10px;
  }
  .domain {
    li {
      height: 170px;
      padding: 20px 0;
      list-style: none;
      border-bottom: 1px solid #ccc;
      .domain-img {
        float: left;
        margin-right: 20px;
        img {
          width: 190px;
          height: 125px;
          display: block;
          border-radius: 5px;
        }
      }
      .domain-text {
        width: 240px;
        float: left;

        .item-name {
          color: #333;
          font-size: 22px;
          line-height: 40px;
        }
        .item-price {
          font-size: 16px;
          b {
            color: #4e14d6;
            font-size: 18px;
            line-height: 26px;
          }
        }
        .item-tag {
          margin-top: 20px;
          line-height: 20px;
          font-size: 14px;
          width: 230px;
        }
      }
      .btn-buy {
        width: 140px;
        height: 56px;
        border-radius: 5px;
        line-height: 56px;
        text-align: center;
        color: #fff;
        background: #4e14d6;
        margin-top: 40px;
        margin-right: 50px;
        float: right;
      }
    }
    li:last-child {
      border: none;
    }
  }
}
</style>

<template>
  <div class="boutique">
    <div class="card">
      <!-- 所属行业： -->
      <div class="search-con">
        <div class="search-l">
          <p class="search-title">所属行业：</p>
        </div>
        <div class="search-r">
          <ul class="search-list">
            <li
              v-for="(item,idx) in aIndustry"
              :class="isActBtn(item)?'act-btn':''"
              :key="idx"
            >{{item.name}}</li>
          </ul>
        </div>
      </div>
      <!-- 域名分类： -->
      <div class="search-con">
        <div class="search-l">
          <p class="search-title">域名分类：</p>
        </div>
        <div class="search-r">
          <Tabs type="card">
            <TabPane label="数字">
              <ul class="search-list">
                <li
                  v-for="(item,idx) in aType.num"
                  :class="isActBtn(item)?'act-btn':''"
                  :key="idx"
                >{{item.name}}</li>
              </ul>
            </TabPane>
            <TabPane label="字母">
              <ul class="search-list">
                <li
                  v-for="(item,idx) in aType.num"
                  :class="isActBtn(item)?'act-btn':''"
                  :key="idx"
                >{{item.name}}</li>
              </ul>
            </TabPane>
            <TabPane label="拼音">
              <ul class="search-list">
                <li
                  v-for="(item,idx) in aType.num"
                  :class="isActBtn(item)?'act-btn':''"
                  :key="idx"
                >{{item.name}}</li>
              </ul>
            </TabPane>
            <TabPane label="杂米">
              <ul class="search-list">
                <li
                  v-for="(item,idx) in aType.num"
                  :class="isActBtn(item)?'act-btn':''"
                  :key="idx"
                >{{item.name}}</li>
              </ul>
            </TabPane>
            <TabPane label="语种">
              <ul class="search-list">
                <li
                  v-for="(item,idx) in aType.num"
                  :class="isActBtn(item)?'act-btn':''"
                  :key="idx"
                >{{item.name}}</li>
              </ul>
            </TabPane>
          </Tabs>
        </div>
      </div>
      <!-- 域名后缀： -->
      <div class="search-con">
        <div class="search-l">
          <p class="search-title">域名后缀：</p>
        </div>
        <div class="search-r">
          <ul class="search-list">
            <li
              v-for="(item,idx) in aLast"
              :class="isActBtn(item)?'act-btn':''"
              :key="idx"
            >{{item.name}}</li>
          </ul>
        </div>
      </div>
      <!-- 其他： -->
      <div
        class="search-con"
        style="border-bottom:1px solid #ccc;padding-bottom:20px;margin-bottom:20px;"
      >
        <div class="search-l">
          <p class="search-title">其他：</p>
        </div>
        <div class="search-r">
          <p class="other">
            <span>
              长度：
              <InputNumber v-model="other.len.s" size="small"></InputNumber>
              <span class="divider">-</span>
              <InputNumber v-model="other.len.e" placeholder="不限" size="small"></InputNumber>
            </span>
            <span style="margin-left:30px;">
              价格：
              <InputNumber v-model="other.price.s" size="small"></InputNumber>
              <span class="divider">-</span>
              <InputNumber v-model="other.price.e" placeholder="不限" size="small"></InputNumber>
            </span>
            <span>
              <Select v-model="other.price.unit" size="small" style="width:80px; margin-left:10px;">
                <Option value="1">人民币</Option>
                <Option value="2">美元</Option>
              </Select>
            </span>
            <span class="btn ok">确定</span>
            <span class="btn reset">重置</span>
          </p>
        </div>
      </div>

      <!-- 已选条件 -->
      <div class="search-con">
        <div class="search-l">
          <p class="search-title">已选条件：</p>
        </div>
        <div class="search-r">
          <ul class="params-list">
            <li v-for="(item,idx) in aParams" :key="idx">
              {{item.name}}
              <i class="btn_close" @click="handleDeleteParams(idx)"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="main-con">
      <!-- <i class="ivu-icon ivu-icon-md-arrow-dropup"></i> -->
      <div class="main-con-l card">
        <div class="sort-con">
          <span class="sort-con-title">精品域名排序</span>
          <ul class="sort-item">
            <li>
              <span>人气</span>
              <span class="ivu-table-sort">
                <i class="ivu-icon ivu-icon-md-arrow-dropup" @click="(e)=>{handleSort('hotUp',e)}"></i>
                <i
                  class="ivu-icon ivu-icon-md-arrow-dropdown"
                  @click="(e)=>{handleSort('hotUp',e)}"
                ></i>
              </span>
            </li>
            <li>
              <span>注册日期</span>
              <span class="ivu-table-sort">
                <i class="ivu-icon ivu-icon-md-arrow-dropup"></i>
                <i class="ivu-icon ivu-icon-md-arrow-dropdown"></i>
              </span>
            </li>
            <li>
              <span>长度</span>
              <span class="ivu-table-sort">
                <i class="ivu-icon ivu-icon-md-arrow-dropup"></i>
                <i class="ivu-icon ivu-icon-md-arrow-dropdown"></i>
              </span>
            </li>
            <li>
              <span>价格</span>
              <span class="ivu-table-sort">
                <i class="ivu-icon ivu-icon-md-arrow-dropup"></i>
                <i class="ivu-icon ivu-icon-md-arrow-dropdown"></i>
              </span>
            </li>
          </ul>
        </div>
        <div class="card-con">
          <ul class="domain">
            <li v-for="(item,idx) in domainList" :key="idx">
              <div class="domain-img">
                <img src="@/images/bg_card.png" alt>
              </div>
              <div class="domain-text">
                <p class="item-name">{{item.name}}</p>
                <p class="item-price">
                  <b>￥{{item.num}}</b>
                </p>
                <p class="item-tag">域名行业：{{item.tags.join('、')}}</p>
              </div>
              <p class="btn-buy" @click="handleBuy(item)">立即购买</p>
            </li>
          </ul>
        </div>
        <div class="page">
          <Page :total="40" show-elevator show-sizer/>
        </div>
      </div>

      <div class="main-con-r card">
        <p class="card-title">
          快讯
          <span class="btn-more" @click="turnTo('latest')">more</span>
        </p>

        <div class="card-con">
          <div class="article" v-for="(item,idx) in aArticle" :key="idx">
            <p class="article-title">{{item.title}}</p>
            <p class="article-con">{{item.con}}</p>
            <p class="article-info">{{item.time}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "boutique",
  data() {
    return {
      //   快讯
      aArticle: [
        {
          id: 12,
          title: "水滴回应“寻求新一轮融资”对于融资一直都是开放心态",
          time: "222",
          con:
            "36氪讯，近日据彭博报道，腾讯旗下的水滴公司正在寻求新一轮融资，估值超过10亿美元。水滴公司对此回应称，在融资方面水滴的态度一向开放，该公司品牌公关负责嘀嘀嘀嘀嘀滴滴嘀嘀嘀"
        },
        {
          id: 12,
          title: "水滴回应“寻求新一轮融资”对于融资一直都是开放心态",
          time: "222",
          con:
            "36氪讯，近日据彭博报道，腾讯旗下的水滴公司正在寻求新一轮融资，估值超过10亿美元。水滴公司对此回应称，在融资方面水滴的态度一向开放，该公司品牌公关负责嘀嘀嘀嘀嘀滴滴嘀嘀嘀"
        },
        {
          id: 12,
          title: "水滴回应“寻求新一轮融资”对于融资一直都是开放心态",
          time: "222",
          con:
            "36氪讯，近日据彭博报道，腾讯旗下的水滴公司正在寻求新一轮融资，估值超过10亿美元。水滴公司对此回应称，在融资方面水滴的态度一向开放，该公司品牌公关负责嘀嘀嘀嘀嘀滴滴嘀嘀嘀"
        }
      ],
      aParams: [
        {
          id: 1,
          name: "金融投资"
        },
        {
          id: 1,
          name: "纯数字"
        }
      ],
      other: {
        len: {
          s: 0,
          e: null
        },
        price: {
          s: 0,
          e: null,
          unit: "1"
        }
      },
      // 分类
      aType: {
        num: [
          {
            id: 1,
            name: "纯数字"
          },
          {
            id: 1,
            name: "单数字"
          },
          {
            id: 1,
            name: "双数字"
          },
          {
            id: 1,
            name: "三数字"
          },
          {
            id: 1,
            name: "四数字"
          }
        ]
      },
      // 行业
      aIndustry: [
        {
          id: 1,
          name: "不限"
        },
        {
          id: 1,
          name: "金融投资"
        },
        {
          id: 1,
          name: "房产家居"
        },
        {
          id: 1,
          name: "交通旅游"
        },
        {
          id: 1,
          name: "区块链"
        },
        {
          id: 1,
          name: "生活服务"
        },
        {
          id: 1,
          name: "医疗教育"
        },
        {
          id: 1,
          name: "人才招聘"
        },
        {
          id: 1,
          name: "休闲娱乐"
        },
        {
          id: 1,
          name: "电商购物"
        },
        {
          id: 1,
          name: "新闻资讯"
        },
        {
          id: 1,
          name: "体育用品"
        },
        {
          id: 1,
          name: "品牌商标"
        },
        {
          id: 1,
          name: "综合门户"
        },
        {
          id: 1,
          name: "农业精品"
        }
      ],
      //   域名后缀
      aLast: [
        {
          id: 1,
          name: "不限"
        },
        {
          id: 1,
          name: ".com"
        },
        {
          id: 1,
          name: ".cn"
        },
        {
          id: 1,
          name: ".io"
        },
        {
          id: 1,
          name: ".vc"
        },
        {
          id: 1,
          name: ".net"
        },
        {
          id: 1,
          name: ".com.cn"
        }
      ],

      //   特价list
      aBargain: [
        {
          id: 1,
          name: "glb1.com",
          status: 0,
          num: "1250"
        }
      ],
      domainList: [
        {
          id: 23,
          name: "00000",
          num: 888,
          tags: ["sdf", "232", "sdfsdf", "232", "sdfsdf", "232", "sdfsdf"],
          imgUrl: "sdfsdfsdf"
        },
        {
          id: 23,
          name: "11111",
          num: 888,
          tags: ["sdf", "232", "sdfsdf", "232", "sdfsdf", "232", "sdfsdf"],
          imgUrl: "sdfsdfsdf"
        },
        {
          id: 23,
          name: "22222222",
          num: 888,
          tags: ["sdf", "232", "sdfsdf", "232", "sdfsdf", "232", "sdfsdf"],
          imgUrl: "sdfsdfsdf"
        },
        {
          id: 23,
          name: "3333",
          num: 888,
          tags: ["sdf", "232", "sdfsdf", "232", "sdfsdf", "232", "sdfsdf"],
          imgUrl: "sdfsdfsdf"
        }
      ]
    };
  },
  methods: {
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
    },
    isActBtn(target) {
      let res = this.aParams.some(item => {
        if (item.name == target.name) {
          return true;
        }
      });
      return res;
    },
    handleDeleteParams(idx) {
      this.aParams.splice(idx, 1);
    },
    handleBuy(obj) {
      this.$router.push({
        name: "domain",
        params: {
          id: obj.id
        }
      });
    },
    handleSort(type, e) {
      console.log(type, e);
      let arr = e.target.className.split(" ");
      if (arr.length == 2) {
        e.target.className += " on";
        e.target.previousSibling.className = e.target.previousSibling.className
          .split(" ")
          .slice(0, 2)
          .join(" ");
      } else {
        e.target.className = e.target.className
          .split(" ")
          .slice(0, 2)
          .join(" ");
        e.target.previousSibling.className = e.target.previousSibling.className
          .split(" ")
          .slice(0, 2)
          .join(" ");
      }
    }
  },
  mounted() {
    console.log(this.isActBtn({ id: 1, name: "金融投资" }));
  }
};
</script>

