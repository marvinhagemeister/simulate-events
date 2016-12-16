declare namespace NodeJS {
  interface Global {
    navigator?: {
      userAgent: string;
    };
    document?: Document;
    window?: Window;
  }
}

interface Document {
  fireEvent(name: string, event: Event): void;
}

interface Text {
  fireEvent(name: string, event: Event): void;
}

interface HTMLElement {
  fireEvent(name: string, event: Event): void;
}

interface HTMLInputElement {
  fireEvent(name: string, event: Event): void;
}

interface HTMLSelectElement {
  fireEvent(name: string, event: Event): void;
}
