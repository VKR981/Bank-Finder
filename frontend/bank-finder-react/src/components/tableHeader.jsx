import React from "react";
import { Checkbox } from "semantic-ui-react";

const TableHeader = ({ data, setShowFavorites, showFavorites }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      <div
        style={{
          fontSize: "16px",
          marginRight: "50px",
          fontStyle: "italic",
          fontWeight: "700",
        }}
      >
        Results: {data.count}
      </div>
      <div
        style={{
          fontSize: "16px",
          marginRight: "10px",
          fontStyle: "italic",
          fontWeight: "700",
        }}
      >
        Favorites
      </div>
      <Checkbox
        slider
        value={showFavorites}
        onChange={(e, d) => {
          setShowFavorites(d.checked);
        }}
      />
    </div>
  );
};

export default TableHeader;
