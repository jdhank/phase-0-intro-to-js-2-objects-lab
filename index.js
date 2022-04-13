// Write your solution in this file!
const employee = {
    name: "Jake",
    streetAddress: "100 Main Street",
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key]= value;
    return newEmployee;

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee,key){
    const newEmployees = {...employee}
    delete newEmployees.name
    return newEmployees
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee.name
    return employee
}
