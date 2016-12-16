import EVENTS from "./events";

export type DOMElement = Text | HTMLElement | HTMLInputElement | HTMLSelectElement;

export function createEvent(name: string, params?: any)  {
  let event;

  if (typeof CustomEvent !== "undefined") {
    event = new CustomEvent(name, params || {});
  } else if (document.createEvent) {
    event = document.createEvent("Event");
    const ev = EVENTS[name];
    const bubbles = ev ? ev.bubbles : true;
    const cancelable = ev ? ev.cancelable : true;
    event.initEvent(name, bubbles, cancelable);
  }

  return event;
}

export default function fire(node: DOMElement, event: string | Event, params?: any): Event {
  if (typeof event === "string") {
    event = createEvent(event, params);
  }

  if (document.dispatchEvent) {
    node.dispatchEvent(event as Event);
  } else if (document.fireEvent) {
    node.fireEvent("on" + name, event);
  }

  return event as Event;
}
