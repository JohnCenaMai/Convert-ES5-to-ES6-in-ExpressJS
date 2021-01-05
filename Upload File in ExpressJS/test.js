$(document).ready(function() {
    //console.log($('#uploadForm'));
    $("#uploadForm").submit(function() {
        var data = new FormData($('#uploadForm')[0]);
        $.ajax({
            url: '/upload',
            type: 'POST',
            contentType: false,
            processData: false,
            cache: false,
            data: data,
            success: function(res) {
                alert(res);
            },
            error: function() {
                alert('Error: In sending the request!');
            }
        })
    });
});