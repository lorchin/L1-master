$('#send_form').click(function () {
    var name = $('#fname input').val();
    if( name == "" ){
        $('#fname .error').text('Field "First name" can not be empty')
    }
    else{
        $('#fname .error').text('')
    }
    return false;
});
$('#send_form').click(function () {
    var name = $('#lname input').val();
    if( name == "" ){
        $('#lname .error').text('Field "Last name" can not be empty')
    }
    else{
        $('#lname .error').text('')
    }
    return false;
});
$('#send_form').click(function () {
    var name = $('#email input').val();
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var isEmail = pattern.test(name);

    if( name == "" ){
        $('#email .error').text('Field "E-mail" can not be empty');
    }
    else if(!isEmail){
        $('#email .error').text('Please enter valid e-mail address');
    }
    else{
        $('#email .error').text('')
    }
    return false
});
$('#send_form').click(function () {
    var name = $('#phone input').val();
    var pattern = /\d{10,13}/;
    var isPhone = pattern.test(name);

    if( name == "" ){
        $('#phone .error').text('Field "Phone" can not be empty')
    }
    else if(!isPhone){
        $('#phone .error').text('Please enter valid phone number')
    }
    else{
        $('#phone .error').text('')
    }
    return false;

});$('#send_form').click(function () {
    var name = $('#address textarea').val();
    if( name == "" ){
        $('#address .error').text('Field "Address" can not be empty')
    }
    else{
        $('#address .error').text('')
    }
    return false;
});
$('#send_form').click(function () {
    var name = $('#city input').val();
    if( name == "" ){
        $('#city .error').text('Field "City" can not be empty')
    }
    else{
        $('#city .error').text('')
    }
    return false;
});
$('#send_form').click(function () {
    var name = $('#state input').val();
    if( name == "" ){
        $('#state .error').text('Field "State/Providence" can not be empty')
    }
    else{
        $('#state .error').text('')
    }
    return false;
});
