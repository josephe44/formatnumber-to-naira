# formatnumber-to-naira

[![npm version](https://badge.fury.io/js/my-npm-package.svg)](https://www.npmjs.com/package/formatnumber-to-naira)

## Description

formatnumber-to-naira is a utility that formats a given number into Nigeria's currency (NGN) format.

## Installation

You can install the package using npm. Make sure you have Node.js and npm installed.

```bash
npm install formatnumber-to-naira
```

## Usage

### New way

- from version 2.0.0

```javaScript

import { formatPrice } from 'formatnumber-to-naira';

const price = 1234567.89;
const formattedPrice = formatPrice(price);
console.log(formattedPrice); // Output: "₦1,234,567.89"
```

### Old way

- from version 1.0.0 to 1.0.7

```javaScript
import formatPrice from 'formatnumber-to-naira';

const price = 1234567.89;
const formattedPrice = formatPrice(price);
console.log(formattedPrice); // Output: "₦1,234,567.89"
```
