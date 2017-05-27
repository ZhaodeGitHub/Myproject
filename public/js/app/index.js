(function($){

    var min={
       init:function(){
            this.banner()
                .index()


           return this;
       },
        index:function(){
            var span= $('.nav_nav span');
            span.on("mouseover",function(){
             console.log(333)
                $('.nav_nav .nav_a').css({display:'block'});
            })
            span.on("onmouseout",function(){
                $('.nav_nav .nav_a').css({display:'none'});
            });


            return this;
        },
      banner:function(){

          var btn = $('.btn li');

          var list = $('.list');

          //0.1 复制第一张图

          var first = list.children(':first').clone(true);

          //0.2 将克隆的第一张图扔到最后面去

          list.append(first);

          //1.自定义核心函数  这个函数根据指定的索引值来控制按钮样式及元素显示

          function nick(num){

              btn.eq(num>btn.length-1 ? 0 : num).addClass('on').siblings().removeClass('on');

              list.stop().animate({
                  marginLeft:-num*540/64+"rem"

          });

          }

          btn.click(function(){

              index = $(this).index();

              nick(index);

          });

          //7.声明一个变量保存索引值

          var index = 0;

          //8.开启定时器 并将定时器身份证存起来

          var sid = setInterval(play,5000);

          //11.鼠标移入停止定时器

          $('.banner').hover(function(){

              //12.清除定时器

              clearInterval(sid);

              //console.log(sid)

          },function(){

              //13.鼠标移出重新开始定时器

              sid = setInterval(play,5000);

          });

          function play(){

              index++;

              //9.如果数值  大于  按钮的长度    走到最后一张  显示的第一张 。索引值是6-1 = 5

              if(index>btn.length){

                  //10.瞬间将位置 调到0 第一张的位置  第一张显示和最后一张是一样的

                  list.css({marginLeft:0});

                  index = 1;

              }
              nick(index)

          }

          //14.左箭头

          $('.btn_tou a:first').click(function(){

              //15. 索引值-1

              index--;

              if(index<0){

                  //10.小于0瞬间位置调到最后一张

                  list.css({marginLeft:-btn.length*640});

                  index = btn.length-1;

              }

              nick(index);


          });

          //14.右箭头

          $('.btn_tou a:last').click(function(){

              //15. 索引值+1

              index++;

              //16.  如果小于0 变成最后一张

              //9.如果数值  大于  按钮的长度    走到最后一张  显示的第一张 。索引值是6-1 = 5

              if(index>btn.length){

                  //10.瞬间将位置 调到0 第一张的位置  第一张显示和最后一张是一样的

                  list.css({marginLeft:0});

                  index = 1;

              }

              nick(index);


          });


          return this;
      }

    };
    min.init();
    console.log($)
})(jQuery);