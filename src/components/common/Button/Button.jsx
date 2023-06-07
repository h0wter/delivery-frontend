import toast from 'react-hot-toast';
import { StyledButton } from './Button.styled';

export const Button = ({ children }) => {
  return (
    <StyledButton
      onClick={() => toast.success(`Smth successfully added to cart!`)}
    >
      {children}
    </StyledButton>
  );
};
