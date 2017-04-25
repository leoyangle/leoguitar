<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>音乐列表</h2>
        <h3>{{ guitarMusicList.title}}</h3>
        <ul>
          <li v-for="item in guitarMusicList.list">
            <a :href="item.url">{{ item.name }}</a>
            <span v-if="item.hot" class="hot-tag">HOT</span>
          </li>
        </ul>
      </div>
      <div class="index-left-block lastest-news">
        <h2>吉他谱</h2>
        <ul>
          <li v-for="item in musicList">
            <a :href="item.url" class="new-item">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <slide-show :banner="banner" :inv="invTime"></slide-show>
      <div class="index-board-list">
        <div
          class="index-board-item"
          v-for="(item, index) in boardList"
          :class="{'line-last' : index % 2 !== 0}">
          <div :class=" 'index-board-' + item.id"></div>
          <div class="index-board-item-inner" >
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="index-board-button">
              <router-link class="button" :to="{path: 'detail/' + item.toKey}">详细资料</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import slideShow from '../components/Slider'
  export default {
    components: {
      slideShow
    },
    data () {
      return {
        invTime: 2000,//轮播图速度
        banner: [
          {
            src: require('../assets/images/banner/banner0.jpg'),
            title: 'xxx1'
          },
          {
            src: require('../assets/images/banner/banner1.jpg'),
            title: 'xxx2'
          },
          {
            src: require('../assets/images/banner/banner2.jpg'),
            title: 'xxx3'
          },
          {
            src: require('../assets/images/banner/banner3.jpg'),
            title: 'xxx4'
          },
          {
            src: require('../assets/images/banner/banner4.jpg'),
            title: 'xxx5'
          }
        ],
        guitarMusicList: {
          title: '指弹',
          list: [
            {
              name: 'wings you are the hero',
              url: 'http://starcraft.com'
            },
            {
              name: 'fight',
              url: 'http://warcraft.com'
            },
            {
              name: '田子坊',
              url: 'http://overwatch.com',
              hot: true
            },
            {
              name: '北京胡同',
              url: 'http://hearstone.com'
            },
            {
              name: 'brand new wings',
              url: 'http://overwatch.com',
            },
            {
              name: 'Night in ShangHai',
              url: 'http://overwatch.com',
            },
            {
              name: '无题',
              url: 'http://overwatch.com',
            },
            {
              name: '无题',
              url: 'http://overwatch.com',
            },
            {
              name: '无题',
              url: 'http://overwatch.com',
            },
            {
              name: '无题',
              url: 'http://overwatch.com',
            },
            {
              name: '无题',
              url: 'http://overwatch.com',
            },
            {
              name: '无题',
              url: 'http://overwatch.com',
            },
            {
              name: '无题',
              url: 'http://overwatch.com',
            },
            {
              name: '无题',
              url: 'http://overwatch.com',
            },
            {
              name: '无题',
              url: 'http://overwatch.com',
            },
            {
              name: '无题',
              url: 'http://overwatch.com',
            },
            {
              name: '无题',
              url: 'http://overwatch.com',
            },
            {
              name: '无题',
              url: 'http://overwatch.com',
            }
          ]
        },
        musicList: [],
        boardList: [
          {
            title: '押尾',
            description: '1968年2月1日出生于大阪，是日本新生代的吉他演奏家、指弹吉他大师。',
            id: 'car',
            toKey: 'detail1',
            saleout: false
          },
          {
            title: '陈亮',
            description: '中国指弹音乐人，其作品有强烈的中国风风格。',
            id: 'earth',
            toKey: 'detail2',
            saleout: false
          },
          {
            title: '曹思义',
            description: '出生于上海，是中国指弹音乐人，上海沐音堂教学副总监。',
            id: 'loud',
            toKey: 'detail3',
            saleout: true
          },
          {
            title: '岸部真明',
            description: '日本新生代指弹吉他演奏家。其作品风格非常的多元化，既有优美清新的吉他独奏小品，又有另类的独奏作品。',
            id: 'hill',
            toKey: 'detail4',
            saleout: false
          }
        ],
      }
    },
    created: function () {
      this.$http.get('api/getMusicList')
        .then((res) => {
          this.musicList = res.data.data
        }, (err) => {
          console.log(err)
        })
    }
  }
</script>

<style scoped>
  .index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }

  .index-left {
    float: left;
    width: 300px;
    text-align: left;
  }

  .index-right {
    float: left;
    width: 900px;
  }

  .index-left-block {
    height: 350px;
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    overflow: hidden;
  }

  .index-left-block h2 {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }

  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }

  .index-left-block ul {
    padding: 10px 15px;
  }

  .index-left-block li {
    padding: 5px;
  }

  .hot-tag {
    background: red;
    color: #fff;
  }
  .lastest-news {
    min-height: 512px;
  }
  .new-item {
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .index-board-list {
    overflow: hidden;
  }
  .index-board-item {
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .index-board-car{
    float: left;
    height: 110px;
    width: 110px;
    background: url(../assets/images/1.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .index-board-loud{
    float: left;
    height: 110px;
    width: 110px;
    background: url(../assets/images/3.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .index-board-earth{
    float: left;
    height: 110px;
    width: 110px;
    background: url(../assets/images/2.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .index-board-hill{
    float: left;
    height: 110px;
    width: 110px;
    background: url(../assets/images/4.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .index-board-item-inner {
    min-height: 125px;
    padding-left: 125px;
  }
  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }
  .index-board-item p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .line-last {
    margin-right: 0;
  }
  .index-board-button {
    margin-top: 20px;
  }
</style>
