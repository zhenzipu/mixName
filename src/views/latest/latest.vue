<style lang="less" scoped>
.latest-con {
  padding-top: 30px;
  padding-bottom: 20px;
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
    margin-top: 20px;
    &-title {
      font-size: 20px;
      line-height: 50px;
    }
    &-con{
      .news-list{
        list-style: none;
        li{
          margin-top: 20px;
          .new_title{
            font-size:20px;
            line-height: 36px;
            font-weight: bold;
          }
          .new_img{
            img{
              width: 130px;
              height: 90px;
            }
          }
        }
      }
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
      width: 250px;
    }
    &-card {
      background: url("../../images/bg_card.png") no-repeat;
      background-size: 100% 100%;
      width: 250px;
      height: 160px;
      border-radius: 5px;
      position: relative;
      p:nth-child(1) {
        font-size: 50px;
        line-height: 160px;
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

  .latest-main {
    margin-top: 15px;
    > div {
      display: inline-block;
      vertical-align: top;
    }
    .main-l {
      min-height: 100px;
      width: 890px;
      margin-right: 15px;
      padding: 20px;
    }
    .main-r {
      // height: 340px;
      width: 290px;
    }
  }
  .article {
    li {
      height: 190px;
      padding: 20px 0;
      list-style: none;
      cursor: pointer;
      border-bottom: 1px solid #ccc;
      .article-img {
        float: left;
        margin-right: 20px;
        img {
          width: 230px;
          height: 150px;
          display: block;
        }
      }
      .article-text {
        // width: 560px;
        float: left;
        p:nth-child(1) {
          font-size: 28px;
          line-height: 40px;
          font-size: 24px;
          color: #333;
        }
        p:nth-child(2) {
          line-height: 28px;
          font-size: 16px;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        p:nth-child(3) {
          color: #999999;
          line-height: 24px;
          margin-top: 5px;
          > span {
            display: inline-block;
            vertical-align: top;
            margin-right: 40px;
          }
          .share-btn {
            cursor: pointer;
            height: 24px;
            padding: 3px;
            width: 120px;
            .share-con {
              float: right;
              display: none;
              img {
                display: inline-block;
                margin: 0 10px;
                height: 16px;
                cursor: pointer;
              }
            }
          }
          .share-btn:hover {
            border: 1px solid #ccc;
            border-radius: 5px;
            .share-con {
              display: block;
            }
          }
        }
      }
    }
    li:last-child {
      border: none;
    }
  }
}
</style>

<template>
  <div class="latest-con">
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

    <div class="latest-main">
      <div class="main-l card">
        <div class="card-con">
          <ul class="article">
            <li v-for="(item,idx) in articleList" :key="idx" @click="turnTo('news',idx)">
              <div class="article-img" v-if="item.imgUrl">
                <img src="@/images/bg_card.png" alt>
              </div>
              <div class="article-text" :style="{width:item.imgUrl?'560px':''}">
                <p>{{item.title}}</p>
                <p>{{item.con}}</p>
                <p>
                  <span>{{item.date}}</span>
                  <span class="share-btn">
                    <img src="@/images/share.png" alt>
                    <span class="share-con">
                      <img src="@/images/wx.png" alt>
                      <img src="@/images/sina.png" alt>
                    </span>
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="main-r">
        <div class="card" style="height:300px;">
          <p class="card-title">
            每日特价
            <span class="btn-more">more</span>
          </p>
          <div class="card-con">
            <ul class="shop-list">
              <li v-for="(item,idx) in aBargain" :key="idx">
                <div class="shop-list-card">
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


        <div class="card">
          <p class="card-title">
            热点资讯
          </p>
          <div class="card-con">
            <ul class="news-list">
              <li v-for="(item,idx) in aNews" :key="idx">
                <p class="new_title">{{item.title}}</p>
                <div class="new_img">
                  <img src="@/images/news_smal.png" alt="">
                </div>
              </li>
            </ul>
          </div>
        </div>
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
      aNews:[
        {
          id:123,
          title:'sdf',
          imgUrl:'sdfsdf',
        },
        {
          id:2,
          title:'sdfasd',
          imgUrl:'sdfsdf',
        },
        {
          id:53,
          title:'sf',
          imgUrl:'sdfsdf',
        },
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
      // 文章
      articleList: [
        {
          id: 23,
          title: "sdfsdfsdf",
          date: "2019-02-12 09:32:01",
          con:
            "水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费",
          imgUrl: ""
        },
        {
          id: 23,
          title: "sdfsdfsdf",
          date: "2019-02-12 09:32:01",
          con:
            "水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费",
          imgUrl: "sdfsdfsdf"
        },
        {
          id: 23,
          title: "sdfsdfsdf",
          date: "2019-02-12 09:32:01",
          con:
            "水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费",
          imgUrl: ""
        },
        {
          id: 23,
          title: "sdfsdfsdf",
          date: "2019-02-12 09:32:01",
          con:
            "水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费水电费看见是劳动纠纷洛杉矶的法律水电费",
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
    }
  },
  mounted() {}
};
</script>

