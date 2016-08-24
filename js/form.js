jQuery(function ($) {
    /* 
     * To change this license header, choose License Headers in Project Properties.
     * To change this template file, choose Tools | Templates
     * and open the template in the editor.
     */
    function thanks() {
        $('.thanks,.popupoverlay').fadeIn(600);
        $('.popup-form').fadeOut(600);
        setTimeout(function () {
            $('.thanks,.popupoverlay').fadeOut(600);
        }, 3000);
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
        userphone: {
            required: true,
            minlength: 15,
            regexp: '[^_]+$'
        },
        usermail: {
            email: true
        }
    });

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

    $(document).ready(function () {

        $('form').each(function () {
            $(this).validate({
                errorPlacement: function (error, element) {
                   
                },
                submitHandler: function (form) {

                    var object = $(form);
                    send(object);
                }

            });
        });
        $(".userphone").inputmask("mask", {"mask": "+7(999) 999-99-99"}); //specifying fn & options

    });


})