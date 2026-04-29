function calculateTotalPriceJS(product, quantity, discount,)
{
    const priceWithoutDiscount = product.price * quantity;
    const discountAmount = priceWithoutDIscount * discount;
    return (priceWithoutDiscount + discountAmount);
}

