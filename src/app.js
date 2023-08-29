window.onload = () => {
  // Write your code here
  document.querySelector("#the-excuse").innerHTML = generateAllDomains();
};
let generateAllDomains = () => {
  let who = ["you", "the", "our", "those"];
  let action = ["big", "little", "wild", "lucky"];
  let what = ["beach", "music", "city"];
  let when = [".com", ".net", ".us"];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] + action[actionIndex] + what[whatIndex] + when[whenIndex]
  );
};
