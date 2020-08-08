export class ExpectedCondition {
  public static attributeValueToBe([_selector, _expectedAttribute, _expectedValue]: [string, string, string]) {
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

  public static attributeValueContains([_selector, _expectedAttribute, _expectedValue]: [string, string, string]) {
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

  public static attributeToBeNotEmpty([_selector, _expectedAttribute]: [string, string]) {
    return (args: string[]) => {
      const [selector, expectedAttribute] = args;
      const element: HTMLElement | null = document.querySelector(selector);

      return element && element.hasAttribute(expectedAttribute);
    };
  }

  public static numberOfElementsToBe([_selector, _expectedNumber]: [string, string]) {
    return (args: string[]) => {
      const [selector, expectedNumber] = args;
      const elements: NodeList = document.querySelectorAll(selector);

      return elements.length === +expectedNumber;
    };
  }

  public static invisibilityOf(_selector: string) {
    return (selector: string) => {
      const element: HTMLInputElement | HTMLElement | null = document.querySelector(selector);

      return !element;
    };
  }

  public static textToBePresentInElement([_selector, _expectedText]: [string, string]) {
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

  public static textToBePresentInElementValue([_selector, _expectedValue]: [string, string]) {
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

  public static elementToBeClickable(_selector: string) {
    return (selector: string) => {
      const element: HTMLInputElement | null = document.querySelector(selector);

      return element && !element.disabled;
    };
  }

  public static elementToBeSelected(_selector: string) {
    return (selector: string) => {
      const element: HTMLInputElement | null = document.querySelector(selector);

      return element && element.checked;
    };
  }

  public static titleEquals(_expectedTitle: string) {
    return (expectedTitle: string) => document.title === expectedTitle;
  }

  public static titleContains(_expectedTitle: string) {
    return (expectedTitle: string) => document.title.includes(expectedTitle);
  }

  public static urlEquals(_expectedUrl: string) {
    return (expectedUrl: string) => window.location.href === expectedUrl;
  }

  public static urlContains(_expectedUrl: string) {
    return (expectedUrl: string) => window.location.href.includes(expectedUrl);
  }
}
