var app = angular.module('salaryCalc', []);

app.controller('SalaryCalcController', function() {
    console.log('SalaryCalcController loaded');

    var intro = this;
    intro.employees = [];
    intro.totalSalary = 0;

    intro.getSalary = function() {
        intro.totalSalary = 0;
        intro.employees.forEach(function(employee) {
            intro.totalSalary += employee.salary;
        });

        intro.totalSalary = (intro.totalSalary / 12).toFixed(2);
    };

    intro.createEmployee = function() {
        intro.employees.push(angular.copy(intro.employee));
        intro.getSalary();
    };

    intro.deleteEmployee = function(index) {
        intro.employees.splice(index, 1);
        intro.getSalary();
    };
});

// // Old code with jQuery below
//
// $(function(){
//   console.log('jQuery is working!!!!!!!!!');
//   var totalMonthlySalary = 0;
//
//   $('#employeesTable').on('click', '.deleteButton', function(){
//     // var salaryToRemoveFromTotal = $(this).parent().prev().text();
//     console.log('data is: ', $(this).parent().data()); // this is an object like {salary: "24"}
//     var salaryToRemoveFromTotal = $(this).parent().data('salary');
//     updateMonthlySalary("-" + salaryToRemoveFromTotal);
//     $(this).parent().parent().remove();
//   });
//
//   $('#newEmployeeForm').on('submit', function(event){
//     event.preventDefault(); // stop the page from reloading and redirecting
//     console.log('Form has been submitted!!');
//
//     var newEmployeeArray = $(this).serializeArray(); // get the information from the form
//     console.log(newEmployeeArray);
//
//     var newEmployeeObject = {};
//
//     // Loop through all of the input properties in the array
//     // to make a single object
//     for(var i = 0; i < newEmployeeArray.length; i++){
//       var inputFieldName = newEmployeeArray[i].name;
//       var inputFieldValue = newEmployeeArray[i].value;
//       newEmployeeObject[inputFieldName] = inputFieldValue;
//     }
//
//     console.log(newEmployeeObject);
//
//     var $newRow = $('<tr>' +
//     '<td>' + newEmployeeObject.firstName + '</td>'+
//     '<td>' + newEmployeeObject.lastName + '</td>'+
//     '<td>' + newEmployeeObject.number + '</td>'+
//     '<td>' + newEmployeeObject.title + '</td>'+
//     '<td>' + newEmployeeObject.salary + '</td>'+
//     '</tr>');
//
//     var $deleteButton = $('<td><button class="deleteButton">Delete</button></td>');
//
//     $deleteButton.data('salary', newEmployeeObject.salary);
//
//     $newRow.append($deleteButton);
//
//     $('#employeesTable').append($newRow);
//
//     $('#newEmployeeForm input[type="text"]').val('');
//     $('#newEmployeeForm input[type="number"]').val('');
//
//     updateMonthlySalary(newEmployeeObject.salary);
//
//   });
//
//   function updateMonthlySalary(newEmployeeSalary) {
//     // With new employee, divide salary by 12, add to current totalMonthlySalary
//     totalMonthlySalary += newEmployeeSalary / 12;
//     console.log('totalMonthlySalary is ', totalMonthlySalary);
//
//     $('#monthlySalary').text(totalMonthlySalary.toLocaleString("en-US", { style: 'currency', currency: 'USD' }));
//   }
// });
