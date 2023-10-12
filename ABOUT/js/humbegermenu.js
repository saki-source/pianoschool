// JavaScript Document
$(".open_btn").click(function () { //ボタンがクリックされたら
    $(this).toggleClass('active'); //ボタン自身に activeクラスを付与し
    $("#section-header-nav").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
  });
  
  $("#section-header_-nav a").click(function () { //ナビゲーションのリンクがクリックされたら
    $(".open_btn").removeClass('active'); //ボタンの activeクラスを除去し
    $("#section-header-nav").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスも除去
  });
  