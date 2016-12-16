[![Build Status](https://travis-ci.org/marvinhagemeister/simulate-events.svg?branch=master)](https://travis-ci.org/marvinhagemeister/simulate-events)

# Simulate events

A tiny helper library to simulate any kind of event in non-browser environments
like [jsdom](https://github.com/tmpvar/jsdom). Events do work the same as you
would exepect them to work in a browser.

## Installation

```bash
# NPM
npm i -D simulate-events

# Yarn
yarn add --dev simulate-events
```

## Usage

```js
import fire from "simulate-events";

// We assume that jsdom has been correctly set up
const div = document.createElement("div");
document.body.appendChild(div);

div.addEventListener("whatever", () => {
  console.log("hey");
});

fire(div, "whatever");

// Logs: "hey"
```

## LICENSE

MIT, see `LICENSE.md`
