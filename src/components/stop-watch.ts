import { css, LitElement, html } from "lit";
import { customElement, property } from 'lit/decorators.js';
import "./clock-number";

@customElement('stop-watch')
export class Stopwatch extends LitElement {
  static styles = css`
      :host {
        align-items: center;
        display: flex;
      }
      span {
        font-size: 4rem;
        margin: 0 .5rem;
      }
  `;

  @property({ type: Number }) _hours;
  @property({ type: Number }) _minutes;
  @property({ type: Number }) _seconds;
  @property({ type: Number }) _id;

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
    }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this._id);
  }


  render() {
    return html`
      <clock-number nb="${this._hours}"></clock-number>
      <span>:</span>
      <clock-number nb="${this._minutes}"></clock-number>
      <span>:</span>
      <clock-number nb="${this._seconds}"></clock-number>
    `;
  }
}