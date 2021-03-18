import {Dimensions} from 'react-native';

export const {width: windowWidth, height: windowHeight} = Dimensions.get(
  'window',
);

export function formatDate() {
  var newDate = new Date();

  var sMonth = padValue(newDate.getMonth() + 1);
  var sDay = padValue(newDate.getDate());
  var sYear = newDate.getFullYear();
  var sHour = newDate.getHours();
  var sMinute = padValue(newDate.getMinutes());
  var sAMPM = 'AM';

  var iHourCheck = parseInt(sHour);

  if (iHourCheck > 12) {
    sAMPM = 'PM';
    sHour = iHourCheck - 12;
  } else if (iHourCheck === 0) {
    sHour = '12';
  }

  sHour = padValue(sHour);

  return (
    sDay +
    ' ' +
    getCurrentMonth(sMonth) +
    ' ' +
    sYear +
    ' | ' +
    sHour +
    ':' +
    sMinute +
    ' ' +
    sAMPM
  );
}

function getCurrentMonth(month) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return months[month - 1];
}

function padValue(value) {
  return value < 10 ? '0' + value : value;
}
