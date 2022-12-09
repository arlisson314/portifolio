import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-scroll';
import Container from './styles';

function HeaderItem({ Icon, Text }) {
  return (
    <Container>
      <Link
        to={Text}
        spy
        smooth
        offset={0}
        duration={500}
      >
        <Icon />
        <p>{Text}</p>
      </Link>
    </Container>
  );
}

HeaderItem.propTypes = {
  Text: PropTypes.string,
  Icon: PropTypes.node,
}.isRequired;

export default HeaderItem;
