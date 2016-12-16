import { assert as t } from "chai";
import * as sinon from "sinon";
import { cleanup, createRoot } from "./helpers";
import fire from "../index";

describe("fire", () => {
  let dom: HTMLElement;

  beforeEach(() => dom = createRoot("root"));
  afterEach(() => cleanup());

  it("should fire click event", () => {
    const div = document.createElement("div");
    const spy = sinon.spy();

    div.addEventListener("click", spy);
    fire(div, "click");
    t.equal(spy.calledOnce, true);
  });

  it("should fire custom event", () => {
    const div = document.createElement("div");
    const spy = sinon.spy();

    div.addEventListener("test", spy);
    fire(div, "test");
    t.equal(spy.calledOnce, true);
  });
});
