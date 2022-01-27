import { LitElement, html, css } from "lit-element";
import { customElement } from 'lit/decorators';
import { Jokes } from '../jokes';

@customElement('list-of-jokes')
class ListOfJokesElement extends LitElement {

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 30rem;
      margin: 5rem auto;
    }

  `;

  listOfJokes = Jokes;

  render() {
    return html`
      ${this.listOfJokes.map(joke => html`
        <card-element .joke=${joke}></card-element>
      `)}
    `;
  }
}
