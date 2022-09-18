export function  calculateDsr(_purchasePrice, _downPayment, _commitment, _income){
    let dp_price = _purchasePrice - _downPayment;
    let top_value = dp_price * (5 / 100 / 12);
    let base_value = 1 + (5 / 100 / 12);
    let exponent_value = (-1 * 35 * 12);
    let bottom_value = 1 - (base_value ** exponent_value);
    let installment = top_value / bottom_value;
    let dsr = ((_commitment + installment) / _income) * 100;
    return Math.round(dsr * 100) / 100;
};