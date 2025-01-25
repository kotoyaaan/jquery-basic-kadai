$(function() {
  // id(#target)の文字色を赤にする
  $('#change-color').on('click',function(){
    $('#target').css('color','red');
  });
  // id(#target)の文字を"Hello!"に変更する
  $('#change-text').on('click',function(){
    $('#target').text('Hello!');
  });
  // フェードアウト
  $('#fade-out').on('click',function(){
    $('#target').fadeOut();
  });
  // フェードイン
  $('#fade-in').on('click',function(){
    $('#target').fadeIn();
  });
});