import { LitElement, html, css } from "lit";

class AppRoot extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 20px;
    }
  `

  render = () => html`
      <p>Open the network tab to view the server rendered HTML 🤓</p>
      <counter-element></counter-element>
      <github-link></github-link>
  `;
}
customElements.define("app-root", AppRoot);

class Counter extends LitElement {
  static get properties() {
    return {
      count: { type: Number }
    };
  }

  static styles = css`
    button {
        font-size: 2em;
        width: 150px;
        height: 100px;
        border: none;
        background-color: #6200ea;
        color: white;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
        &:hover {
            background-color: #3700b3;
        }
    }
  `

  constructor() {
    super();
    this.count = 0;
  }

  increment = () => this.count++;

  render = () => html`<button @click=${this.increment}>${this.count}</button>`;
}
customElements.define("counter-element", Counter);

class GithubLink extends LitElement {
  static styles = css`
    a {
        color: #6200ea;
        text-decoration: none;
        font-size: 1.5em;
        &:hover {
            text-decoration: underline;
        }
    }
  `

  render = () => html`<a href="https://github.com/b3nten/lit-ssr" target="_blank">View on GitHub</a>`;
}
customElements.define("github-link", GithubLink);
