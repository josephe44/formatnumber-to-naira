export const formatPrice = (amount: number | null | undefined): string => {
  amount ??= 0;
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount);
};
