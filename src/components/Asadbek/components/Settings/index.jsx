import React, { useState } from "react";
import {
  Article,
  Button,
  ButtonWrapper,
  Datails,
  InfoPage,
  InfoTitle,
  Input,
  InputWrapper,
  Item,
  PersentTitle,
  Section,
  TableWrapper,
  Title,
  TitleWrapper,
  Wrapper,
} from "./style";
import IconPlus from "../../../../assets/svg/IconPlus";
import SearchIcon from "../../assets/svg/searchIcon";
import DateRangePicker from "../../../Generic/DataRangePicker/DataRangePicker";
import PrimarySelect from "../../../Generic/Select/Select";
import { Viloyatlar } from "../../../../mock/data";
import InfoIcon from "../../assets/svg/infoIcon";
import GenericTable from "./GenericTable";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Рецепт");
  const [selectedViloyat, setSelectedViloyat] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    city: "",
    preparation: "",
    place: "",
  });

  const information = {
    title: "Настройте условия",
    download: "Загрузить базу продаж",
    titles: ["Рецепт", "СУ", "СБ", "ГЗ", "Кабинет вакцинации"],
    inputData: {
      placeholder: "Ф.И.О.",
      city: "Район",
      preparation: "Препарат",
      kvota: "Квота:",
      kvotaValue: "56000",
    },
    info: {
      titles: [
        "Дозволено",
        "Продажа в упаковках",
        "Продано в сумах",
        "Заявлено",
      ],
      values: ["132.000.00", "48.000", "1.200.000.000", "0"],
      percent: "11%",
    },
  };
  const tableData = [
    {
      data: ["Ампициллин таб. 5/10мг №30", "1000", "900", "1700"],
      highlight: true,
      colors: {
        iconcolor: "#FB3748",
        textcolor: "black",
      },
    },
    {
      data: ["Ампициллин таб. 5/10мг №30", "1000", "900", "1700"],
      highlight: true,
      colors: {
        bgcolorr: "#FFDB43",
        textcolor: "black",
        iconcolor: "#216BF4",
      },
    },
    {
      data: ["Артрокол р-р д/ин амп.10мг/2мл №5", "XX", "XX", "XX"],
      highlight: true,
      colors: {
        bgcolorr: "#FB3748",
        iconbgcolor: "#e1858d",
        iconcolor: "white",
        textcolor: "white",
      },
    },
  ];
  const preparat = [
    {
      value: "Ношпа",
    },
    {
      value: "АЦЦ",
    },
    {
      value: "Нафтизин",
    },
    {
      value: "Терафлю",
    },
    {
      value: "Марганцовка",
    },
    {
      value: "Аспирин",
    },
    {
      value: "Анальгин",
    },
  ];

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

  const handleViloyatChange = (value) => {
    setSelectedViloyat(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{information.title}</Title>
        <Button>
          <IconPlus /> <Datails>{information.download}</Datails>
        </Button>
      </TitleWrapper>
      <ButtonWrapper>
        {information.titles.map((tab) => (
          <Item
            key={tab}
            active={activeTab === tab ? "true" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Item>
        ))}
      </ButtonWrapper>

      <InfoPage>
        <ButtonWrapper onSubmit={handleSubmit}>
          <InputWrapper>
            <Input
              placeholder={information.inputData.placeholder}
              onChange={handleChange}
              name="fullName"
            />
            <SearchIcon onClick={() => {}} />
          </InputWrapper>
          <PrimarySelect
            def={information.inputData.city}
            options={Viloyatlar}
            onValueChange={handleViloyatChange}
          />

          <PrimarySelect
            def={information.inputData.preparation}
            options={preparat}
            onValueChange={(value) => selectChange(["place", value])}
          />
          <DateRangePicker />
          <InputWrapper>
            <p>{information.inputData.kvota}</p>
            <p>{information.inputData.kvotaValue}</p>
          </InputWrapper>
        </ButtonWrapper>

        <Section>
          {information.info.titles.map((v, i) => {
            return (
              <Article key={i}>
                <InfoTitle>
                  <p>{v}</p>
                  <InfoIcon />
                </InfoTitle>
                <span>
                  <PersentTitle
                    color={information.info.values[i] == 0 ? "true" : ""}
                  >
                    {information.info.values[i]}{" "}
                  </PersentTitle>
                  <PersentTitle val="true">
                    {i == 0 && information.info.percent}
                  </PersentTitle>
                </span>
              </Article>
            );
          })}
        </Section>
      </InfoPage>
      <TableWrapper>
        <GenericTable
          thead={["Препараты", "Выписано", "Дозволено", "Продано"]}
          data={tableData}
        />
      </TableWrapper>
    </Wrapper>
  );
};

export default Settings;
