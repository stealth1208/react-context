import React, { Component } from 'react';
import { DataContext } from '../../context';
import AnimateText from '../AnimateText/AnimateText';

class Header extends Component {
  render() {
    const { children } = this.props;

    return (
      <header>
        <AnimateText text={this.context.email} />
        <div>
          { children }
        </div>
      </header>
    );
  }
}
Header.contextType = DataContext;
export default Header;