function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
$(document).ready(function() {
    $('#id_birthday').datepicker({
        format: 'YYYY-MM-DD',
        maxDate: '0'
    });
    $("#id_random_number").keyup(function () { 
        this.value = this.value.replace(/[^0-9\.]/g,'');
    });

    var csrftoken = getCookie('csrftoken');
    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    $.ajaxSetup({
        crossDomain: false, // obviates need for sameOrigin test
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type)) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });

    // delete button
    $('.actions .delete').on('click', function(e) {
      e.preventDefault();
      var id = $(this).data('id');
      $('.modal-footer').attr('id', id);
    });
    $('#delete_submit').on('click', function() {
        var id = $('.modal-footer').attr('id');
        var handler = $('#'+id).attr('href');
        $.post(handler);
        document.location.reload();
    });
});
