import { css, LitElement, html } from "lit-element";
import "./clock-number";

export class Stopwatch extends LitElement {
  static get properties() {
    return {
      date: { type: Boolean, reflect: true },
      // noSeconds: { type: Boolean, attribute: 'no-seconds', reflect: true },
      // _year: { type: Number },
      // _month: { type: Number },
      // _day: { type: Number },
      // _hours: { type: Number },
      // _minutes: { type: Number },
      _third: { type: Number },
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this._id = setInterval(() => {
      const currentDatetime = new Date();
      this._hours = currentDatetime.getHours().toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });;
      this._minutes = currentDatetime.getMinutes().toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });;
      this._seconds = currentDatetime.getSeconds().toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      this._third = currentDatetime.getMilliseconds().toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      console.log('this._third ==>', this._third);
    }, 17);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this._id);
  }

  render() {
    return html`
      <clock-number nb="${this._minutes}"></clock-number>
      <span>:</span>
      <clock-number nb="${this._seconds}"></clock-number>
      <span>:</span>
      <clock-number nb="${this._third}"></clock-number>
    `;
  }

  static get styles() {
    return [
      css`
        :host {
          align-items: center;
          display: flex;
        }
        span {
          font-size: 4rem;
          margin: 0 .5rem;
        }
      `,
    ];
  }
}

window.customElements.define("stop-watch", Stopwatch);
