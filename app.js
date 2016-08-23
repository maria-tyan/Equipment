$(document).ready(function() {
  $('.callback-form-btn').click(function() {
    var name = $(this).parent('.callback-form').find('.callback-form-name').val();
    var phone = $(this).parent('.callback-form').find('.callback-form-phone').val();
    console.log(name, phone);
    $.post('/', {name: name, phone: phone}, function(data, res) {
      console.log('Success!');
      window.location.href="#openModal_tnx";
      setTimeout(function(){window.location.href="#close"}, 5000);
    })
  })

  $('.block').click(function() {
    $('.modal-data').html('');
    $(this).clone().find('.tecnic-img').appendTo('.modal-data');
    $(this).clone().find('.tecnic-name').appendTo('.modal-data');
  });

  $('.call').click(function() {
    $('.modal-data').html('');
    $('.modal-data').html('<h2> Спецтехнику</h2>');
    window.location.href="#openModal_sell";
  });

  $('button.animated').hover(
     function() {
      $(this).addClass('zoomIn call_invert'); 
     },
     function() {
      $(this).removeClass('zoomIn call_invert'); 
     }
    )
  $('.cir').hover(
     function() {
      $(this).addClass('zoomIn');
     },
     function() {
      $(this).removeClass('zoomIn'); 
     }
    )

  $('.block').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInDown',
    classToRemove: 'visible animated fadeInDown',
    offset: 100
  });

  $('.list1').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated slideInRight',
    classToRemove: 'visible animated slideInRight',
    offset: 100
  });

  $('.list2').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated slideInLeft',
    classToRemove: 'visible animated slideInLeft',
    offset: 100
  });

  $('.callback-form').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated slideInRight',
    classToRemove: 'visible animated slideInRight',
    offset: 100
  });

  $('img.icon').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated rotateIn',
    classToRemove: 'visible animated rotateIn',
    offset: 100
  });
});