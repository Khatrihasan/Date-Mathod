var currentDate = new Date();
var minutesSinceEpoch = (currentDate.getTime() - currentDate.getTimezoneOffset() * 60 * 1000) / (60 * 1000);
alert("Minutes since midnight, Jan. 1, 1970: " + minutesSinceEpoch);