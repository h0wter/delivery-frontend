import { useState } from 'react';
import { getHistory } from '../../services/api';
import {
  Container,
  StyledLabel,
  StyledInput,
  SectionContainer,
  StyledButton,
  StyledItem,
  CartImg,
  ProductsList,
  ProductItem,
  ItemInfo,
} from './History.styled';
import { Box } from '../../components/common/Box';

const History = () => {
  const [history, setHistory] = useState([]);

  const handleFormSubmit = async e => {
    e.preventDefault();
    const formData = {
      email: e.target.email.value,
      phone: encodeURIComponent(e.target.phone.value),
    };
    const response = await getHistory(formData);
    setHistory([...response.data]);
  };
  console.log(history);
  return (
    <Container>
      <SectionContainer>
        <Box maxWidth="500px" ml="auto" mr="auto" textAlign="center">
          <form onSubmit={handleFormSubmit}>
            <StyledLabel>
              Email:
              <StyledInput type="email" name="email" />
            </StyledLabel>
            <StyledLabel>
              Phone:
              <StyledInput type="tel" name="phone" />
            </StyledLabel>
            <StyledButton type="submit">Search</StyledButton>
          </form>
        </Box>
      </SectionContainer>
      <SectionContainer>
        {history.length > 0 && (
          <Box
            as="ul"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            {history.map(({ _id, products, totalPrice }) => (
              <StyledItem key={_id}>
                <ProductsList>
                  {products.map(({ name, pictureUrl, price, quantity }) => (
                    <ProductItem key={pictureUrl}>
                      <CartImg src={pictureUrl} alt={name} />
                      <ItemInfo>
                        <p>{name}</p>
                        <p>Quantity: {quantity}</p>
                        <p>Price: {price} </p>
                      </ItemInfo>
                    </ProductItem>
                  ))}
                </ProductsList>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="200px"
                >
                  Total price: {totalPrice}
                </Box>
              </StyledItem>
            ))}
          </Box>
        )}
      </SectionContainer>
    </Container>
  );
};

export default History;
