function countTruthy() {
    let valuesInput = document.getElementById("values");
    let values = valuesInput.value.split(",");
  
    let count = 0;
    values.forEach(function(value) {
      if (value.trim()) {
        count++;
      }
    });
  
    let result = document.getElementById("result");
    result.innerHTML = "The count of truthy values is: " + count;
  }