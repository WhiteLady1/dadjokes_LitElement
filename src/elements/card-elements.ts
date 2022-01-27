import { LitElement, html, css } from "lit-element";
import { customElement, property } from 'lit/decorators';
import { JokeProps } from '../jokes';

@customElement('card-element')
class CardElement extends LitElement {

  static styles = css`
    :host {
      margin-bottom: 2rem;
    }

    .joke__body {
      display: flex;
    }

    .joke__user {
      flex: 0 0 auto;
      width: 5rem;
      height: 5rem;
      margin-right: 1rem;
    }

    .user__avatar {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
    }

    .user-name {
      margin-top: 0.5rem;
      text-align: center;
    }

    .joke__text {
      background-color: cornflowerblue;
      color: white;
      border-radius: 1rem;
      padding: 1.5rem 2rem;
      margin: 0;
      line-height: 150%;
    }
  `;

  @property()
  joke!: JokeProps;

  render() {
    return html`
      <div class="joke__body">
        <div class="joke__user">
          <img class="user__avatar" src="https://picsum.photos/100">
          <p class="user-name">${this.joke.name}</p>
        </div>
        <p class="joke__text">${this.joke.text}</p>
      </div>
      <likes-button-element
        .likes=${this.joke.likes}
        .dislikes=${this.joke.dislikes}
      ></likes-button-element>
    `;
  }
}
