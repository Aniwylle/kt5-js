const today = new Date();
const dayOfWeek = today.getDay();
const isItFridayToday = (dayOfWeek) => {
    const friday = 5;
    const daysToFriday = (friday - dayOfWeek + 7) % 7; // Количество дней до пятницы
    if (dayOfWeek === friday) {
      return 'Сегодня пятница!';
    } else if (dayOfWeek === (friday + 1) % 7) {
      return 'Пятница была вчера';
    } else if (dayOfWeek === (friday - 1) % 7) {
      return 'Завтра пятница!';
    } else {
      return ('Пятница будет через ' + (daysToFriday - 1) +((daysToFriday - 1) == 1 ? ' день' : ' дня'));

    }
  };

  console.log(isItFridayToday(dayOfWeek));

module.exports = { isItFridayToday };