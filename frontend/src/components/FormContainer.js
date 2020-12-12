import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { element } from 'prop-types';

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

FormContainer.propTypes = {
  children: element.isRequired,
};

export default FormContainer;
