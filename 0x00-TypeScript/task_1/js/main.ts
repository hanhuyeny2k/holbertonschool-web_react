// Teacher interface

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [propName: string]: any;
}


// Creating a teacher and a director
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);

// Directors interface
interface Directors extends Teacher {
  numberOfReports: number;
}


const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

//Printing teachers
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// returns the first letter of the firstName and the full lastName
export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string = {
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher('John', 'Doe'));

//Task 4
interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}
export const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return this.firstName;
  }
}
