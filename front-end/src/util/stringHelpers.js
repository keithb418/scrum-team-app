export function capitalizeFirstLetter (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function truncateString (str, length) {
  if (str.length >= 20 ) {
    return str.substring(0, length) + "...";
  } else {
    return str;
  }
}

export function addHyphen (str) {
  str = str.replace(/\s+/g, '-')
  return str
}

// source: http://emailregex.com/
export function isEmailValid (str) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str);
}