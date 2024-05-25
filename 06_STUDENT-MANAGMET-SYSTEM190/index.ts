
import inquirer from "inquirer";

// Initialize an array to store student data
const students: { name: string; rollNumber: string }[] = [];

// Define the main function
async function main() {
    while (true) {
        const { choice } = await inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Choose an operation:',
                choices: ['Add Student', 'View Students', 'Exit'],
            },
        ]);

        switch (choice) {
            case 'Add Student':
                await addStudent();
                break;
            case 'View Students':
                viewStudents();
                break;
            case 'Exit':
                console.log('Thank you for using the Student Management System!');
                process.exit(0);
        }
    }
}

// Function to add a student
async function addStudent() {
    const { name, rollNumber } = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter student name:',
        },
        {
            type: 'input',
            name: 'rollNumber',
            message: 'Enter student roll number:',
        },
    ]);

    students.push({ name, rollNumber });
    console.log(`Student ${name} with roll number ${rollNumber} added successfully.`);
}

// Function to view all students
function viewStudents() {
    console.log('List of students:');
    students.forEach((student, index) => {
        console.log(`${index + 1}. Name: ${student.name}, Roll Number: ${student.rollNumber}`);
    });
}

// Start the program
main();
