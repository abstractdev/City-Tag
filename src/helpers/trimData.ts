export function trimData(string: string) {
  if (!string) {
    return;
  }
  let arr: string[];
  if (string[0] === "0") {
    arr = string.split("");
    arr.splice(0, 1);
    string = arr.join("");
    return string;
  }
  return string;
}
