import { Page } from 'playwright-core';

export class ExpectedCondition {
  constructor(public page: Page) {}

  public attributeValueToBe(_args: string[]) {
    return (args: string[]) => {
      const [selector, expectedAttribute, expectedValue] = args;
      const element: HTMLElement | null = document.querySelector(selector);

      if (element && element.getAttribute(expectedAttribute)) {
        return element.getAttribute(expectedAttribute) === expectedValue;
      } else {
        return false;
      }
    };
  }

  public attributeValueContains(_args: string[]) {
    return (args: string[]) => {
      const [selector, expectedAttribute, expectedValue] = args;
      const element: HTMLElement | null = document.querySelector(selector);

      if (element && element.getAttribute(expectedAttribute)) {
        return element.getAttribute(expectedAttribute)!.includes(expectedValue);
      } else {
        return false;
      }
    };
  }

  public attributeToBeNotEmpty(_args: string[]) {
    return (args: string[]) => {
      const [selector, expectedAttribute] = args;
      const element: HTMLElement | null = document.querySelector(selector);

      return element && element.hasAttribute(expectedAttribute);
    };
  }

  public numberOfElementsToBe(_args: string[]) {
    return (args: string[]) => {
      const [selector, expectedNumber] = args;
      const elements: NodeList = document.querySelectorAll(selector);

      return elements.length === +expectedNumber;
    };
  }

  public invisibilityOf(_selector: string) {
    return (selector: string) => {
      const element: HTMLInputElement | HTMLElement | null = document.querySelector(selector);

      return !element;
    };
  }

  public textToBePresentInElement(_args: string[]) {
    return (args: string[]) => {
      const [selector, expectedText] = args;
      const element: HTMLElement | null = document.querySelector(selector);

      if (element && element.textContent) {
        return element.textContent.trim().includes(expectedText);
      } else {
        return false;
      }
    };
  }

  public textToBePresentInElementValue(_args: string[]) {
    return (args: string[]): boolean => {
      const [selector, expectedValue] = args;
      const element: HTMLInputElement | null = document.querySelector(selector);

      if (element && element.value) {
        return element.value.includes(expectedValue);
      } else {
        return false;
      }
    };
  }

  public elementToBeClickable(_selector: string) {
    return (selector: string) => {
      const element: HTMLInputElement | null = document.querySelector(selector);

      return element && !element.disabled;
    };
  }

  public elementToBeSelected(_selector: string) {
    return (selector: string) => {
      const element: HTMLInputElement | null = document.querySelector(selector);

      return element && element.checked;
    };
  }

  public titleEquals(_expectedTitle: string) {
    return (expectedTitle: string) => document.title === expectedTitle;
  }

  public titleContains(_expectedTitle: string) {
    return (expectedTitle: string) => document.title.includes(expectedTitle);
  }

  public urlEquals(_expectedUrl: string) {
    return (expectedUrl: string) => window.location.href === expectedUrl;
  }

  public urlContains(_expectedUrl: string) {
    return (expectedUrl: string) => window.location.href.includes(expectedUrl);
  }
}
