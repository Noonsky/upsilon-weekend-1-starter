var corpExpenses = 0;



$(function() {
    console.log('document is ready');

    $('form').on('submit', function(event) {
        console.log('form submitted');

        event.preventDefault();

        var formData = {};
        var formAsArray = $(this).serializeArray();

        formAsArray.forEach(function(input) {
            formData[input.name] = input.value;
        });

        appendDom(formData);

        clearForm();

        salary(formData.employeeSalary);
    });


});

function appendDom(emp) {
    var $emp = $('<div class="employee"></div>'); // create a div jQuery object
    var $ul = $('<ul></ul>');
    var $firstName = $('<li>' + emp.employeeFirstName + '</li>');
    var $lastName = $('<li>' + emp.employeeLastName + '</li>');
    var $id = $('<li>' + emp.employeeIdNumber + '</li>');
    var $job = $('<li>' + emp.employeeJobTitle + '</li>');
    var $salary = $('<li id="salary">' + emp.employeeSalary + '</li>');
    $ul.append($firstName);
    $ul.append($lastName);
    $ul.append($id);
    $ul.append($job);
    $ul.append($salary);
    $emp.append($ul);

    $('#employees').append($emp); // append our div to the DOM
}

function clearForm() {
    $('form').find('input[type=text]').val('');
    $('form').find('input[type=number]').val('');
}

function salary(add) {
    var current=document.getElementById('corpExpenses').innerHTML;
    current=Number(current)+add / 12;
    // $("corpExpenses").append(corpExpenses);
    $("#corpExpenses").html(current.toFixed(2));


}
