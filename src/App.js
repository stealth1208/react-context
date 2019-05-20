import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import CustomAvatar from './components/CustomAvatar/CustomAvatar';
import AnimateText from './components/AnimateText/AnimateText';
import { DataContext } from './context';

class App extends Component {

  state = {
    user: {}
  }

  imgUrl = 'https://cdn.shopify.com/s/files/1/0891/8314/products/Jihad_troll_face_4e2f3861ccffe_grande.jpeg?v=1459054285'

  async componentWillMount() {
    const result = await this.getData();

    this.setState({
      user: result
    })
  }

  getData = async () => {
    return await {
      firstName: 'trong khang',
      email: 'trongkhang12@abc.com'
    };
  }

  render() {

    const {
      firstName = '',
      email = ''
    } = this.state.user;

    return (
      <DataContext.Provider value={{
        name: firstName,
        email,
        src: this.imgUrl
      }}>

        <div className="App">
          <header>
            <Header>
              Hello Context
            </Header>
          </header>
          <Body>
            <CustomAvatar />
          </Body>
        </div>
      </DataContext.Provider>
    );
  }
  
}
App.contextType = DataContext;
export default App;
