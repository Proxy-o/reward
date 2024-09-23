import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

export default function WelcomeCard() {
  const username = useSelector((state: RootState) => state.auth.username);

  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "0 auto",
        padding: 2,
        borderRadius: "16px",
        backgroundColor: "#e3f2fd",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          backgroundColor: "#bbdefb",
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            sx={{
              width: 60,
              height: 60,
              bgcolor: "#3f51b5",
              fontSize: "1.5rem",
            }}
          >
            {username ? username.charAt(0) : "U"}
          </Avatar>
          <Box>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#1e88e5" }}
            >
              Welcome, {username || "User"}!
            </Typography>
            <Typography variant="body2" color="textSecondary">
              We're glad to see you today. Let's make it a great day!
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
