import { Box, Container } from "@mui/material";
import PointsSection from "./pointsSection";
import TextPromotion from "./textPromotion";
import { useState } from "react";
import Sidebar from "./sidebar";
import CustomerPointsList from "./customerPointsList";

export default function Dashboard() {
  const [selectedComponent, setSelectedComponent] =
    useState<string>("Dashboard");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Transactions":
        return <TextPromotion />;
      case "Customers":
        return <CustomerPointsList />;
      case "textPromotion":
        return <TextPromotion />;
      default:
        return <PointsSection />;
    }
  };
  return (
    <>
      <Sidebar
        onSelect={setSelectedComponent}
        selectedComponent={selectedComponent}
      />
      <Box component="main">
        <Container>{renderComponent()}</Container>
      </Box>
    </>
  );
}
