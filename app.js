var corpExpenses = 0;

function deleteButton(id){
  document.getElementById(id).remove();
    console.log('Employee Deleted');
};
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
    // $('button').onclick = function(event) {
    //     console.log('Employee Deleted');
    //   };
    // document.getElementById('deleteButton').onclick = function(event) {
    //     console.log('Employee Deleted');
    //   };


});

function appendDom(emp) {
    var $emp = $('<div id= "'+ emp.employeeIdNumber +'" class="employee"></div>'); // create a div jQuery object
    var $ul = $('<ul></ul>');
    var $firstName = $('<li>' + emp.employeeFirstName + '</li>');
    var $lastName = $('<li>' + emp.employeeLastName + '</li>');
    var $id = $('<li>' + emp.employeeIdNumber + '</li>');
    var $job = $('<li>' + emp.employeeJobTitle + '</li>');
    var $salary = $('<li id="salary">' + emp.employeeSalary + '</li>');
    var $deleteButton = $('<button id="deleteButton" onclick="deleteButton('+ emp.employeeIdNumber +')">Delete Employee</button>');
    $ul.append($firstName);
    $ul.append($lastName);
    $ul.append($id);
    $ul.append($job);
    $ul.append($salary);
    $ul.append($deleteButton);
    $emp.append($ul);

    $('#employees').append($emp); // append our div to the DOM
}

function clearForm() {
    $('form').find('input[type=text]').val('');
    $('form').find('input[type=number]').val('');
}

function salary(add) {
    var current = document.getElementById('corpExpenses').innerHTML;
    current = Number(current) + add / 12;
    $("#corpExpenses").html(current.toFixed(2));


}
