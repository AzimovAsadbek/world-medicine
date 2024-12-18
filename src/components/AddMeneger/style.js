import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 171px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: 1000px;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Title = styled.span`
  font-weight: 800;
  font-size: 48px;
  line-height: 65.57px;
  @media (max-width: 768px) {
    font-size: 32px;
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
    padding: 12px 16px;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 1000px;
  padding: 20px;
  background-color: white;
  border: 1px solid #fafafa;
  border-radius: 30px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    border-radius: 15px;
  }
`;

const SubTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

const Section = styled.div`
  margin-top: -10px;
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: ${({ now }) => !now && "column"};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f7f8fc;
  @media (max-width: 768px) {
    width: 70px;
  }
`;

const InputWraper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: #f7f8fc;
  width: 100%;
  transition: all 0.3s;

  &:hover {
    background-color: white;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const IconSection = styled.div`
  position: absolute;
  display: flex;
  gap: 20px;
  right: 18px;
  cursor: pointer;

  @media (max-width: 768px) {
    top: 30%;
    right: 15px;
    gap: 10px;
  }
`;

const Datails = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;

export {
  IconSection,
  InputWraper,
  Wrapper,
  TitleWrapper,
  Title,
  Button,
  FormWrapper,
  SubTitle,
  Section,
  IconWrapper,
  Datails,
};
