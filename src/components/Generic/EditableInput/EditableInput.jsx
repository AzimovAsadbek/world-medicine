import React, { useState } from "react";
import { Input } from "antd";
import { EditOutlined, CheckOutlined } from "@ant-design/icons";
import { Container, IconButton, StaticText } from "./style";

const EditableInput = ({
  initialValue = "",
  isEditable = false,
  isInput = 1,
  inputType = "text",
  onSave = () => {},
}) => {
  const [value, setValue] = useState(initialValue); // Input qiymati
  const [editing, setEditing] = useState(isEditable); // Tahrirlash rejimi

  // Qiymatni o'zgartirish funksiyasi
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Tahrirlash rejimini o'zgartirish
  const toggleEditing = () => {
    if (editing) {
      onSave(value); // Saqlash funksiyasi chaqiriladi
    }
    setEditing(!editing); // Rejim o'zgartiriladi
  };

  return isInput ? (
    <Container>
      {editing ? (
        <Input
          value={value}
          className="input"
          onChange={handleChange}
          placeholder="Введите значение"
        />
      ) : (
        <StaticText>{value}</StaticText>
      )}
      <IconButton onClick={toggleEditing}>
        {editing ? (
          <CheckOutlined />
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M20.8487 8.71306C22.3844 7.17735 22.3844 4.68748 20.8487 3.15178C19.313 1.61607 16.8231 1.61607 15.2874 3.15178L14.4004 4.03882C14.4125 4.0755 14.4251 4.11268 14.4382 4.15035C14.7633 5.0875 15.3768 6.31601 16.5308 7.47002C17.6848 8.62403 18.9133 9.23749 19.8505 9.56262C19.888 9.57563 19.925 9.58817 19.9615 9.60026L20.8487 8.71306Z"
              fill="#216BF4"
            />
            <path
              d="M14.4386 4L14.4004 4.03819C14.4125 4.07487 14.4251 4.11206 14.4382 4.14973C14.7633 5.08687 15.3768 6.31538 16.5308 7.4694C17.6848 8.62341 18.9133 9.23686 19.8505 9.56199C19.8876 9.57489 19.9243 9.58733 19.9606 9.59933L11.4001 18.1598C10.823 18.7369 10.5343 19.0255 10.2162 19.2737C9.84082 19.5665 9.43469 19.8175 9.00498 20.0223C8.6407 20.1959 8.25351 20.3249 7.47918 20.583L3.39584 21.9442C3.01478 22.0712 2.59466 21.972 2.31063 21.688C2.0266 21.4039 1.92743 20.9838 2.05445 20.6028L3.41556 16.5194C3.67368 15.7451 3.80273 15.3579 3.97634 14.9936C4.18114 14.5639 4.43213 14.1578 4.7249 13.7824C4.97307 13.4643 5.26165 13.1757 5.83874 12.5986L14.4386 4Z"
              fill="#216BF4"
            />
          </svg>
        )}
      </IconButton>
    </Container>
  ) : (
    <Container>
      <StaticText>{value}</StaticText>
    </Container>
  );
};

export default EditableInput;