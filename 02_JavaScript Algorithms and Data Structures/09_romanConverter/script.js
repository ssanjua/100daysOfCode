document.getElementById("convert-btn").addEventListener("click", function() {
    const number = parseInt(document.getElementById("number").value);

    // Check if the input is empty
    if (!number) {
      document.getElementById("output").textContent = "Please enter a valid number";
      return;
    }

    // Check if the input is less than 1
    if (number === -1) {
      document.getElementById("output").textContent = "Please enter a number greater than or equal to 1";
      return;
    }

    // Check if the input is greater than or equal to 4000
    if (number >= 4000) {
      document.getElementById("output").textContent = "Please enter a number less than or equal to 3999";
      return;
    }

    // Function to convert Arabic number to Roman numeral
    function convertToRoman(num) {
      const romanNumerals = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
      ];

      let result = "";

      for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i][1]) {
          result += romanNumerals[i][0];
          num -= romanNumerals[i][1];
        }
      }

      return result;
    }

    // Convert the number and display the result
    document.getElementById("output").textContent = convertToRoman(number);
  });