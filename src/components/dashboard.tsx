import { Container } from "@mui/material";
import CustomerPointsList from "./customerPointsList";
import PointsDashboard from "./pointsSection";
import WelcomeCard from "./welcomCard";
import TextPromotion from "./textPromotion";

export default function Dashboard() {
  return (
    <Container
      sx={{
        padding: 3,
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <WelcomeCard />
      <PointsDashboard />
      <CustomerPointsList />
      <TextPromotion />
    </Container>
  );
}
