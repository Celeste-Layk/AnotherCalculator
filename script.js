//Required compnents of calculator
//accept user inputs, operator and anoher number
//store inputs
//recognize inputs and preform calculations
//return result
//should accept decimals

//optional features
// accept longer arithemtic operations
// display input as it is being entered
//store previous total as start of next operation
//clear button should clear all enteries
//should prevent invalid inputs(operators next to each other)
//fix negative
const keys = document.querySelector(".calculatorButtons");
keys.addEventListener("click", e => {
  const { target } = e;
  const { value } = target;
  if (!target.matches("button")) {
    return;
  } else {
    calculator.parseInput(value);
    // console.log(value);
  }
});
const calculator = {
  displayText: "0",
  prevTotal: null,

  parseInput(value) {
    //check to see if any of the special bttons have been clicked
    switch (value) {
      case "=":
        this.calcAnswer(this.displayText);
        break;
      case "AC":
        this.clearAll();
        break;
      case ".":
        if (this.displayText == 0) {
          this.addText("0.");
        } else {
          this.addText(value);
        }
        break;
      default:
        this.addText(value);
        break;
    }
  },

  addText(value) {
    if (this.displayText === "0") {
      this.displayText = "";
    } else if (this.prevTotal !== null) {
      this.displayText = this.prevTotal;
      this.prevTotal = null;
    }
    if (isNaN(+value) && isNaN(+this.displayText)) {
      if (isNaN(this.displayText.slice(-1))) {
        return;
      }
    }
    this.displayText += value;
    this.outputText(this.displayText);
  },
  outputText(text) {
    document.querySelector(".calculatorScreen").value = text;
  },

  calcAnswer(equation) {
    let result = Function("return " + equation)();
    this.outputText(result);
  },
  clearAll() {
    this.displayText = "0";
    this.prevTotal = null;
    this.outputText(this.displayText);
  },
};
