const TaxableIncome = require('../public/TaxableIncome.js');

it("test for Ontario and Federal Tax", ()=>{
    expect(TaxableIncome).toBeTruthy();
});

// 1st Ontario Tax Bracket: Taxable Income less than 40,922. 
it('test for OntarioTax on $23,000', ()=>{
    expect(TaxableIncome.ontarioTax(23000)).toBe(1161.5);
});

// 2nd Ontario Tax Bracket: Taxable Income more than 40,922 but less than 81,847. 
it('test for OntarioTax on $68,500', ()=>{
    expect(TaxableIncome.ontarioTax(68500)).toBe(4590.39);
});

// 3rd Ontario Tax Bracket: Taxable Income more than 81,847 but less than 150,000. 
it('test for OntarioTax on $101,500', ()=>{
  expect(TaxableIncome.ontarioTax(101500)).toBe(8004.27);
});

// 4th Ontario Tax Bracket: Taxable Income more than 150,000 but less than 220,000. 
it('test for OntarioTax on $188,500', ()=>{
  expect(TaxableIncome.ontarioTax(188500)).toBe(18098.6);
});

// 5th Ontario Tax Bracket: Taxable Income more than 220,000. 
it('test for OntarioTax on $588,500', ()=>{
  expect(TaxableIncome.ontarioTax(588500)).toBe(70423.6);
});


// 1st Federal Tax Bracket: Taxable Income less than 45,282. 
it('test for FederalTax on $18,500', ()=>{
    expect(TaxableIncome.federalTax(18500)).toBe(2775);
});

// 2nd Federal Tax Bracket: Taxable Income more than 45,282 but less than 90,563. 
it('test for FederalTax on $58,500', ()=>{
  expect(TaxableIncome.federalTax(58500)).toBe(9501.69);
});

// 3rd Federal Tax Bracket: Taxable Income more than 90,563 but less than 140,388. 
it('test for FederalTax on $101,500', ()=>{
  expect(TaxableIncome.federalTax(101500)).toBe(18918.62);
});

// 4th Federal Tax Bracket: Taxable Income more than 140,388 but less than 200,000. 
it('test for FederalTax on $158,500', ()=>{
  expect(TaxableIncome.federalTax(158500)).toBe(34281.48);
});

// 5th Federal Tax Bracket: Taxable Income more than 200,000. 
it('test for FederalTax on $888,500', ()=>{
  expect(TaxableIncome.federalTax(888500)).toBe(273522);
});

