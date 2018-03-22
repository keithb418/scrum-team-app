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