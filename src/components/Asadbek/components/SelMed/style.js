import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 175px;
  padding: 0 20px;
  justify-content: center;
  gap: 20px;
`;

const Main = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 20px;
  background-color: white;
`;

const Article = styled.div`
  display: flex;
  gap: 7px;

  @media (max-width: 1150px) {
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

export { Container, Main, Article, Section, ProfieBtn, InfoWrapper, Button };
