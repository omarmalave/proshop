import { Alert } from 'react-bootstrap';
import { element, string } from 'prop-types';

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: 'info',
};

Message.propTypes = {
  variant: string,
  children: element.isRequired,
};

export default Message;
