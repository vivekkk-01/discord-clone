import { styled } from "@mui/system";
import React from "react";

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  margin: ".5rem 0",
});

const Label = styled("p")({
  color: "#b9bbbe",
  textTransform: "uppercase",
  fontWeight: 600,
  fontSize: "16px",
});

const Input = styled("input")({
  flexGrow: 1,
  height: "40px",
  border: "1px solid black",
  borderRadius: "5px",
  color: "#dcddde",
  background: "#35393f",
  margin: 0,
  fontSize: "16px",
  padding: "0 5px",
  margin: ".25rem 0",
});

const InputWithLabel = ({ value, setValue, placeholder, type, label }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={handleChange}
        placeholder={placeholder ? placeholder : ""}
        type={type ? type : "text"}
      />
    </Wrapper>
  );
};

export default InputWithLabel;
