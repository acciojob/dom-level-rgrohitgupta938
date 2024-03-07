//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  let ele = document.getElementById("level");
  let dom = 0;
  let curr = ele;
  while (curr.parentNode) {
    curr = curr.parentNode;
    dom++;
  }
  alert(`The level of the element is: ${dom}`);
});
