import { formatPrice } from "./index";

describe("formatPrice", () => {
  it("should format a positive amount correctly", () => {
    expect(formatPrice(1000)).toBe("₦1,000.00");
  });

  it("should format a negative amount correctly", () => {
    expect(formatPrice(-500)).toBe("-₦500.00");
  });

  it("should format zero amount correctly", () => {
    expect(formatPrice(0)).toBe("₦0.00");
  });

  it("should handle null amount and format it as 0", () => {
    expect(formatPrice(null)).toBe("₦0.00");
  });

  it("should handle undefined amount and format it as 0", () => {
    expect(formatPrice(undefined)).toBe("₦0.00");
  });

  it("should handle large amounts and format them correctly", () => {
    expect(formatPrice(1234567890)).toBe("₦1,234,567,890.00");
  });
});
