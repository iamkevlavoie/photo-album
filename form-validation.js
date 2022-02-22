// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        username: {
                        required: true,
                        minlength: 6
        },
         
        imagetitle: {
                        required: true,
                        minlength: 1
        },
        comment: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          minlength: 1
        },
        
      },
      // Specify validation error messages
      messages: {
        username: {
                   required:"Please enter your username",
                   minlength:"Your password must be at least 6 characters long"
        },
        imagetitle: "Please enter an image title",
        comment: "Please enter a comment",
          
          
        
        
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });