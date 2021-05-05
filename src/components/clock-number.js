import { css, LitElement, svg } from "lit";

export class clockNumber extends LitElement {
  static get properties() {
    return {
      nb: { type: String },
    };
  }

  constructor() {
    super();
  }

  renderPath(nb) {
    const path1Visibility = [0, 2, 3, 5, 6, 7, 8, 9].includes(nb);
    const path2Visibility = [0, 1, 2, 3, 4, 7, 8, 9].includes(nb);
    const path3Visibility = [0, 4, 5, 6, 8, 9].includes(nb);
    const path4Visibility = [2, 3, 4, 5, 6, 8, 9].includes(nb);
    const path5Visibility = [0, 1, 3, 4, 5, 6, 7, 8, 9].includes(nb);
    const path6Visibility = [0, 2, 6, 8].includes(nb);
    const path7Visibility = [0, 2, 3, 5, 6, 8, 9].includes(nb);

    return svg`
      <path id="path1" d="m64.19 52.885-5.0842-4.8349 12.826-0.04387c7.0546-0.02413 18.649-0.02413 25.765 0l12.939 0.04387-5.0842 4.8349-5.0842 4.8349h-31.194l-5.0842-4.8349z" class="${
        path1Visibility ? "" : "hide"
      }"/>
      <path id="path2" d="m104.07 89.487-2.6963-2.5871 0.006-14.14 0.006-14.14 3.4657-3.306c1.9062-1.8183 4.1781-4.0026 5.0489-4.854l1.5831-1.548-0.00007 19.336-0.00006 19.336-2.3587 2.2448-2.3587 2.2448-2.6963-2.5871z" class="${
        path2Visibility ? "" : "hide"
      }"/>
      <path id="path3" d="m60.61 89.825-2.354-2.2487 0.04353-19.268 0.04353-19.268 5.0061 4.7831 5.0061 4.7831v28.34l-2.6956 2.5637-2.6956 2.5637-2.354-2.2487z" class="${
        path3Visibility ? "" : "hide"
      }"/>
      <path id="path4" d="m66.596 95.5-2.701-2.6093 2.6708-2.5244 2.6708-2.5244h31.27l2.6708 2.5244 2.6708 2.5244-2.701 2.6093-2.701 2.6093h-31.148l-2.701-2.6093z" class="${
        path4Visibility ? "" : "hide"
      }"/>
      <path id="path5" d="m106.4 132-5.0016-5.2212-0.005-13.905-0.005-13.905 1.9254-1.8527c1.059-1.019 2.2753-2.1698 2.7028-2.5573l0.77744-0.70464 2.3544 2.2568 2.3544 2.2568-0.0511 19.426-0.0511 19.426-5.0015-5.2212z" class="${
        path5Visibility ? "" : "hide"
      }"/>
      <path id="path6" d="m58.258 117.79v-19.484l2.3473-2.2274 2.3473-2.2274 0.7761 0.70341c0.42686 0.38688 1.6425 1.5371 2.7015 2.5561l1.9254 1.8527-0.0043 13.905-0.0043 13.905-3.2745 3.423c-1.801 1.8826-4.0711 4.2455-5.0446 5.2508l-1.7701 1.8278v-19.484z" class="${
        path6Visibility ? "" : "hide"
      }"/>
      <path id="path7" d="m60.597 136.72c0.643-0.69964 2.7094-2.8882 4.592-4.8636l3.423-3.5915h32.518l3.423 3.5915c1.8826 1.9753 3.949 4.1639 4.592 4.8636l1.1691 1.2721h-50.886l1.1691-1.2721z" class="${
        path7Visibility ? "" : "hide"
      }"/>
    `;
  }

  render() {
    const [firstDigit, secondDigit] = this.nb.split("");
    return [
      svg`
        <svg viewBox="0 0 75.991 114.71" class="${this.ok}">
          <g transform="translate(-46.883 -35.635)">
          ${this.renderPath(+firstDigit)}
          </g>
        </svg>
      `,
      svg`
        <svg viewBox="0 0 75.991 114.71" class="${this.ok}">
          <g transform="translate(-46.883 -35.635)">
          ${this.renderPath(+secondDigit)}
          </g>
        </svg>
      `,
    ];
  }


  static get styles() {
    return [
      // language=CSS
      css`
        svg {
          width: 50px;
        }
        .hide {
          fill: #e1e1e1;
          opacity: 0.4;
        }
      `,
    ];
  }
}

window.customElements.define("clock-number", clockNumber);
