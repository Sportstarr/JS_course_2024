  // Отримання поточної дати
let currentDate = new Date();

  // Масив з назвами днів тижня
let days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];

  // Числове представлення дня тижня
let dayOfWeek = currentDate.getDay();

  // Визначення поточного дня тижня
let currentDay = days[dayOfWeek];
  // Виведення результату
alert("Сьогодні: " + currentDay);