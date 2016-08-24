$(document).ready(function() {
  function send(object) {
    var fieldArr = [], newFieldArr = [];
    fieldArr = object.find(':input,textarea,select').serializeArray();

    for (var c = 0; c < fieldArr.length; c++) {
      var title = object.find('input[name="' + fieldArr[c].name + '"],select[name="' + fieldArr[c].name + '"],textarea[name="' + fieldArr[c].name + '"]').attr('data-title');
      fieldArr[c]['title'] = title;
      if (fieldArr[c].value.length > 0) {
          newFieldArr.push(fieldArr[c])
      }
    }
    $.ajax({
        type: "POST",
        url: 'form-handler.php',
        dataType: 'json',
        data: {
          formData: newFieldArr,
          task: 'sendMail'
        }
    }).done(function () {
        thanks();
    })
  }

  function thanks() {
    window.location.href="#openModal_tnx";
    setTimeout(function(){window.location.href="#close"}, 5000);
  }


  $('.callback-form-block-btn').click(function() {
    var msg   = $('.callback-form-block').serializeArray();
    for (var i=0;i<msg.length;i++) {
      console.log(msg[i]);
      console.log(msg[i].name);
    }
    console.log(msg);
    jQuery.ajax({
      url:'/form-handler.php', 
      type: "POST",
      data: msg, 
      success: function(response) { 
        console.log('Success!');
        window.location.href="#openModal_tnx";
        setTimeout(function(){window.location.href="#close"}, 5000);
      },
      error: function(response) { 
        console.log('Error!');
      }
    });
    return false;
  })

  $('.callback-form-modal-btn').click(function() {
    var msg   = $('.callback-form-modal').serializeArray();
    for (var i=0;i<msg.length;i++) {
      console.log(msg[i]);
      console.log(msg[i].name);
    }
    console.log(msg);
    jQuery.ajax({
      url:'/form-handler.php',
      type: "POST", 
      data: msg, 
      success: function(response) { 
        console.log('Success!');
        window.location.href="#openModal_tnx";
        setTimeout(function(){window.location.href="#close"}, 5000);
      },
      error: function(response) { 
        console.log('Error!');
      }
    });
    return false;
  })

  $('.form-online-file-selector').change(function() {
    var i = 0;
    
    var parent = $(this).parents('.form-online-file');
    var preview = parent.find('.form-online-file-preview[data-item="0"]');
    var img = $('<img/>');

    var file    = $(this)[0].files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
      img.attr('src', reader.result);
      img.addClass('form-online-file-preview-img');
      preview.html(img);
    }

    if (file) {
      reader.readAsDataURL(file);
      i++;
    } else {
      img.src = "";
    }
    console.log(img, file, preview);
    
  })

  $('.form-online-btn').click(function() {

  // создать объект для формы
  var formData = new FormData('document.forms.online');
  console.log(formData);

  // отослать
  // var xhr = new XMLHttpRequest();
  // xhr.open("POST", "/form-handler.php");
  // xhr.send(formData);

  jQuery.ajax({
    url:'/form-handler.php', 
    type: "POST",
    data: msg, 
    success: function(response) { 
      console.log('Success!');
      window.location.href="#openModal_tnx";
      setTimeout(function(){window.location.href="#close"}, 5000);
    },
    error: function(response) { 
      console.log('Error!');
    }
  });
  return false;

    
    // var type = $(this).parents('.form-online').find('.form-online-type').val();
    // var year = $(this).parents('.form-online').find('.form-online-year').val();
    // var mark = $(this).parents('.form-online').find('.form-online-mark').val();
    // var age = $(this).parents('.form-online').find('.form-online-age').val();
    // var img = $(this)[0].files[0];

    // var phone = $(this).parents('.form-online').find('.form-online-phone').val();
    // console.log(type, phone);
    // $.post('/', {type: type, phone: phone}, function(data, res) {
    //   console.log('Success!');
    //   window.location.href="#openModal_tnx";
    //   setTimeout(function(){window.location.href="#close"}, 5000);
    //})
  })

  $('.block').click(function() {
    $('.modal-data').html('');
    $(this).clone().find('.tecnic-img').appendTo('.modal-data');
    $(this).clone().find('.tecnic-name').appendTo('.modal-data');
  });

  $('.call-pop-up').click(function() {
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