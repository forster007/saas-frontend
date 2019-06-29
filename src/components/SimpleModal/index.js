import PropTypes from 'prop-types';
import React from 'react';
import { Container, Content } from './styles';

const SimpleModal = ({ ActionClose, ActionOpen, children }) => (
  <Container onClose={ActionClose} disableAutoFocus open={ActionOpen}>
    <Content>{children}</Content>
  </Container>
);

SimpleModal.propTypes = {
  ActionClose: PropTypes.func.isRequired,
  ActionOpen: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

export default SimpleModal;
