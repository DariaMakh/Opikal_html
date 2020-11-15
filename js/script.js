
$('.possibility__slider_1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    nextArrow: $('.possibility__next_1'),
    prevArrow: $('.possibility__prev_1'),
});

$('.possibility__slider_2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    nextArrow: $('.possibility__next_2'),
    prevArrow: $('.possibility__prev_2'),
});

$('.nav__burger').click(function(event){
    $('.nav__burger, .menu').toggleClass('active');
});

$(function(){
    var modal = {
        self: $('.modal'),

        showModal: function(content){
            this.self.find('#innerModal').html(content);
            this.self.fadeIn(200);
        },
        hideModal: function(){
            this.self.fadeOut(200);
            this.self.find('#innerModal').html('');
        }
    };

    $(".showModal").on('click', function(e){
        var id = $(this).data('id');
        var content = $('#cont'+id).html();
        modal.showModal(content);
    });

    $(".modal__close").click(function(){
        $(".modal").fadeOut(200);
    });

    $('.modal').on('click', function(e){
        if ($(e.target).attr('id') === 'modal' || $(e.target).hasClass('modal__close')){
            modal.hideModal();
        } 
        else {
            return false;
        }
    });
});

/*

$('.input').on('input', function() {
        var $field = $(this).closest('.placeholder');
        if (this.value) {
          $field.addClass('placeholder--not-empty');
        } else {
          $field.removeClass('placeholder--not-empty');
        }
    });

*/