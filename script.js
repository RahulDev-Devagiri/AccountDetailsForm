$(document).ready(function() {
    $('#accountForm').submit(function(event) {
        event.preventDefault();
        
        let isValid = true;
        let resultMessage = '';

        // Name validation
        let name = $('#name').val();
        if (name.length < 3 || name.length > 50) {
            isValid = false;
            resultMessage += 'Name must be between 3 and 50 characters long.<br>';
        }

        // Email validation
        let email = $('#email').val();
        if (!email) {
            isValid = false;
            resultMessage += 'Email is required.<br>';
        }

        // Phone validation
        let phone = $('#phone').val();
        if (phone.length < 10 || phone.length > 14) {
            isValid = false;
            resultMessage += 'Phone must be between 10 and 14 characters long.<br>';
        }

        // Age validation
        let age = $('#age').val();
        if (age < 18 || age > 120) {
            isValid = false;
            resultMessage += 'Age must be between 18 and 120.<br>';
        }

        // Gender validation
        let gender = $('#gender').val();
        if (gender.length < 4 || gender.length > 15) {
            isValid = false;
            resultMessage += 'Gender must be between 4 and 15 characters long.<br>';
        }

        // Address validation (optional)
        let address = $('#address').val();
        if (address.length > 50) {
            isValid = false;
            resultMessage += 'Address must be less than 50 characters long.<br>';
        }

        if (isValid) {
            resultMessage = 'Form submitted successfully!';
        }

        $('#result').html(resultMessage);
    });
});
