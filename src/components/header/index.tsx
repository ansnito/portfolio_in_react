import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ backgroundColor: "secondary.main", boxShadow: "none" }}
        position="static"
      >
        <Box sx={{ display: "flex", flexDirection: "row", pt: 1, pl: 2 }}>
          <Box flex={6} flexDirection='row' display='flex'>
            {/* FIRST PART */}
            <Typography
              sx={{ fontWeight: 700, textTransform: "uppercase" }}
              variant="subtitle1"
              color="text.primary"
            >
              ans
            </Typography>
            <Typography
              sx={{ fontWeight: 700, textTransform: "uppercase" }}
              variant="subtitle1"
              color="primary.main"
            >
              nito
            </Typography>
          </Box>
          <Box flex={6}>{/* SECOND PART */}</Box>
        </Box>
      </AppBar>
    </Box>
  );
}

// sx inline styling
// mui system
