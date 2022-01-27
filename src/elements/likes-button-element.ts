import { LitElement, html, css } from 'lit-element';
import {customElement, property } from 'lit/decorators';

@customElement('likes-button-element')
class LikesButtonElement extends LitElement {

  static styles = css`
    :host {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 10px;
      margin-top: 1rem;
    }
  `;

  @property()
  likes!: number;
  dislikes!: number;

  
  render() {
    return html`
      <button-element .count=${this.likes} .upLikes=${true}></button-element>
      <button-element .count=${this.dislikes} .upLikes=${false}></button-element>
    `;
  }
}
