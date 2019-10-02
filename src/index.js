module.exports = function check(str, bracketsConfig) {
  let open_brackets = [];
  let last_open_bracket = null;
  let length = str.length;

  let is_opening = function (checked_item) {
    /*check bracket from str is opening or not*/
    for (var i = 0; i < bracketsConfig.length; i++) {
      if (checked_item === bracketsConfig[i][0]) {
        return true;
      }
    }
    return false;
  }

  let is_closing = function (checked_item) {
    /*check bracket from str is closing or not*/
    if (last_open_bracket !== null) {
      for (var i = 0; i < bracketsConfig.length; i++) {
        if (last_open_bracket === bracketsConfig[i][0] && checked_item === bracketsConfig[i][1]) {
          return true;
        }
      }
    }
    return false;
  }

  for (i = 0; i < length; i++) {

    let checked_item = str[i];

    if (i > 0 && is_closing(checked_item)) {
      open_brackets.pop();
      last_open_bracket = open_brackets[open_brackets.length - 1];
      continue;
    }

    if (is_opening(checked_item)) {
      open_brackets.push(checked_item);
      last_open_bracket = checked_item;
      continue;
    }

    //if checked_item is not opening and not closing, we can finish
    return false;
  }

  if (open_brackets.length === 0) {
    return true;
  }

  return false;
}
