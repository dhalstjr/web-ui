$(function () {
  const body = $('body');
  const toggle = $('#mode');

  /* 로컬스토리지에 원하는 값을 저장하자*/
  // localStorage.setItem('colorMde', 'dark');

  // 페이지가 로딩되면 로컬스토리지 값을 가져와서
  const colorMode = localStorage.getItem('colorMode');

  if (colorMode === 'dark') {
    applyDark();
  } else {
    relaeseDark();
  }

  // 토글버튼(체크박스) 클릭 시
  toggle.on('click', function (e) {
    console.log(e);

    // body가 dark-mode 클래스를 가지고 있다면
    if (body.hasClass('dark-mode')) {
      localStorage.setItem('colorMode', 'light');
      relaeseDark();
    } else {
      localStorage.setItem('colorMode', 'dark');
      applyDark();
    }
  });

  // 함수로 정의
  function applyDark() {
    body.addClass('dark-mode');
    toggle.prop('checked', true);
  }

  function relaeseDark() {
    body.removeClass('dark-mode');
    // prop는 이벤트 값을 불러올 수 있다.
    toggle.prop('checked', false);
  }
});
