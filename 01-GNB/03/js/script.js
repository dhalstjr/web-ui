$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $header = $('header');
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu');
  const duration = 300; //속도를 변수에 저장

  // 메뉴 영역에 마우스가 들어오면
  $menu.on('mouseenter', function () {
    // $(this).find($submenu).stop().slideDown(duration);

    //메뉴를 한번에 떨어뜨리기
    $submenu.stop().slideDown(duration);

    // 활성화된 메뉴 표시 : on클래스 부여
    $(this).addClass('on');

    // header에 active 클래스 부여
    $header.addClass('active');
  });

  // 메뉴 영역에 마우스가 나가면
  $menu.on('mouseleave', function () {
    $submenu.stop().slideUp(duration);

    $menu.removeClass('on');
    $header.removeClass('active');
  });

  // 마우스 휠을 조작할 때
  // wheel deta가 양수면 올라가고 음수면 내려간거
  $window.on('wheel', function (e) {
    // console.log(e);

    if (e.originalEvent.wheelDelta > 0) {
      // 휠을 올렸을 때
      $header.removeClass('hide');
    } else {
      // 휠을 내렸을 때
      $header.addClass('hide');
    }
  });
});
