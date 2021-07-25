import { css, LitElement, html, unsafeCSS } from "lit";
import { styleMap } from 'lit/directives/style-map.js';
import { customElement, property } from 'lit/decorators.js';
import "./clock-number";

@customElement('stop-watch')
export class Stopwatch extends LitElement {

  @property({ type: Number }) _hours;
  @property({ type: Number }) _minutes;
  @property({ type: Number }) _seconds;
  @property({ type: Number }) _id;
  @property({ type: String }) c;
  styles = { color: '#000' };

  static get styles() {
    return css`
    :host {
      align-items: center;
      display: flex;
    }
    span {
      font-size: 4rem;
      margin: 0 .5rem;
    }
  `;
  }
  connectedCallback() {
    super.connectedCallback();
    this.styles = { color: this.c };
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
      <clock-number c="${this.c}" nb="${this._hours}"></clock-number>
      <span style=${styleMap(this.styles)}>:</span>
      <clock-number c="${this.c}" nb="${this._minutes}"></clock-number>
      <span style=${styleMap(this.styles)}>:</span>
      <clock-number c="${this.c}" nb="${this._seconds}"></clock-number>
    `;
  }
}