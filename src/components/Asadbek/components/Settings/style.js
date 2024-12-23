import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 171px;
  width: 100%;

  padding: 0 10px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
`;

const Title = styled.span`
  font-weight: 800;
  font-size: 48px;
  line-height: 65.57px;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 45px;
  }
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

const Datails = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
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
  padding: 13px 17px;
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
`;

const InfoPage = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  border: 1px solid #fafafa;
  background: #fff;
  gap: 10px;
  border-radius: 27px;
`;

const InputWrapper = styled.form`
  display: flex;
  /* height: 60px; */
  padding: 17px;
  align-items: center;
  border-radius: 7px;
  width: 100%;
  justify-content: space-between;

  color: #000;
  font-size: 16px;
  font-weight: 600;
  background-color: #f7f8fc;
`;

const Input = styled.input`
  width: 100%;

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  outline: none;
  border: none;
  border-radius: 7px;
  padding-left: 17px;
  background-color: #f7f8fc;
`;

const Section = styled.div`
  display: flex;
  /* flex-direction: column; */
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Article = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 17px 20px;
  border-radius: 7px;
  gap: 9px;

  background: #f7f8fc;
  color: #000;
  font-size: 16px;
  font-weight: 600;
`;

const PersentTitle = styled.span`
  color: ${({ val, color }) => (color && "red") || (val && "#00000080")};
  margin-left: ${({ val }) => val && "10px"};
`;

const InfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TableWrapper = styled.div`
  padding: 17px;
  flex-direction: column;
  background-color: white;
  border-radius: 27px;
`;

export {
  InfoTitle,
  PersentTitle,
  Article,
  Section,
  Button,
  Title,
  TitleWrapper,
  Wrapper,
  Datails,
  ButtonWrapper,
  Item,
  InfoPage,
  InputWrapper,
  Input,
  TableWrapper,
};
