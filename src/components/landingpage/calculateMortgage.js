export function  calculateMortgage(_loan, _year, _downPayment, _intrestRate){
    let r = _intrestRate / 100 / 12;
    let n = _year * 12;
    let loan = _loan * (1 - _downPayment);
    let mortgage = (loan * r  ) * ((1+r)**n) /(((1+r)**n)-1)

    return  parseInt(mortgage);
};