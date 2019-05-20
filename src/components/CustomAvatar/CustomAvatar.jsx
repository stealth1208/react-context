import React from 'react';
import Avatar from 'react-avatar';
import AnimateText from '../AnimateText/AnimateText';
import { DataContext } from '../../context';

class CustomAvatar extends React.Component {
  render() {
    // console.log('this.context', this.context)
    return (
      <DataContext.Consumer>
        {
          value => {
            const { name, src } = value;
            console.log('value', value)
            return (
              <>
                <Avatar name={name} size="150" src={src} />
                <AnimateText text={name} />
              </>
            );
          }
        }
      </DataContext.Consumer>
    );
  }
}
// CustomAvatar.contextType = DataContext;
export default CustomAvatar;