const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#btn-check");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availaibleNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    message.style.display = "none";
    if (billAmount.value > 0) {

        if (cashGiven.value >= billAmount.value) {
            const amountReturn = cashGiven.value - billAmount.value;
            calculateChange(amountReturn);

        } else {
            showMessage("cash given value should be greater than or equal to bill amount");
        }

    } else {
        showMessage("bill amount value should be greater than 0");

    }
});

    function calculateChange(amountReturn) {
        for (let i = 0; i < availaibleNotes.length; i++) {
            const numberOfNotes = Math.trunc(amountReturn / availaibleNotes[i]);
            amountReturn %= availaibleNotes[i];
            noOfNotes[i].innerText = numberOfNotes;
        }

    }

    function showMessage(msg) {
        message.style.display = "block";
        message.innerText = msg;

    }
