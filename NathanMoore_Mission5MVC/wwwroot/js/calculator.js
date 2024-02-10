
$(document).ready(function () {
    $('#calculateBtn').click(function () {
        // Get the number of hours from the input
        var hours = parseFloat($('#hours').val());

        // Validate if a positive number is entered
        if (isNaN(hours) || hours <= 0) {
            alert('Please enter a valid positive number for hours.');
            return;
        }

        // Hourly rate
        var hourlyRate = 20; // Example hourly rate, you can adjust this

        // Calculate the total
        var total = hours * hourlyRate;

        // Display the total
        $('#total').val('$' + total.toFixed(2));
    });
});
