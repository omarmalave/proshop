import PropTypes from 'prop-types';
import { Nav, NavItem, NavLink } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <NavItem>
        {step1 ? (
          <LinkContainer to='/login'>
            <NavLink>Sign in</NavLink>
          </LinkContainer>
        ) : (
          <NavLink disabled>Sign in</NavLink>
        )}
      </NavItem>

      <NavItem>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <NavLink>Shipping</NavLink>
          </LinkContainer>
        ) : (
          <NavLink disabled>Shipping</NavLink>
        )}
      </NavItem>

      <NavItem>
        {step3 ? (
          <LinkContainer to='/payment'>
            <NavLink>Payment</NavLink>
          </LinkContainer>
        ) : (
          <NavLink disabled>Payment</NavLink>
        )}
      </NavItem>

      <NavItem>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <NavLink>Place Order</NavLink>
          </LinkContainer>
        ) : (
          <NavLink disabled>Place Order</NavLink>
        )}
      </NavItem>
    </Nav>
  );
};

CheckoutSteps.defaultProps = {
  step1: false,
  step2: false,
  step3: false,
  step4: false,
};

CheckoutSteps.propTypes = {
  step1: PropTypes.bool,
  step2: PropTypes.bool,
  step3: PropTypes.bool,
  step4: PropTypes.bool,
};

export default CheckoutSteps;
