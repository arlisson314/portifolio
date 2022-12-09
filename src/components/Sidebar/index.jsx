import PropTypes from 'prop-types';
import React from 'react';
import {
  FaTimes,
  FaHome,
  FaEnvelope,
  FaUserAlt,
  FaIdCardAlt,
} from 'react-icons/fa';
import SidebarItem from '../SidebarItms';
import { Container, Content } from './styles';

function Sidebar({ renderSiderbar }) {
  return (
    <Container sidebar>
      <FaTimes onClick={renderSiderbar} />
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" renderSiderbar={renderSiderbar} />
        <SidebarItem Icon={FaUserAlt} Text="About" renderSiderbar={renderSiderbar} />
        <SidebarItem Icon={FaIdCardAlt} Text="Projects" renderSiderbar={renderSiderbar} />
        <SidebarItem Icon={FaEnvelope} Text="Contact" renderSiderbar={renderSiderbar} />
      </Content>
    </Container>
  );
}

Sidebar.propTypes = {
  renderSiderbar: PropTypes.func,
}.isRequired;

export default Sidebar;
