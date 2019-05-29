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
    .btn{
        width: 70px;
        height: 30px;
        display: inline-block;
        line-height: 30px;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;
    }
    .ok{
        color: #fff;
        background: #4e14d6;
        margin-left: 25px;
    }
    .reset{
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
          border-radius: 5px;
          float: left;
          display: inline-block;
          font-size: 14px;
          margin: 0 5px 10px;
          cursor: pointer;
        }
      }
      .params-list{
          list-style: none;
          li{
          height: 30px;
          line-height: 30px;
          text-align: center;
          padding: 0 10px;
          border-radius: 5px;
          float: left;
          display: inline-block;
          border: 1px solid #4e14d6;
          font-size: 14px;
          margin: 0 5px 10px;
          cursor: pointer;
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
  }
  .home-three {
    margin-top: 15px;
    > div {
      display: inline-block;
      vertical-align: top;
      // float: left;
    }
    .three-l {
      min-height: 100px;
      width: 890px;
      margin-right: 15px;
      padding: 20px;
    }
    .three-r {
      height: 340px;
      width: 290px;
    }
  }
  .article {
    li {
      height: 190px;
      padding: 20px 0;
      list-style: none;
      border-bottom: 1px solid #ccc;
      .article-img {
        float: left;
        margin-right: 20px;
        img{
          width: 230px;
          height: 150px;
          display: block;
        }
      }
      .article-text {
        width: 560px;
        float: left;
        p:nth-child(1) {
          font-size: 28px;
          line-height: 40px;
        }
        p:nth-child(2) {
          line-height: 30px;
          font-size: 16px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
    li:last-child{
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
            <li v-for="(item,idx) in aIndustry" :key="idx">{{item.name}}</li>
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
                <li v-for="(item,idx) in aType.num" :key="idx">{{item.name}}</li>
              </ul>
            </TabPane>
            <TabPane label="字母">
              <ul class="search-list">
                <li v-for="(item,idx) in aType.num" :key="idx">{{item.name}}</li>
              </ul>
            </TabPane>
            <TabPane label="拼音">
              <ul class="search-list">
                <li v-for="(item,idx) in aType.num" :key="idx">{{item.name}}</li>
              </ul>
            </TabPane>
            <TabPane label="杂米">
              <ul class="search-list">
                <li v-for="(item,idx) in aType.num" :key="idx">{{item.name}}</li>
              </ul>
            </TabPane>
            <TabPane label="语种">
              <ul class="search-list">
                <li v-for="(item,idx) in aType.num" :key="idx">{{item.name}}</li>
              </ul>
            </TabPane>
          </Tabs>
        </div>
      </div>
      <!-- 已选条件 -->
      <div class="search-con">
        <div class="search-l">
          <p class="search-title">域名后缀：</p>
        </div>
        <div class="search-r">
          <ul class="search-list">
            <li v-for="(item,idx) in aLast" :key="idx">{{item.name}}</li>
          </ul>
        </div>
      </div>
      <!-- 其他： -->
      <div class="search-con" style="border-bottom:1px solid #ccc;padding-bottom:20px;margin-bottom:20px;">
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
            <li v-for="(item,idx) in aParams" :key="idx">{{item.name}}</li>
          </ul>
        </div>
      </div>
    </div>



    <div class="home-three">
        <i class="ivu-icon ivu-icon-md-arrow-dropup"></i>
      <div class="three-l card">
        <div class="card-con">
          <ul class="article">
            <li v-for="(item,idx) in articleList" :key="idx">
              <div class="article-img">
                <img src="@/images/bg_card.png" alt>
              </div>
              <div class="article-text">
                <p>{{item.title}}</p>
                <p>{{item.con}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="three-r card">
        <p class="card-title">
          每日特价
          <span class="btn-more">more</span>
        </p>
        <div class="card-con">
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
        aParams:[
            {
                id:'sdf',
                name:'aaa',
            },
            {
                id:'sdf',
                name:'sdf',
            },
            {
                id:'sdf',
                name:'werwe',
            },
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
      articleList: [
        {
          id: 23,
          title: "sdfsdfsdf",
          con:
            "水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费",
          imgUrl: "sdfsdfsdf"
        },
        {
          id: 23,
          title: "sdfsdfsdf",
          con:
            "水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费",
          imgUrl: "sdfsdfsdf"
        },
        {
          id: 23,
          title: "sdfsdfsdf",
          con:
            "水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费",
          imgUrl: "sdfsdfsdf"
        },
        {
          id: 23,
          title: "sdfsdfsdf",
          con:
            "水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费",
          imgUrl: "sdfsdfsdf"
        }
      ]
    };
  }
};
</script>

