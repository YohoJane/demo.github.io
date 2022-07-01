
var test = new Vue({
    el:"#app",
    data:{
        city:"",
        weatherList:[] //v-for渲染数据

    },
    methods:{
        searchWeather:function(){
            //console.log("cxtq");
            //console.log(this.city);
            var that = this;

            axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.city)
            .then(function(response){//回调函数
                console.log(response.data.data.forecast);
                that.weatherList = response.data.data.forecast;
            }).catch(function(err){
                console.log(err);
            })
            //this.city = "";
        },
        changeCity:function(city){
            this.city = city;
            this.searchWeather();
        }
    }


})
    