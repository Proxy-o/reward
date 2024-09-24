// src/components/Sidebar.tsx

import { AppBar, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import { logout } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";

interface SidebarProps {
  onSelect: (selected: string) => void;
  selectedComponent: string;
}

export default function Sidebar({ onSelect, selectedComponent }: SidebarProps) {
  const dispatch = useDispatch();
  const handleSelect = (component: string) => {
    onSelect(component);
  };
  console.log("selectedComponent", selectedComponent);
  return (
    <AppBar
      position="static"
      color="default"
      sx={{
        marginBottom: "20px",
      }}
    >
      <Toolbar>
        <ListItemButton
          onClick={() => handleSelect("PointsDashboard")}
          selected={selectedComponent === "PointsDashboard"}
        >
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton
          onClick={() => handleSelect("Customers")}
          selected={selectedComponent === "Customers"}
        >
          <ListItemText primary="Customers" />
        </ListItemButton>
        <ListItemButton
          onClick={() => handleSelect("textPromotion")}
          selected={selectedComponent === "textPromotion"}
        >
          <ListItemText primary="Send promotion" />
        </ListItemButton>
        <ListItemButton
          onClick={() => handleSelect("Logout")}
          sx={{
            backgroundColor: "#003459",
            ":hover": {
              backgroundColor: "#335c67",
            },
            borderRadius: "5px",
            textAlign: "center",
            maxWidth: "10%",
            color: "white",
          }}
        >
          {/* icon */}

          <ListItemText primary="Logout" onClick={() => dispatch(logout())} />
        </ListItemButton>
      </Toolbar>
    </AppBar>
  );
}
