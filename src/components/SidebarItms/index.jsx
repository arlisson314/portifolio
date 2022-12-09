import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-scroll';
import Container from './styles';

function SidebarItem({ Icon, Text, renderSiderbar }) {
  return (
    <Link
      to={Text}
      spy
      smooth
      offset={0}
      duration={500}
    >
      <Container onClick={renderSiderbar}>
        <Icon />
        {Text}
      </Container>
    </Link>
  );
}

SidebarItem.propTypes = {
  Text: PropTypes.string,
  Icon: PropTypes.node,
}.isRequired;

export default SidebarItem;
