function Employee(a, b, c, d) {
    this.name = a;
    this.jobTitle = b;
    this.salary = c;
    this.status = "full time";
    this.printEmployeeForm = function() {
        console.log("Name: " + this.name + ",", "title: " + this.jobTitle + ",", "Salary: " + this.salary + ",", this.status);    
    }
}
var employee1 = new Employee("John", "laborer", 30000);

var employee2 = new Employee("barry", "operator", 50000)

var employee3 = new Employee("larry", "manager", 75000)

employee1.printEmployeeForm();
employee2.printEmployeeForm();
employee1.status = "part time";
employee1.printEmployeeForm();
employee3.printEmployeeForm();