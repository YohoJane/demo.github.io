var app = new Vue({
    el:"#player",
    data:{
        query:"", //查询数据对象
        musicUrl:"",
        musicPhoto:"https://vthumb.ykimg.com/054101015ACAD9FE8B324CA9EA9C8AD1",
        musicList:[], //待渲染歌曲列表
        isPlaying:false,
        isShow:false,
    },
    methods:{
        searchMusic:function(){
            //歌曲搜索接口请求
            var that = this;
            axios.get("https://autumnfish.cn/search?keywords="+this.query)
            .then(function(response){
                console.log(response);
                that.musicList = response.data.result.songs;
            }).catch(function(err){
                console.log(err);
            })
        },
        searchHot:function(){
            var that = this;
            axios.get("https://autumnfish.cn/search/hot/detail")
            .then(function(response){
                //console.log(response);
                that.musicList = response.data.data;
            }).catch(function(err){
                console.log(err);
            })
        },
        /*播放歌曲：但无法跳过验证获取mp3地址url */
        playMusic:function(musicId){
            var that = this;
            console.log(musicId);
            axios.get("https://autumnfish.cn/song/url?id="+musicId)
            .then(function(response){ //回调函数
                console.log(response);
                //console.log(response.data.data.url);
                that.musicUrl = "http://www.ytmp3.cn/down/46298.mp3";
                that.musicPhoto = "http://vthumb.ykimg.com/054101015EE10262AD98E790217EC502";
            }).catch(function(err){
                console.log(err);
            })

        },

        play:function(){
            //console.log("play");
            this.isPlaying = true;
        },
        pause:function(){
            //console.log("pause");
            this.isPlaying = false;
        },
        /*播放MV:但无法跳过验证去获取mv地址url*/
        playMV:function(mvId){
            //var that = this;
            /*axios.get("https://autumnfish.cn/mv/url?id="+mvId)
            .then(function(response){
                //console.log(response);
                that.mvUrl = "https://player.bilibili.com/player.html?aid=889894292&bvid=BV1EP4y1s7K3&cid=392091001&page=1";
            }).catch(function(err){
                console.log(err);
            })*/
            this.isShow = true;
        },
        hide:function(){
            this.isShow = false;
        }
       
    }

})