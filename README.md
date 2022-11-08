## Print a specific content of body


## How to use print functaion?

```window.onload = function () {
  // 1. buttonNameSelectAsCssHere
  // 2. printAreaIdNameHere

  const printBtn = document.querySelector("buttonNameAsCssHere");
  printBtn.addEventListener("click", function () {
    printArea("printAreaIdNameHere");
	window.location.reload();
  });

  function printArea(areaId) {
    var printContents = document.getElementById(areaId).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }
};

```




**Step 1:**

![step_one](/assets/help/1.png)

**Step 2:**

![step_two](/assets/help/2.png)

**Step 3:**

![step_three](/assets/help/3.png)