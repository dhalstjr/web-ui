$(function () {
  // 대상을 변수에 저장
  const $dim = $('.dim');
  const $videoWrap = $('.video-wrap');
  const $video = $videoWrap.find('.video iframe');
  const $btnClose = $('.btn-close');
  const $selectVideo = $('.video-list > li');
  const $Caption = $('.caption');
  console.log($video);

  // 비디오 리스트를 클릭(선택) 했을 때
  $selectVideo.on('click', function () {
    // 선택한 비디오 링크를 받아서 변수에 저장
    let videoLink = $(this).data('link'); /* data-link */

    videoLink += '?autoplay=1'; //videoLink =videoLink + '?autoplay=1'

    // 선택한 비디오의 텍스트를 변수에 저장
    const videoText = $(this).text();

    console.log(videoLink, videoText);

    //  $video 의 src값으로 비디오 링크를 세팅
    $video.attr('src', videoLink);

    // .caption에 세팅 (나는 변수에 저장을 했기 때문에)
    $Caption.text(videoText);

    // dim을 보이게
    $dim.fadeIn();
    // $videoWrap을 보이게
    $videoWrap.addClass('active');
  });

  // 닫기 버튼을 클릭했을 때
  $btnClose.on('click', function () {
    // $dim을 안보이게
    $dim.fadeOut();
    // $videoWrap을 안보이게
    $videoWrap.removeClass('active');

    // $video의 src값을 없애자 -->동영상 삭제
    $video.attr('src', '');
  });
});
