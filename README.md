# expected-condition-playwright

> expected-condition-playwright is a Node.js library for [Playwright](https://github.com/microsoft/playwright) that supplies a set of common conditions that provides functionalities to wait for certain conditions till a defined task is complete.

## Table of Contents

- [expected-condition-playwright](#expected-condition-playwright)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Import and usage](#import-and-usage)
  - [Types of Expected Conditions](#types-of-expected-conditions)
    - [attributeValueToBe](#attributevaluetobe)
    - [attributeValueContains](#attributevaluecontains)
    - [attributeToBeNotEmpty](#attributetobenotempty)
    - [numberOfElementsToBe](#numberofelementstobe)
    - [invisibilityOf](#invisibilityof)
    - [textToBePresentInElement](#texttobepresentinelement)
    - [textToBePresentInElementValue](#texttobepresentinelementvalue)
    - [elementToBeClickable](#elementtobeclickable)
    - [elementToBeSelected](#elementtobeselected)
    - [titleEquals](#titleequals)
    - [titleContains](#titlecontains)
    - [urlEquals](#urlequals)
    - [urlContains](#urlcontains)
  - [License](#license)

## Getting Started

### Installation

To use expected-condition-playwright in your project, run:

```bash
npm i -D expected-condition-playwright
```

### Import and usage

**_TypeScript_**

```ts
// Import ExpectedCondition class as EC shortcut
import { ExpectedCondition as EC } from 'expected-condition-playwright';

// Simple selector
const submitButton = 'button';

// Use page's waitForFunction method to provide the elementToBeClickable method to instruct a command to wait until the element is clickable by the selector
await page.waitForFunction(EC.elementToBeClickable(submitButton), submitButton, { timeout: 5000 });
```

**_JavaScript_**

```ts
// Require ExpectedCondition class as EC shortcut
const { ExpectedCondition: EC } = require('expected-condition-playwright');

// Simple selector
const submitButton = 'button';

// Use page's waitForFunction method to provide the elementToBeClickable method to instruct a command to wait until the element is clickable by the selector
await page.waitForFunction(EC.elementToBeClickable(submitButton), submitButton, { timeout: 5000 });
```

## Types of Expected Conditions

### attributeValueToBe

An expectation for checking element with given selector has attribute with a specific value

**_Usage_**

```ts
const inputSelector = 'input[type=q]';
const expectedAttribute = 'type';
const expectedValue = 'q';

await page.waitForFunction(
  EC.attributeValueToBe([inputSelector, expectedAttribute, expectedValue]),
  [inputSelector, expectedAttribute, expectedValue],
  { timeout: 5000 },
);
```

### attributeValueContains

An expectation for checking element with given selector has attribute which contains a specific value

**_Usage_**

```ts
const inputSelector = 'input[type=que]';
const expectedAttribute = 'type';
const expectedValue = 'q';

await page.waitForFunction(
  EC.attributeValueContains([inputSelector, expectedAttribute, expectedValue]),
  [inputSelector, expectedAttribute, expectedValue],
  { timeout: 5000 },
);
```

### attributeToBeNotEmpty

An expectation for checking element with given selector any non empty value for given attribute

**_Usage_**

```ts
const inputSelector = 'input[type=que]';
const expectedAttribute = 'type';

await page.waitForFunction(
  EC.attributeValueContains([inputSelector, expectedAttribute]),
  [inputSelector, expectedAttribute],
  { timeout: 5000 },
);
```

### numberOfElementsToBe

An expectation for checking number of elements with given selector

**_Usage_**

```ts
const links = 'a';
const expectedNumber = '12';

await page.waitForFunction(EC.numberOfElementsToBe([links, expectedNumber]), [links, expectedNumber], {
  timeout: 5000,
});
```

### invisibilityOf

An expectation for checking the element to be invisible

**_Usage_**

```ts
const link = 'a';

await page.waitForFunction(EC.invisibilityOf(link), links, { timeout: 5000 });
```

### textToBePresentInElement

An expectation for checking if the given text is present in the specified element.

**_Usage_**

```ts
const logInButton = 'button';
const expectedText = 'Log in';

await page.waitForFunction(EC.textToBePresentInElement([logInButton, expectedText]), [logInButton, expectedText], {
  timeout: 5000,
});
```

### textToBePresentInElementValue

An expectation for checking if the given text is present in the specified elements value attribute.

**_Usage_**

```ts
const userField = 'input';
const expectedValue = 'John';

await page.waitForFunction(EC.textToBePresentInElementValue([userField, expectedValue]), [userField, expectedValue], {
  timeout: 5000,
});
```

### elementToBeClickable

An expectation for checking the element is visible and enabled such that you can click it.

**_Usage_**

```ts
const nextButton = 'button';

await page.waitForFunction(EC.elementToBeClickable(nextButton), nextButton, { timeout: 5000 });
```

### elementToBeSelected

An expectation for checking the element is visible and enabled such that you can click it.

**_Usage_**

```ts
const checkbox = 'input';

await page.waitForFunction(EC.elementToBeSelected(checkbox), checkbox, { timeout: 5000 });
```

### titleEquals

An expectation for checking the title of a page.

**_Usage_**

```ts
const expectedTitle = 'Playwright';

await page.waitForFunction(EC.titleEquals(expectedTitle), expectedTitle, { timeout: 5000 });
```

### titleContains

An expectation for checking that the title contains a case-sensitive substring

**_Usage_**

```ts
const expectedTitle = 'Play';

await page.waitForFunction(EC.titleContains(expectedTitle), expectedTitle, { timeout: 5000 });
```

### urlEquals

An expectation for the URL of the current page to be a specific url.

**_Usage_**

```ts
const expectedUrl = 'http://github.com/';

await page.waitForFunction(EC.urlEquals(expectedUrl), expectedUrl, { timeout: 5000 });
```

### urlContains

An expectation for the URL of the current page to contain specific text.

**_Usage_**

```ts
const expectedUrl = '.com';

await page.waitForFunction(EC.urlContains(expectedUrl), expectedUrl, { timeout: 5000 });
```

## License

expected-condition-playwright is [MIT licensed](./LICENSE).
