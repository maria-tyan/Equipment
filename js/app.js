$(document).ready(function() {
  function send(object) {
    console.log('vasfjksajgksafkgjsajkgsajkg');
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
        type: 'POST',
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

  function sendFormImg(){
    var data = new FormData($('#online')[0]);
    console.log(data);
    for (var [key, value] of data.entries()) { 
      console.log(key, value);
    }

    jQuery.ajax({
      url:'/form-handler.php', 
      type: "POST",
      data: {
        formData: data,
        task: 'sendMail'
      },
      async: false,
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) { 
        console.log('Success!');
        thanks();
      },
      error: function(response) { 
        console.log('Error!');
      }
    });
  }

  $.validator.addMethod(
    'regexp',
    function (value, element, regexp) {
      var re = new RegExp(regexp);
      return this.optional(element) || re.test(value);
    },
    "Please check your input."
  );

  $.validator.addClassRules({
    name: {
      required: true,
      minlength: 4,
    },
    phone: {
      required: true,
      minlength: 15,
      regexp: '[^_]+$',
    },
  });

  function thanks() {
    window.location.href="#openModal_tnx";
    setTimeout(function(){window.location.href="#close"}, 5000);
  }

  $('form').each(function () {
    $(this).validate({
      errorPlacement: function (error, element) {

      },
      submitHandler: function (form) {
        console.log(form);
        var object = $(form);
        if (form.id == "online") {
          sendFormImg();
        } 
        else {
         send(object);
       }
      }
    });
  });

  $(".input-phone").inputmask("mask", {"mask": "+7(999) 999-99-99"});

  $('.form-online-file-selector').change(function() {
    var i = 0;
    
    var parent = $(this).parents('.form-online-file-preview');
    var preview = parent; //parent.find('.form-online-file-preview[data-item="0"]');
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

  $('.block-anim').hover(
   function() {
    $(this).find('.cover-bg').removeClass('zoomOut').addClass('zoomIn'); 
   },
   function() {
    $(this).find('.cover-bg').removeClass('zoomIn').addClass('zoomOut'); 
   }
  )

  $('a.call').hover(
   function() {
    $(this).find('.hover-bg').removeClass('zoomOut').addClass('zoomIn'); 
   },
   function() {
    $(this).find('.hover-bg').removeClass('zoomIn').addClass('zoomOut'); 
   }
  )

});