let operators = ["+", "*", "/"];
let num = [];
let operator = [];
let decimal = false;

function dispalyValue(number) {
   document.getElementById("show").value += number;
   if (decimal == true && number == ".") {
      return;
   }
   if (
      document.getElementById("display").value == "" ||
      document.getElementById("display").value == 0
   ) {
      if (number == 0 || operators.includes(number)) {
         return;
      } else {
         document.getElementById("display").value = number;
      }
   } else {
      if (number == "-" || operators.includes(number)) {
         num.push(document.getElementById("display").value);
         console.log(num);
         operator.push(number);
         console.log(operator);

         document.getElementById("display").value = "";
         decimal = false;
      } else {
         if (number == ".") decimal = true;

         document.getElementById("display").value += number;
      }
   }
}
function del() {
   pp = document.getElementById("display").value;
   document.getElementById("display").value = pp.substring(0, pp.length - 1);
   document.getElementById("show").value = pp.substring(0, pp.length - 1);
}

function clearValue() {
   document.getElementById("display").value = "";
   document.getElementById("show").value = "";
}

function calculator() {
   num.push(document.getElementById("display").value);
   console.log(num);
   for (i = 0, j = 0; i < num.length - 1, j < operators.length; i++, j++) {
      switch (operator[j]) {
         case "+":
            num[i + 1] = parseFloat(num[i]) + parseFloat(num[i + 1]);
            document.getElementById("display").value = num[i + 1];

            break;
         case "*":
            num[i + 1] = parseFloat(num[i]) * parseFloat(num[i + 1]);
            document.getElementById("display").value = num[i + 1];

            break;
         case "/":
            num[i + 1] = parseFloat(num[i]) / parseFloat(num[i + 1]);
            document.getElementById("display").value = num[i + 1];

            break;
         case "-":
            num[i + 1] = parseFloat(num[i]) - parseFloat(num[i + 1]);
            document.getElementById("display").value = num[i + 1];

            break;

         default:
            break;
      }
   }
}
function dispalySq() {
   let num2 = document.getElementById("display").value;

   sq = num2 * num2;
   document.getElementById("display").value = sq;
}
function dispalySr() {
   let num3 = document.getElementById("display").value;

   sr = Math.sqrt(num3);
   document.getElementById("display").value = sr;
}
