const depositInput = document.getElementById("deposit-input");
const depositedAmount = document.getElementById("deposited-amount");
const balanceAmount = document.getElementById("balance-amount");
const withdrawInput = document.getElementById("withdraw-input");
const withdrawedAmount = document.getElementById("withdrawed-amount");

depositInput.defaultValue = 0;
withdrawInput.defaultValue = 0;

//*deposited code
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //*anonymous function
    const newDepositAmount = depositInput.value;
    if (newDepositAmount > 0) {
      depositedAmount.innerText = newDepositAmount;
      balanceAmount.innerText =
        parseInt(balanceAmount.innerText) + parseInt(newDepositAmount);
      depositInput.value = 0;
      document.getElementById("deposit-error-container").innerText = "";
    } else {
      document.getElementById("deposit-error-container").innerText =
        "Please enter a valid Input";
    }
    document.getElementById("withdraw-error-container").innerText = "";
  });

//*withdraw code
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    //*anonymous function
    const newWithdrawAmount = parseInt(withdrawInput.value);
    if (newWithdrawAmount > 0) {

      if (newWithdrawAmount <= parseInt(balanceAmount.innerText)) {
        withdrawedAmount.innerText = newWithdrawAmount;

        balanceAmount.innerText =
          parseInt(balanceAmount.innerText) - newWithdrawAmount;
          document.getElementById("withdraw-error-container").innerText = "";
      }
      else{
      document.getElementById("withdraw-error-container").innerText =
        "You dont have sufficient balance";
      }

      withdrawInput.value = 0;
    
    } else {
      document.getElementById("withdraw-error-container").innerText =
        "Please enter a valid Input";
    }
    document.getElementById("deposit-error-container").innerText = "";
  });
