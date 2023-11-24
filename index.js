(function() {
  // Getting the references to the required elements
  const convertButton = document.getElementById('convertButton');
  const resultElement = document.getElementById('result');
  const inputElement = document.getElementById('input');

  // Attach event listener to the convert button
  convertButton.addEventListener('click', handleClick);

  // Function to handle the button click event
  function handleClick() {
      const inputValue = inputElement.value;
      const truthyCount = countTruthy(inputValue);
      displayResult(truthyCount);
  }

  // Function to count the truthy values
  function countTruthy(value) {
      let count = 0;

      // Check if the value is truthy
      if (value) {
          if (typeof value === 'string') {
              count = 1;
          } else if (typeof value === 'object') {
              for (const key in value) {
                  if (value[key]) {
                      count++;
                  }
              }
          } else {
              count = 1;
          }
      }

      return count;
  }

  // Function to display the result
  function displayResult(count) {
      const resultText = 'Truthy count: ' + formatCount(count);
      resultElement.textContent = resultText;
  }

  // Function to format the count with leading zeros if necessary
  function formatCount(count) {
      if (count < 10) {
          return '0' + count;
      } else {
          return count.toString();
      }
  }
})();