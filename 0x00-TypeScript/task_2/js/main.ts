//create director and teacher interface and create function createEmployee

interface DirectorsInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string; 
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorsInterface {
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

class Teacher implements TeacherInterface {
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

function createEmployee(firstName: string, lastName: string, salary: number | string): Director | Teacher {
  if (salary as number && salary < 500) return new Teacher();
  else return new Director(); 
}

console.log(createEmployee('Sam', 'Silva', 200));
console.log(createEmployee('James', 'Dunkin', 1000));
console.log(createEmployee('Gary', 'Zale', '$500'));
