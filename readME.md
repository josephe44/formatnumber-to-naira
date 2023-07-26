# format-number-to-naira

[![npm version](https://badge.fury.io/js/my-npm-package.svg)](https://badge.fury.io/js/my-npm-package)

## Description

format-number-to-naira is an utility function that formats a given number into Nigeria's currency (NGN) format.

## Installation

You can install the package using npm. Make sure you have Node.js and npm installed.

```bash
npm install formatnumber-to-naira
```

## Usage

```javaScript
import formatPrice from 'formatnumber-to-naira';

const price = 1234567.89;
const formattedPrice = formatPrice(price);
console.log(formattedPrice); // Output: "₦1,234,567.89"
```
