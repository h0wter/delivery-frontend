import { StyledLabel, StyledInput } from './Form.styled';

export const Form = ({ formData, handleChange }) => {
  return (
    <form>
      <StyledLabel>
        Name:
        <StyledInput
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </StyledLabel>

      <StyledLabel>
        Email:
        <StyledInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledLabel>
        Phone:
        <StyledInput
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledLabel>
        Address:
        <StyledInput
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </StyledLabel>
    </form>
  );
};
