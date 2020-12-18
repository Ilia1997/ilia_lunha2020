const getDate = () => {
  return new Date();
};
const getGreeting = () => {
  let d = new Date();
  let nowHour = d.getHours();
  if (nowHour >= 23 && nowHour < 5) {
    return "Good night, ";
  } else if (nowHour >= 5 && nowHour < 11) {
    return "Good morning, ";
  } else if (nowHour >= 11 && nowHour < 17) {
    return "Good afternoon, ";
  } else if (nowHour >= 17 && nowHour < 23) {
    return "Good evening, ";
  }
};

exports.getDate = getDate;
exports.getGreeting = getGreeting;
