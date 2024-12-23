import React from "react";
import {
  Article,
  Button,
  Container,
  InfoWrapper,
  Main,
  ProfieBtn,
  Section,
} from "./style";
import { Title, TitleSmall } from "../../../../root/style";
import Input2 from "../../../Generic/Input/Input2";
import DateRangePicker from "../../../Generic/DataRangePicker/DataRangePicker";
import PrimarySelect from "../../../Generic/Select/Select";
import { Viloyatlar } from "../../../../mock/data";
import IconPlus from "../../../../assets/svg/IconPlus";

const SelMed = () => {
  const information = {
    title: "Цель мед. представителю",
    subtitles: [
      "Кому",
      "Период выполнения",
      "Выбрать район",
      "Выбрать договор",
    ],
    inputData: {
      placeholder: "Ф.И.О. представителя",
      selectTitle: "Район",
      selectDTitle: "Договор",
    },
    terms: "Условия",
    doctors: "Охват врачей",
    contract: "Предложение договоров",
    buttonTitle: "Назначить задачу",
  };

  const handleChange = (e) => {
    const [formData, setFormData] = useState({
      fullName: "",
      city: "",
      cotract: "",
    });

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

  return (
    <Container>
      <Title>{information.title}</Title>
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
              options={Viloyatlar}
              onValueChange={(value) => selectChange(["city", value])}
            />
          </Section>

          <Section>
            <TitleSmall>{information.subtitles[3]}</TitleSmall>
            <PrimarySelect
              def={information.inputData.selectDTitle}
              options={[]}
              onValueChange={(value) => selectChange(["cotract", value])}
            />
          </Section>
        </Article>
        <Section>
          <TitleSmall>{information.terms}</TitleSmall>
          <Article>
            <InfoWrapper>
              <p>Охват врачей</p>
              <Title>40 человек</Title>
            </InfoWrapper>

            <InfoWrapper>
              <p>Предложение договоров</p>
              <Title>60</Title>
            </InfoWrapper>
          </Article>
        </Section>
        <Button>
          <IconPlus /> {information.buttonTitle}
        </Button>
      </Main>
    </Container>
  );
};

export default SelMed;
