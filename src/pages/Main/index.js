import React, { Component } from 'react';

import Companys from '../../components/Companys';
import Groups from '../../components/Groups';
import Header from '../../components/Header';
import MenuLeft from '../../components/MenuLeft';
import Triggers from '../../components/Triggers';

import { Container, Content, Wrapper } from './styles';

class Main extends Component {
  state = {
    contentHeight: window.innerHeight,
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ contentHeight: window.innerHeight });
  };

  render() {
    const { contentHeight } = this.state;

    return (
      <Container>
        <Header />
        <Content height={contentHeight}>
          <MenuLeft />
          <Wrapper>
            <Companys />
            <Groups />
            <Triggers />
          </Wrapper>
        </Content>
      </Container>
    );
  }
}

export default Main;
