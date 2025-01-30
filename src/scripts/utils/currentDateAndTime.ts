const daysList: { [key: number]: string } = {
  0: 'Воскресенье',
  1: 'Понедельник',
  2: 'Вторник',
  3: 'Среда',
  4: 'Четверг',
  5: 'Пятница',
  6: 'Суббота',
};

const monthsList: { [key: number]: string } = {
  0: 'января',
  1: 'февраля',
  2: 'марта',
  3: 'апреля',
  4: 'мая',
  5: 'июня',
  6: 'июля',
  7: 'августа',
  8: 'сентября',
  9: 'октября',
  10: 'ноября',
  11: 'декабря',
};

function currentDateAndTime() {
  const newDate: Date = new Date();

  return {
    currentDate: newDate.getDate().toString(),
    currentMonthIndex: newDate.getMonth(),
    currentYear: newDate.getFullYear().toString(),
    currentDayIndex: newDate.getDay(),
  };
}

const currentDateAndTimeData: {
  currentDate: string;
  currentMonthIndex: number;
  currentYear: string;
  currentDayIndex: number;
} = currentDateAndTime();

export function createCurrentDateString(): string {
  const monthIndex: number = currentDateAndTimeData.currentMonthIndex;
  const dayIndex: number = currentDateAndTimeData.currentDayIndex;

  return `${currentDateAndTimeData.currentDate} ${monthsList[monthIndex]} ${currentDateAndTimeData.currentYear}, ${daysList[dayIndex]}`;
}
