document.addEventListener('DOMContentLoaded', function() {
    const inputValues = document.getElementById('inputValues');
    const countButton = document.getElementById('countButton');
    const countResult = document.getElementById('count');
    countButton.addEventListener('click', function() {
      const values = inputValues.value.split(',').map(value => value.trim());
      const countTruthy = values.filter(value => !!value).length;
      countResult.textContent = countTruthy;
    });
  });