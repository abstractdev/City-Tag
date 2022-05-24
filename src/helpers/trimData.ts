export function trimData(string: string) {
  let arr: string[];
  let arr2: string[];
  if (!string) {
    return;
  }
  if (string[0] === "0") {
    arr = string.split("");
    arr.splice(0, 5);
    string = arr.join("");

    if (string[0] === "0") {
      arr2 = string.split("");
      arr2.splice(0, 1);
      string = arr2.join("");
    }
    return string;
  }
  return string;
}
