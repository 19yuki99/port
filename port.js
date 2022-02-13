

//hamburger menu
$('.burger-btn').on('click', function(){
  $('.bar').toggleClass('cross');
  $('.nav-wrapper').toggleClass('open');
});
$('.nav-item>a').on('click',function(){//.nav-item>aをクリックすると
  $('.nav-wrapper').fadeOut(300);//.nav-wrapperが0.5秒でフェードアウト(メニューのフェードアウト)
  $('.bar').removeClass('cross');//.btn_triggerのcloseクラスを削除
  $('.nav-wrapper').removeClass('open');//.btn_triggerのcloseクラスを削除
});

//fadein
$(window).scroll(function (){
  $('.fadein').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).addClass('scrollin');
          }
      });
});

//loading
'use strict';

$(window).on('load', function(){
  $('#loading').delay(900).fadeOut(800);
  console.log("ローディング完了");
});

$(function(){
  setTimeout('stopload()', 10000);
})

function stopload(){
  $('#loading').delay(900).fadeOut(800);
  console.log("10秒経過");
}
