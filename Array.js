var products = [
    {
        name: "caps",
        price: 20,
        inventory: { stock: 100 },
        colorOptions: ["red", "blue", "yellow"]
    },
    {
        name: "Jeans",
        price: 50,
        inventory: { stock: 60 },
        colorOptions: ["black", "blue"]
    },
    {
        name: "Shoes",
        price: 80,
        inventory: { stock: 30 },
        colorOptions: ["white", "black"]
    }
];
function changeColor(product, newColor) {
    if (product.colorOptions.indexOf(newColor)) {
        if (newColor === "red") {
            product.price *= 1.1;
        }
        else if (newColor === "blue") {
            product.price *= 0.95;
        }
        console.log("Changed color to ".concat(newColor, ". New price is ").concat(product.price));
    }
    else {
        console.log("".concat(newColor, " is not available for ").concat(product.name));
    }
}
products.forEach(function (product) {
    console.log("Name: ".concat(product.name, ", Price: $").concat(product.price, ", Stock: ").concat(product.inventory.stock, ", Colors: ").concat(product.colorOptions.join(", ")));
});
var students = [
    {
        name: "Amna",
        grades: [90, 80, 85]
    },
    {
        name: "Noor",
        grades: [65, 70, 58]
    },
    {
        name: "Fizza",
        grades: [85, 50, 83]
    }
];
function calculateAverageGrade(grades) {
    var total = grades.reduce(function (sum, grade) { return sum + grade; }, 0);
    return total / grades.length;
}
students.forEach(function (student) {
    var averageGrade = calculateAverageGrade(student.grades);
    console.log("Name: ".concat(student.name, ", Average Grade: ").concat(averageGrade));
});
var employees = [
    {
        name: "Amna",
        hoursWorked: 35,
        hourlyRate: 20,
        salary: 0 // This will be calculated
    },
    {
        name: "Fizza",
        hoursWorked: 50,
        hourlyRate: 25,
        salary: 0
    },
    {
        name: "Noor",
        hoursWorked: 20,
        hourlyRate: 10,
        salary: 0
    }
];
function calculateSalary(employee) {
    // Calculate base salary
    employee.salary = employee.hoursWorked * employee.hourlyRate;
    if (employee.hoursWorked >= 20) {
        employee.salary *= 1.1;
    }
}
function displaySalaries(employees) {
    employees.forEach(function (employee) {
        calculateSalary(employee);
        console.log("Employee: ".concat(employee.name));
        console.log("Hours Worked: ".concat(employee.hoursWorked));
        console.log("Hourly Rate: $".concat(employee.hourlyRate));
        console.log("Salary: $".concat(employee.salary.toFixed(2)));
        console.log('---');
    });
}
displaySalaries(employees);
