import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.description = "My Description";
    this.image = "https://wallpaperaccess.com/full/3023222.jpg";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      meme-maker {
        --meme-maker-font-size: 20px;
        --meme-maker-font-size-medium: 24px;
        --meme-maker-font-size-small: 16px;
        width: 200px;
      }

      .card {
        border-style: solid;
        width: 200px;
        padding: 8px;
        margin: 20px;
        border-radius: 20px;
        opacity: .7;
      }

      .fancy {
        background-color: coral;
      }

      .card:hover,
      .card:focus-within {
        opacity: 1;
        outline: 2px solid green;
        outline-offset: 16px;
      }

      button:hover {
        background-color: green;
      }

      .container {
        display: flex;
        gap: 20px;
      }

      @media (max-width: 800px) and (min-width: 500px) {
        .details-button {
          display: block; 
        }

        .container {
          display: inline;
        }
      }

      @media (max-width: 499px), (min-width: 801px) {
        .details-button {
          display: none; 
        }
      }

      @media (max-width: 499px) {
        .card {
          transform: scale(0.8); 
          transform-origin: top left; 
        }

        .container {
          display: inline;
        }

        .card img,
        .card p,
        .card button {
          font-size: 14px; 
        }
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <h1 class="title">${this.title}</h1>
        <meme-maker
          image-url="${this.image}"
          top-text="This guy"
          bottom-text="is getting an A"
          class="card-image"
        ></meme-maker>
        <p><slot name="description">${this.description}</slot>></p>
        <a href="https://google.com">
          <button>This is a link to google</button>
        </a>
        <button class="duplicate" @click="${this._duplicateCard}">Duplicate/button>
        <button class="rename" @click="${this._renameCard}">Rename</button>
        <button class="reimage" @click="${this._reimageCard}">Change</button>
        <button class="recolor" @click="${this._recolorCard}">Change</button>
        <button class="details-button">Details</button>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      image: { type: String }
    };
  }
  _duplicateCard(event) {
    const cardToDuplicate = event.target.closest('.card');
    const newCard = cardToDuplicate.cloneNode(true);
    const container = this.closest('.container');
    if (container) {
      container.appendChild(newCard);
    }
  }
  _renameCard(event) {
    const cardToTarget = event.target.closest('.card');
    const title = cardToTarget.querySelector('.title');
    title.innerHTML = "New Name";
  }

  _reimageCard(event) {
    const cardToTarget = event.target.closest('.card');
    const memeImage = cardToTarget.querySelector('meme-maker'); 
    memeImage.setAttribute('image-url', "https://www.pngmart.com/files/11/Doge-Meme-PNG-File.png");
  }

  _recolorCard(event) {
    const cardToTarget = event.target.closest('.card');
    cardToTarget.classList.toggle('fancy');
  }
}

customElements.define(MyCard.tag, MyCard);
