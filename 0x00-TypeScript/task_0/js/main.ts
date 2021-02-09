interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const studentX: Student = {
	firstName: 'Mellisa',
	lastName: 'Johnson',
	age: 38,
	location: 'California'
}

const studentY: Student = {
	firstName: 'Misty',
	lastName: 'Lane',
	age: 39,
	location: 'Panama',
}

const studentList = [studentX, studentY];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach((obj) => {
  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellLocation = document.createElement('td');
  cellName.textContent = obj.firstName;
  cellLocation.textContent = obj.location;
  row.appendChild(cellName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
