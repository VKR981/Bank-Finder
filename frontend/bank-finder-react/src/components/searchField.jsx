import React from "react";
import { Input } from "semantic-ui-react";

export default function SearchField({ value, onChange, status }) {
  return (
    <Input
      value={value}
      onChange={onChange}
      className="search"
      loading={status === "fetching"}
      icon="search"
      placeholder="Search..."
    />
  );
}
