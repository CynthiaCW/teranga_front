$(document).ready(function() {
    $('#pwd').on('input', function() {
        if ($(this).val() === '') {
            $('.required').addClass('active');
        } else {
            $('.required').removeClass('active');
        }
    });
});