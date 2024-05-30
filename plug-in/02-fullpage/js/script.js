$(function () {
  const $header = $('#header');
  const $btnTop = $('.btn-top');

  // 탑버튼이 처음에는 안 보이게
  $btnTop.hide();

  // 탑버튼을 클릭하면 화면 상단으로(첫번째 섹션으로 이동)
  $btnTop.on('click', function () {
    // $.fn.fullpage.silentMoveTo('section1');
    $.fn.fullpage.moveTo('section1');
  });

  // fullpage의 초기화.
  $('#fullpage').fullpage({
    // 1. 인디케이터 커스텀     menu: '#menu',

    // 1. 사용할 요소의 이름을 지정
    menu: '.indicator',

    // 2. 앵커(영역)의 이름 설정
    anchors: ['section1', 'section2', 'section3', 'section4'],

    // 3. 실제 링크에 data-menuanchor= "영역이름 적용

    // * 속도조절
    scrollingSpeed: 1200,

    // * 섹션 영역의 콘텐츠 세로 정려
    verticalCentered: false,

    // 슬라이더 관련
    slidesNavigation: true,
    slidesNavPosition: 'bottom',

    // after 로드는 fullpage함수에 들어가야한다
    // 영역에 진입한 후 (여기서 인덱스는 1번부터 시작한다.)
    afterLoad: function (anchorLink, index) {
      console.log('영역에 진입한 후');
      console.log(anchorLink, index);

      // section4영역에 진입하면 탑버튼을 보이게
      // if (index >= '1') {
      //   $btnTop.fadeIn();
      // }
      if (anchorLink === 'section2') {
        $btnTop.fadeIn();
      }
    },

    // 영역을 떠나갈 때
    onLeave: function (index, nextIndex, direction) {
      console.log('영역을 떠나갈 떄');
      console.log(nextIndex, direction, index);

      // 밑에 영역으로 이동하면 헤더에 hide클래스 부여
      if (direction === 'down') {
        $header.addClass('hide');
      } else {
        $header.removeClass('hide');
      }

      if (index === 4 || direction === 'up') {
        $btnTop.fadeOut();
      }
    },
  });
});
