window.onload = function () {
  const printBtn = document.querySelector("header button");
  printBtn.addEventListener("click", function () {
    printArea("print_area");
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
