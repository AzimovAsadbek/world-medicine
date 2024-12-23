import React, { useState } from "react";
import {
  Article,
  Button,
  ButtonWrapper,
  Container,
  InfoWrapper,
  Item,
  ItemWrapper,
  Main,
  ProfieBtn,
  Section,
} from "./style";
import { Title } from "../Settings/style";
import { MiniTitleSmall, TitleSmall } from "../../../../root/style";
import Input2 from "../../../Generic/Input/Input2";
import DateRangePicker from "../../../Generic/DataRangePicker/DataRangePicker";
import PrimarySelect from "../../../Generic/Select/Select";
import XICon from "../../assets/svg/xICon";
import IconPlus from "../../../../assets/svg/IconPlus";

const CreatingContract = () => {
  const [activeTab, setActiveTab] = useState("Рецепт");
  const [formData, setFormData] = useState({
    fullName: "",
    analitika: "",
  });

  const [preparat, setPreparat] = useState([
    { id: 1, value: "Алтикам" },
    { id: 2, value: "Ампилин" },
    { id: 3, value: "Артокол мазь" },
    { id: 4, value: "Артокол уколы" },
  ]);
  const information = {
    title: "Создание договора",
    buttonInfo: ["Рецепт", "СУ", "СБ", "ГЗ", "КВ"],
    subtitles: ["Кому", "Период выполнения", "Выбрать препарат"],
    inputData: {
      placeholder: "Ф.И.О. Врача",
      selectTitle: "Алтикам",
    },
    drugs: "Выбранные препараты",
    terms: "Условия",
    buttonTitle: "Назначить задачу",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value, // formData ichidagi qiymatni yangilash
    }));
  };

  const selectChange = ({ name, v }) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: v, // formData ichidagi qiymatni yangilash
    }));
  };

  const handleDelete = (id) => {
    setPreparat((prevPreparat) =>
      prevPreparat.filter((item) => item.id !== id)
    );
  };

  return (
    <Container>
      <Title>{information.title}</Title>

      <ButtonWrapper>
        {information.buttonInfo.map((tab) => (
          <Item
            key={tab}
            active={activeTab === tab ? "true" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Item>
        ))}
      </ButtonWrapper>

      <Main>
        <Article>
          <Section>
            <TitleSmall>{information.subtitles[0]}</TitleSmall>
            <Section col="true">
              <ProfieBtn>
                <i className="fa-solid fa-user"></i>
              </ProfieBtn>
              <Input2
                placeholder={information.inputData.placeholder}
                onChange={handleChange}
                name="fullName"
              />
            </Section>
          </Section>

          <Section>
            <TitleSmall>{information.subtitles[1]}</TitleSmall>
            <DateRangePicker />
          </Section>

          <Section>
            <TitleSmall>{information.subtitles[2]}</TitleSmall>
            <PrimarySelect
              def={information.inputData.selectTitle}
              options={preparat}
              onValueChange={(value) => selectChange(["analitika", value])}
            />
          </Section>
        </Article>

        <Section>
          <TitleSmall>{information.drugs}</TitleSmall>
          <Article res="true">
            {preparat.map((v) => {
              return (
                <ItemWrapper>
                  <MiniTitleSmall>{v.value}</MiniTitleSmall>
                  <XICon onClick={() => handleDelete(v.id)} />
                </ItemWrapper>
              );
            })}
          </Article>
        </Section>

        <Section>
          <TitleSmall>Условия</TitleSmall>

          <Article>
            <InfoWrapper>
              <p>{"<"}= 60% квота</p>
              <Title>11%</Title>
            </InfoWrapper>
            <InfoWrapper>
              <p>75-90% квота</p>
              <Title>12%</Title>
            </InfoWrapper>
          </Article>

          <Article>
            <InfoWrapper>
              <p>{"<"}Спецусловия (лимит)</p>
              <Title>30%</Title>
            </InfoWrapper>
            <InfoWrapper>
              <p>Спецбал (лимит)</p>
              <Title>20%</Title>
            </InfoWrapper>
          </Article>
        </Section>

        <Article>
          <InfoWrapper>
            <p>{"<"}Госзакуп (лимит)</p>
            <Title>30%</Title>
          </InfoWrapper>
          <InfoWrapper>
            <p>Кабинет вакцинации</p>
            <Title>30%</Title>
          </InfoWrapper>
        </Article>

        <Button>
          <IconPlus /> {information.buttonTitle}
        </Button>
      </Main>
    </Container>
  );
};

export default CreatingContract;
