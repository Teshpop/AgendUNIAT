const monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let date = new Date();

let year = date.getFullYear();

let monthNumber = date.getMonth();

let monthName = monthNames[monthNumber];

let nextMonth = monthName[monthNumber + 1];

let dayLength = new Date(year, monthNumber + 1, 0).getDate();

let days = [];

for (let i = 1; i <= dayLength; i++) {
  days.push(i);
}

export { monthName, nextMonth, days };
