//create director and teacher interface and create function createEmployee

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string; 
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

export function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  return new Director(); 
}

//console.log(createEmployee('Sam', 'Silva', 200));
//console.log(createEmployee('James', 'Dunkin', 1000));
//console.log(createEmployee('Gary', 'Zale', '$500'));

//create function isDirector and executeWork
export function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
  return employee.workFromHome() === 'Working from home';
}

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
  return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}

//console.log(executeWork(createEmployee('Sam', 'Silva', 200)));
//console.log(executeWork(createEmployee('James', 'Dunkin', 1000)));

//string literal named Subjects variable have the value Math or History
type Subjects = 'Math' | 'History';
export function teachClass(todayClass: Subjects): string {
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}

//console.log(teachClass('Math'));
//console.log(teachClass('History'));
