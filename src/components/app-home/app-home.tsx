// https://stackoverflow.com/questions/55754208/react-render-inside-stencil-web-component
// https://dev.to/alexkhismatulin/quick-peek-react-app-mounted-on-a-shadow-dom-root-49m6
// https://medium.com/trendyol-tech/micro-frontend-architecture-and-react-with-web-components-c27301c68240

import { Component, Element, State, h } from '@stencil/core';
import { createElement } from 'react';
import { render } from 'react-dom';
import { Demo1 } from './react1';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {

  @Element() host: HTMLElement;

  // private intervalId:number;
  @State() num: number = 0;

  componentDidLoad() {
    const root = this.host.shadowRoot.querySelector("#root");
    const microFe = createElement(Demo1) as any;
    render(microFe, root);

    setInterval(() => { this.num++; }, 1000);
  }

  componentDidUpdate() {
    const props = { num: this.num };
    const root = this.host.shadowRoot.querySelector("#root");
    const microFe = createElement(Demo1, props) as any;
    render(microFe, root);
  }

  render() {

    return (
      <div class="app-home">
        <p>Below this line is a React App (MicroFE) running in Shadow DOM:</p>
        <hr />
        <div id="root"></div>
      </div>
    );
  }
}
