function calculateTotalPrice(
    product: {name: string, unitPrice: number},
    quantity: number,
     discount: number): number
{
    const priceWithoutDiscount = product.unitPrice * quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return (priceWithoutDiscount + discountAmount);
}

const total: number = calculateTotalPrice({name: "Soccer Ball", unitPrice: 12.99}, 10, 0.2);
console.log(total);

function getTotal(
    unitPrice: number,
    quantity: number,
     discount: number): number
{
    const priceWithoutDiscount = unitPrice * quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return (priceWithoutDiscount - discountAmount);
}

let total2: number = getTotal(500, 1, 0.1);
