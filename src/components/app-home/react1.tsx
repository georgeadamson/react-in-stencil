
import { Component, createElement as h } from 'react';


export class Demo1 extends Component<{ num: number }> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>REACT hello world.</p>
        <p>Receiving data passed down from Shell: {this.props.num}</p>
      </div>
    );
  }
}
