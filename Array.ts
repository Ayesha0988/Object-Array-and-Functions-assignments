//Part 01: Basic Array- Product Inventory 
//          =========
//you are task with creating a product inventary system.Impiement functions 
//and logic to manage object manipulation effectively.
type Product = {
    name: string; // The product's name
    price: number; // How much it costs
    inventory: {
        stock: number; // How many items are available
    };
    colorOptions: string[]; // Available colors
};
const products: Product[] = [
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
function changeColor(product: Product, newColor: string): void {
    if (product.colorOptions.indexOf
    (newColor)) {
        if (newColor === "red") {
            product.price *= 1.1; 
        } else if (newColor === "blue") {
            product.price *= 0.95; 
        }
        console.log(`Changed color to ${newColor}. New price is ${product.price}`);
    } else {
        console.log(`${newColor} is not available for ${product.name}`);
    }
}products.forEach(product => {
    console.log(`Name: ${product.name}, Price: $${product.price}, Stock: ${product.inventory.stock}, Colors: ${product.colorOptions.join(", ")}`);
});

//Part 02: Muiti-Dimensional Array and Tuples Student-Grades
//              ====================
//You are tasked with creating a student grading system.Implement functions
//and logic to manage student grades effectively.

type Student = {
    name: string; // The student's name
    grades: number[]; // Array of grades
};
const students: Student[] = [
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
function calculateAverageGrade(grades: number[]): number {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
}
students.forEach(student => {
    const averageGrade = calculateAverageGrade(student.grades);
    console.log(`Name: ${student.name}, Average Grade: ${averageGrade}`);
});

//Part 03: Array with Types and indexing-Employee Salaries
//            ================
//yor are managing employee salaries for a company.Implement logic to
//calculate salaries and handle bonuses.



type Employee = {
    name: string;
    hoursWorked: number;
    hourlyRate: number;
    salary: number;
};
const employees: Employee[] = [
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
function calculateSalary(employee: Employee): void {
    // Calculate base salary
    employee.salary = employee.hoursWorked * employee.hourlyRate;
    if (employee.hoursWorked >= 20) {
        employee.salary *= 1.1;
    }
}
function displaySalaries(employees: Employee[]): void {
    employees.forEach(employee => {
        calculateSalary(employee);
        console.log(`Employee: ${employee.name}`);
        console.log(`Hours Worked: ${employee.hoursWorked}`);
        console.log(`Hourly Rate: $${employee.hourlyRate}`);
        console.log(`Salary: $${employee.salary.toFixed(2)}`);
        console.log('---');
    });
}
displaySalaries(employees);
