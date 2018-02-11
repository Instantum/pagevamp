import React from 'react';
import Aux from '../../hoc/Aux';
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = (props) => (
  <Aux>
    <Header />
    {props.children}
    <Footer />
  </Aux>
)

export default Layout;
