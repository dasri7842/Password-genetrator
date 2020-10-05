const generateit = document.getElementById("generate-button");
const len = document.getElementById("Length");
const low = document.getElementById("Lower");
const up = document.getElementById("Upper");
const num = document.getElementById("Number");
const spl = document.getElementById("Symbol");
const result = document.getElementById("result");
const clip = document.getElementById("clipboard");

// password creater.
generateit.addEventListener("click", () => {
  var cnt = len.value,
    password = "",
    array = [],
    tot = 0;
  cnt %= 17;
  if (low.checked) (password += GetLower()), cnt--, tot++, array.push(0);
  if (up.checked) (password += GetUpper()), cnt--, tot++, array.push(1);
  if (num.checked) (password += GetNumber()), cnt--, tot++, array.push(2);
  if (spl.checked) (password += GetSymbol()), cnt--, tot++, array.push(3);
  while (cnt-- > 0 && tot)
    password += GetRandom(array[Math.floor(Math.random() * array.length)]);
  result.innerHTML = password;
});

// copying to clipboard
clip.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  if (!result.innerHTML) alert("Empty Password!");
  else {
    textarea.value = result.innerHTML;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password is Copied to Clipboard!");
  }
});
// random functions
GetLower = () => String.fromCharCode(Math.floor(Math.random() * 26 + 97));
GetUpper = () => String.fromCharCode(Math.floor(Math.random() * 26 + 65));
GetNumber = () => String.fromCharCode(Math.floor(Math.random() * 10 + 48));
GetSymbol = () => {
  const symba = "!@#$%^&*><?/|,.+=-_{}()[];:`~";
  return symba[Math.floor(Math.random() * symba.length)];
};
GetRandom = (index) => {
  if (index == 0) return GetLower();
  if (index == 1) return GetUpper();
  if (index == 2) return GetNumber();
  if (index == 3) return GetSymbol();
};
