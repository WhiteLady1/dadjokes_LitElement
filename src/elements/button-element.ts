import { LitElement, html, css } from 'lit-element';
import {customElement, property } from 'lit/decorators';

@customElement('button-element')
class ButtonElement extends LitElement {

  static styles = css`
    :host {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .btn {
      border: none;
      outline: none;
      width: 2rem;
      height: 2rem;
      border-radius: 1rem;
      background-size: 1.2rem;
      background-position: center;
      background-repeat: no-repeat;
      cursor: pointer;
    }
    .btn-like--up {
      background-color: #00e268;
    }

    .btn-like--down {
      background-color: #ff5654;
    }
    .likes-count {
      color: white;
      font-size: 1.125rem;
      font-weight: bold;
    }
  `;

  @property()
  count!: number;
  upLikes!: boolean;

  setCount() {
    return this.count++;
  }

  render() {
    return html`
      <button
        class=${`btn${this.upLikes? ' btn-like--up' : ' btn-like--down'}`}
        @click=${this.setCount}
      >
        <span class="likes-count">
          ${this.count}
        </span>
      </button>
    `;
  }
}
