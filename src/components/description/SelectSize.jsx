import React, { useState } from "react";
import { Button } from "react-bootstrap";

const SizeButton = ({ value, setMySize, isSelected }) => {
  return (
    <Button
      variant={isSelected ? "success" : "outline-secondary"}
      onClick={() => setMySize(value)}
      style={{
        cursor: "pointer",
        borderRadius: "md",
        paddingLeft: "15px",
        paddingRight: "15px",
        marginBottom: "10px",
        marginRight: "10px", // Add margin to create a gap between buttons
      }}
    >
      {value}
    </Button>
  );
};

export const SelectSize = ({ size, setMySize }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (value) => {
    setMySize(value);
    setSelectedSize(value);
  };

  return (
    <div>
      {size?.map((value) => (
        <SizeButton
          key={value}
          value={value}
          setMySize={handleSizeClick}
          isSelected={selectedSize === value}
        />
      ))}
    </div>
  );
};
