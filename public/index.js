import Framework7 from 'framework7/framework7-bundle'
const TaxableIncome = require("./TaxableIncome.js"); 

// If your using custom DOM library, then save it to $$ variable
const $$ = Dom7;

// Init F7
const app = new Framework7();

// Add the view
app.view.create('#app', {

  // enable the dynamic navbar for this view:
  dynamicNavbar: true
});

$$("#adding").on("submit", evt=>{
  evt.preventDefault();
  const oData = app.form.convertToData("#adding")
  //alert("adding: " + oData.amount);
  let nIncome = 0;
  nIncome = Number(oData.incometax);
  let nOntarioTax = TaxableIncome.ontarioTax(nIncome);
  $$("#ontax").html(nOntarioTax.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  let nFederalTax = TaxableIncome.federalTax(nIncome);
  $$("#fedtax").html(nFederalTax.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  let nTotal = nOntarioTax + nFederalTax;
  $$("#total").html(nTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  let nTaxDeducted = 0;
  nTaxDeducted = Number(oData.taxdeduction);
  let nOwing = 0;
  nOwing = nTotal - nTaxDeducted;
  $$("#owing").html(nOwing.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
});