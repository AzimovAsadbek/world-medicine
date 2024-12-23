import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin-top: 170px;
  padding: 0 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 7px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 21px 0;
  width: 100%;
  border-radius: 7px;

  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  background-color: ${(props) => (props.active ? "#007bff" : "white")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.active ? "#0056b3" : "#e9ecef")};
  }

  @media (max-width: 420px) {
    padding: 17px 0;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  padding: 20px;

  border-radius: 27px;
  background-color: #fff;
`;

const Article = styled.div`
  display: flex;
  gap: 7px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: ${({ col }) => !col && "column"};
  align-items: ${({ col }) => col && "center"};
  gap: 10px;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 17px;
`;

const ProfieBtn = styled.div`
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #f7f8fc;
  color: var(--text-hover);
  cursor: pointer;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: #f7f8fc;
  width: 100%;
  padding: 17px 20px;
  border-radius: 7px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding: 16px;
  background-color: #f7f8fc;
  border-radius: 7px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 20px;
  background-color: #216bf4;
  color: white;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 24px;
  font-weight: 400;
  line-height: 33px;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #c4c4c4;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 12px;
  }
`;

export {
  InfoWrapper,
  Container,
  Item,
  ButtonWrapper,
  Main,
  Section,
  Article,
  InputWrapper,
  ProfieBtn,
  ItemWrapper,
  Button,
};
