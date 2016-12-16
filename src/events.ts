export const enum TARGETS {
  ELEMENT = 1 << 1,
  WINDOW = 1 << 2,
  APPLICATION_CACHE = 1 << 3,
  DEFAULT_VIEW = 1 << 4,
  DEFAULT_DOCUMENT_ELEMENT = 1 << 5,
  WEBSOCKET = 1 << 6,
  DOCUMENT_ELEMENT_WINDOW = 1 << 7,
  DOCUMENT = 1 << 8,
  DOCUMENT_ELEMENT = 1 << 9,
  OFFLINE_AUDIO_CONTEXT = 1 << 10,
  AUDIO_BUFFER_SOURCE_CODE = 1 << 11,
  XML_HTTP_REQUEST = 1 << 12,
  WINDOW_ELEMENT = 1 << 13,
  WEBSOCKET_EVENTSOURCE = 1 << 14,
  SERVICE_WORKER = 1 << 15,
};

export interface EventList {
  [key: string]: {
    bubbles: boolean;
    cancelable: boolean;
    target: TARGETS;
  };
}

const EVENTS: EventList = {
  // Resource Events
  cached: { bubbles: false, cancelable: false, target: TARGETS.APPLICATION_CACHE },
  error: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  abort: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  load: { bubbles: false, cancelable: false, target: TARGETS.WINDOW_ELEMENT },
  beforeunload: { bubbles: false, cancelable: true, target: TARGETS.DEFAULT_VIEW },
  unload: { bubbles: false, cancelable: false, target: TARGETS.DEFAULT_DOCUMENT_ELEMENT },

  // Network Events
  online: { bubbles: false, cancelable: false, target: TARGETS.WINDOW },
  offline: { bubbles: false, cancelable: false, target: TARGETS.WINDOW },

  // Focus Events
  focus: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  blur: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },

  // Websocket Events
  open: { bubbles: false, cancelable: false, target: TARGETS.WEBSOCKET },
  message: { bubbles: false, cancelable: false, target: TARGETS.WEBSOCKET_EVENTSOURCE },
  // error is the same as above
  close: { bubbles: false, cancelable: false, target: TARGETS.WEBSOCKET },

  // Session History Events
  pagehide: { bubbles: false, cancelable: false, target: TARGETS.WINDOW },
  pageshow: { bubbles: false, cancelable: false, target: TARGETS.WINDOW },
  popstate: { bubbles: true, cancelable: false, target: TARGETS.DEFAULT_VIEW },

  // CSS Animation Events
  animationstart: { bubbles: true, cancelable: false, target: TARGETS.DOCUMENT_ELEMENT_WINDOW },
  animationend: { bubbles: true, cancelable: false, target: TARGETS.DOCUMENT_ELEMENT_WINDOW },
  animationiteration: { bubbles: true, cancelable: false, target: TARGETS.DOCUMENT_ELEMENT_WINDOW },

  // Form Events
  reset: { bubbles: true, cancelable: true, target: TARGETS.ELEMENT },
  submit: { bubbles: true, cancelable: true, target: TARGETS.ELEMENT },

  // Printing Events
  beforeprint: { bubbles: false, cancelable: false, target: TARGETS.WINDOW },
  afterprint: { bubbles: false, cancelable: false, target: TARGETS.WINDOW },

  // Text Composition Events
  compositionstart: { bubbles: true, cancelable: true, target: TARGETS.ELEMENT },
  compositionupdate: { bubbles: true, cancelable: false, target: TARGETS.ELEMENT },
  compositionend: { bubbles: true, cancelable: true, target: TARGETS.ELEMENT },

  // View Events
  fullscreenchange: { bubbles: true, cancelable: false, target: TARGETS.DOCUMENT },
  fullscreenerror: { bubbles: true, cancelable: false, target: TARGETS.DOCUMENT },
  resize: { bubbles: false, cancelable: false, target: TARGETS.WINDOW },
  scroll: { bubbles: true, cancelable: false, target: TARGETS.DEFAULT_DOCUMENT_ELEMENT },

  // Clipboard Events
  cut: { bubbles: true, cancelable: true, target: TARGETS.DEFAULT_DOCUMENT_ELEMENT },
  copy: { bubbles: true, cancelable: true, target: TARGETS.ELEMENT  },
  paste: { bubbles: true, cancelable: true, target: TARGETS.DEFAULT_DOCUMENT_ELEMENT },

  // Keyboard Events
  keydown: { bubbles: true, cancelable: true, target: TARGETS.DOCUMENT_ELEMENT },
  keypress: { bubbles: true, cancelable: true, target: TARGETS.DOCUMENT_ELEMENT },
  keyup: { bubbles: true, cancelable: true, target: TARGETS.DOCUMENT_ELEMENT },

  // Mouse Events
  mouseenter: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  mouseover: { bubbles: true, cancelable: true, target: TARGETS.ELEMENT },
  mousemove: { bubbles: true, cancelable: true, target: TARGETS.ELEMENT },
  mousedown: { bubbles: true, cancelable: true, target: TARGETS.ELEMENT },
  mouseup: { bubbles: true, cancelable: true, target: TARGETS.ELEMENT },
  click: { bubbles: true, cancelable: true, target: TARGETS.ELEMENT },
  dblclick: { bubbles: true, cancelable: true, target: TARGETS.ELEMENT },
  contextmenu: { bubbles: true, cancelable: true, target: TARGETS.ELEMENT },
  wheel: { bubbles: true, cancelable: true, target: TARGETS.DEFAULT_DOCUMENT_ELEMENT },
  mouseleave: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  mouseout: { bubbles: true, cancelable: true, target: TARGETS.ELEMENT },
  select: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  pointerlockchange: { bubbles: true, cancelable: false, target: TARGETS.DOCUMENT },
  pointerlockerrror: { bubbles: true, cancelable: false, target: TARGETS.DOCUMENT },

  // Drag & Drop Events
  dragstart: { bubbles: true, cancelable: true, target: TARGETS.DOCUMENT_ELEMENT },
  drag: { bubbles: true, cancelable: true, target: TARGETS.DOCUMENT_ELEMENT },
  dragend: { bubbles: true, cancelable: false, target: TARGETS.DOCUMENT_ELEMENT },
  dragenter: { bubbles: true, cancelable: true, target: TARGETS.ELEMENT },
  dragover: { bubbles: true, cancelable: true, target: TARGETS.DOCUMENT_ELEMENT },
  dragleave: { bubbles: true, cancelable: false, target: TARGETS.DOCUMENT_ELEMENT },
  drop: { bubbles: true, cancelable: true, target: TARGETS.DOCUMENT_ELEMENT },

  // Media Events
  durationchange: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  loadedmetadata: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  loadeddata: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  canplay: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  canplaythrough: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  ended: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  emptied: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  stalled: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  suspend: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  play: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  playing: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  pause: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  waiting: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  seeking: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  seeked: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  ratechange: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  timeupdate: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  volumechange: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  complete: { bubbles: true, cancelable: true, target: TARGETS.OFFLINE_AUDIO_CONTEXT },

  // Progress Events
  loadstart: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  progress: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  // error event already specified above
  timeout: { bubbles: false, cancelable: false, target: TARGETS.XML_HTTP_REQUEST },
  // abort event already specified above
  // load event already specified above
  loadend: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },

  // Storage Events
  storage: { bubbles: false, cancelable: false, target: TARGETS.WINDOW },

  // Update Events
  checking: { bubbles: false, cancelable: false, target: TARGETS.APPLICATION_CACHE },
  downloading: { bubbles: false, cancelable: false, target: TARGETS.APPLICATION_CACHE },
  // error event already specified above
  noupdate: { bubbles: false, cancelable: false, target: TARGETS.APPLICATION_CACHE },
  obsolete: { bubbles: false, cancelable: false, target: TARGETS.APPLICATION_CACHE },
  updateready: { bubbles: false, cancelable: false, target: TARGETS.APPLICATION_CACHE },

  // Value change Events
  broadcast: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },
  CheckboxStateChange: { bubbles: true, cancelable: true, target: TARGETS.ELEMENT },
  hashchange: { bubbles: true, cancelable: false, target: TARGETS.WINDOW },
  input: { bubbles: true, cancelable: false, target: TARGETS.ELEMENT },
  RadioStateChange: { bubbles: true, cancelable: false, target: TARGETS.ELEMENT },
  readystatechange: { bubbles: false, cancelable: false, target: TARGETS.DOCUMENT },
  ValueChange: { bubbles: true, cancelable: true, target: TARGETS.DOCUMENT },

  // Uncategorized events
  invalid: { bubbles: false, cancelable: true, target: TARGETS.ELEMENT },
  // message already handled
  show: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },

  // DOM
  DOMContentLoaded: { bubbles: false, cancelable: false, target: TARGETS.ELEMENT },

  // Pointer events
  pointercancel: { bubbles: true, cancelable: false, target: TARGETS.DOCUMENT_ELEMENT },
  pointerdown: { bubbles: true, cancelable: true, target: TARGETS.DOCUMENT_ELEMENT },
  pointerenter: { bubbles: false, cancelable: false, target: TARGETS.DOCUMENT_ELEMENT },
  pointerleave: { bubbles: false, cancelable: false, target: TARGETS.DOCUMENT_ELEMENT },
  pointerlockerror: { bubbles: true, cancelable: false, target: TARGETS.DOCUMENT },
  pointermove: { bubbles: true, cancelable: true, target: TARGETS.DOCUMENT_ELEMENT },
  pointerout: { bubbles: true, cancelable: true, target: TARGETS.DOCUMENT_ELEMENT },
  pointerover: { bubbles: true, cancelable: true, target: TARGETS.DOCUMENT_ELEMENT },
  pointerup: { bubbles: true, cancelable: true, target: TARGETS.DOCUMENT_ELEMENT },

  push: { bubbles: false, cancelable: false, target: TARGETS.SERVICE_WORKER },
  pushsubscriptionchange: { bubbles: false, cancelable: false, target: TARGETS.SERVICE_WORKER },

  touchcancel: { bubbles: true, cancelable: false, target: TARGETS.DOCUMENT_ELEMENT },
  touchend: { bubbles: true, cancelable: true, target: TARGETS.DOCUMENT_ELEMENT },
  touchmove: { bubbles: true, cancelable: true, target: TARGETS.DOCUMENT_ELEMENT },
  touchstart: { bubbles: true, cancelable: true, target: TARGETS.DOCUMENT_ELEMENT },

  transitionend: { bubbles: true, cancelable: true, target: TARGETS.DOCUMENT_ELEMENT_WINDOW },
  visibilitychange: { bubbles: true, cancelable: false, target: TARGETS.DOCUMENT },
};

export default EVENTS;
