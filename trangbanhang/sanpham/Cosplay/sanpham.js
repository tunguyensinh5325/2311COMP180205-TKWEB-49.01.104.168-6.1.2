let number = 1;

    function updateNumber(operation) {
      if (operation === 'add') {
        number += 1;
      } else if (operation === 'subtract' && number > 1) {
        number -= 1;
      }

      document.getElementById('number').innerText = number;
    }