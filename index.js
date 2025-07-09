document.getElementById("mortgageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const amount = parseFloat(document.getElementById("amount").value);
  const term = parseInt(document.getElementById("term").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const type = document.querySelector('input[name="type"]:checked').value;

  const resultText = document.getElementById("resultText");

  if (!amount || !term || !rate) {
    resultText.innerText = "Please fill in all fields.";
    return;
  }

  const monthlyRate = rate / 100 / 12;
  const totalPayments = term * 12;

  let monthlyPayment;

  if (type === "repayment") {
    // Fórmula de amortización
    monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalPayments));
  } else {
    // Solo interés
    monthlyPayment = amount * monthlyRate;
  }

  resultText.innerText = `Your monthly payment would be £${monthlyPayment.toFixed(2)}.`;
});

function clearAll() {
  document.getElementById("mortgageForm").reset();
  document.getElementById("resultText").innerText =
    'Complete the form and click “calculate repayments” to see what your monthly repayments would be.';
}