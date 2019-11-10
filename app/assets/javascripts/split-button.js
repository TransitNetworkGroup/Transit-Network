

$(document).on('ready turbolinks:load', function() {
    $('button.split-button')
        .click(function() {
            // Get button Id which was clicked
            var targetId = $(this).attr('id');
            // Split it into an array
            var newShownTableIdAsArray = targetId.split('_');

            newShownTableIdAsArray.pop(); // Remove the "button" at the end

            // Join the array without button, should correspond with a div to show/hide
            var newShownTableId = newShownTableIdAsArray.join('_');

            // Grab that div with id
            var newTableToShow = $('#'+newShownTableId);

            //hide siblings
            newTableToShow.siblings('.toggleable-list').hide();

            //show the selected
            newTableToShow.show();

            // Toggle the button styling
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected'); 
        });
});