$(document).ready(function() {
    $('form').submit(function() {
        var fname = $('input[name="first_name"]').val();
        var lname = $('input[name="last_name"]').val();
        var description = $('textarea').val();
        var newElement = $(
            '<div><h1>' + fname + ' ' + lname + 
            '</h1><h4>Click for description!</h4><p>' + description + 
            '</p><p class="toggle">Click for full name.</p></div>'
        );
        $('#contact-list').append(newElement);
        newElement.children('p').hide();
        return false;
    });
    $(document).on("click", "#contact-list div", function() {
        $(this).children().toggle();
    });
});