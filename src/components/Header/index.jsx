import React, { useState } from 'react';
import {
  FaBars, FaEnvelope, FaHome, FaIdCardAlt, FaUserAlt,
} from 'react-icons/fa';
import { Container, Content } from './styles';
import Sidebar from '../Sidebar';
import HeaderItem from '../HeaderItems';

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const renderSiderbar = () => setSidebar(!sidebar);

  return (
    <Container>
      <h3>Arlisson.dev</h3>

      <FaBars size={25} onClick={renderSiderbar} />
      {sidebar && <Sidebar renderSiderbar={renderSiderbar} />}

      <Content>
        <HeaderItem Icon={FaHome} Text="Home" />
        <HeaderItem Icon={FaUserAlt} Text="About" />
        <HeaderItem Icon={FaIdCardAlt} Text="Projects" />
        <HeaderItem Icon={FaEnvelope} Text="Contact" />
      </Content>
    </Container>
  );
}

export default Header;
