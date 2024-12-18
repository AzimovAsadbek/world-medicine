import React, { useState } from "react";
import {
  Button,
  FormWrapper,
  IconSection,
  IconWrapper,
  InputWraper,
  Section,
  SubTitle,
  Datails,
  Title,
  TitleWrapper,
  Wrapper,
} from "./style";
import AdminNavbar from "../navbar/admin/navbar";
import IconPlus from "../../assets/svg/IconPlus";
import Man from "../../assets/svg/Man";
import Input2 from "../Generic/Input/Input2";
import PrimarySelect from "../Generic/Select/Select";
import { Tumanlar, Viloyatlar } from "../../mock/data";
import Restart from "../../assets/svg/restart";
import Copy from "../../assets/svg/copy";

const AddMeneger = () => {
  const formDataLabels = {
    title: "Добавить менеджера",
    download: "Загрузить базу менеджеров",
    komu: "Кому",
    fullName: "Ф.И.О. менеджера",
    region: "Регион",
    city: "Город",
    district: "Район",
    contactData: "Контактные данные менеджера",
    workplace: "Место работы",
    email: "Почта",
    phone: "Телефон",
    temporaryPassword: "Временный пароль",
    isAdmin: "Добавить администратора",
  };

  const [formData, setFormData] = useState({
    fullName: "",
    region: "",
    city: "",
    district: "",
    contactData: "",
    workplace: "",
    email: "",
    phone: "",
    temporaryPassword: "",
    isAdmin: false,
  });
  const [tuman, setTuman] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target; // Inputning 'name' va 'value' qiymatlarini olish
    setFormData({
      ...formData,
      [name]: value, // 'name'ga qarab formData yangilanadi
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSelectChange = (value) => {
    setTuman(Tumanlar[value]);
    setFormData({
      ...formData,
      region: value, // regionni yangilash uchun qiymatni saqlash
    });
  };

  return (
    <div>
      <AdminNavbar />
      <Wrapper>
        <TitleWrapper>
          <Title>{formDataLabels.title}</Title>
          <Button>
            <IconPlus /> <Datails>{formDataLabels.download}</Datails>
          </Button>
        </TitleWrapper>
        <FormWrapper onSubmit={handleSubmit}>
          <SubTitle>{formDataLabels.komu}</SubTitle>
          <Section now={"true"}>
            <IconWrapper>
              <Man />{" "}
            </IconWrapper>
            <Input2
              type="text"
              name="fullName" // name qiymati state kalitiga mos bo‘lishi kerak
              value={formData.fullName}
              onChange={handleChange}
              placeholder={formDataLabels.fullName}
            />
          </Section>

          <SubTitle>{formDataLabels.region}</SubTitle>
          <Section>
            <PrimarySelect
              def={formDataLabels.city}
              options={Viloyatlar}
              onValueChange={handleSelectChange}
            />
            <PrimarySelect
              def={formDataLabels.district}
              options={tuman}
              onValueChange={handleSelectChange}
            />
          </Section>

          <SubTitle>{formDataLabels.contactData}</SubTitle>
          <Section>
            <Input2
              type="text"
              name="region" // 'region' nomini ishlating
              value={formData.region}
              onChange={handleChange}
              placeholder={formDataLabels.email}
            />
            <Input2
              type="number"
              name="phone"
              placeholder={"+998 "}
              onChange={handleChange}
            />
          </Section>
          <SubTitle>{formDataLabels.temporaryPassword}</SubTitle>
          <Section>
            <InputWraper>
              <Input2
                type="password"
                name="temporaryPassword"
                value={formData.temporaryPassword}
                onChange={handleChange}
                placeholder={formDataLabels.temporaryPassword}
              />
              <IconSection>
                <Restart onClick={() => {}} />
                <Copy
                  onClick={() => {
                    const password = formData.temporaryPassword;
                    navigator.clipboard.writeText(password);
                  }}
                />
              </IconSection>
            </InputWraper>
          </Section>
          <Button>{formDataLabels.isAdmin}</Button>
        </FormWrapper>
      </Wrapper>
    </div>
  );
};

export default AddMeneger;
