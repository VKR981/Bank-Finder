import React from "react";
import { Select } from "semantic-ui-react";

export default function SelectField({ value, onChange }) {
  const countryOptions = [
    { key: "bg", value: "Banglore", text: "Banglore" },
    { key: "hd", value: "Hyderabad", text: "Hyderabad" },
    { key: "cn", value: "Chennai", text: "Chennai" },
    { key: "kc", value: "Kochi", text: "Kochi" },
    { key: "mb", value: "Mumbai", text: "Mumbai" },
    { key: "bg", value: " ", text: "All" },
  ];

  return (
    <Select
      className="select"
      placeholder="Select a city"
      options={countryOptions}
      value={value}
      onChange={onChange}
    />
  );
}
