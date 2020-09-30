$('.desc__tabs-box').click(
  function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.content').find('.desc-tabs__block').removeClass('active')
    .eq($(this).index()).addClass('active');
  }
);

$(document).ready(function() {
     $('#sidebarCollapse').on('click', function() {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
     });
});

$('.nav__cat-test-tittle').click(
  function () {
       $(this).toggleClass('active');
       $(this).siblings('.nav__list-tests').toggleClass('active');
  }
);

$('.nav__tittle').click(
     function () {
          $(this).find('.arrow').toggleClass('active');
          $(this).siblings('.nav__cat').toggleClass('active');
     }
);

$('.content__group-block-num').click(
     function() {
          $(this).addClass('active').siblings().removeClass('active');
          $('.content__group').find('.content__group-table').removeClass('active')
          .eq($(this).index()).addClass('active');
          $('.content__time').find('.time__wrapper').removeClass('active')
          .eq($(this).index()).addClass('active');
     }
)
