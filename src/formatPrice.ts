const formatPrice = (amount: number): string => {
  amount ??= 0;
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount);
};

export default formatPrice;
