const talkingCalendar = function (date) {
  const month = [
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
    'December'
  ];
  let splitedData = date.split("/");
  let mm = month[splitedData[1] - 1];
  let dd = '';
  let yy = splitedData[0];

  if(splitedData[2].charAt(0)==='0'){
    splitedData[2]=splitedData[2].substring(1);
  }

  if (splitedData[2] === '1' || splitedData[2] === '21' || splitedData[2] === '31') {
    dd = splitedData[2] + 'st';
  } else if (splitedData[2] === '2' || splitedData[2] === '22') {
    dd = splitedData[2] + 'nd';
  } else if (splitedData[2] === '3' || splitedData[2] === '23') {
    dd = splitedData[2] + 'rd';
  } else {
    dd = splitedData[2] + 'th';
  }
  return mm+' '+dd+', '+yy;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));