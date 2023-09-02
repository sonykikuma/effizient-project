"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

export default function Cart() {
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  //<Tooltip title={<span>{["Line one.",<br />,"Line two."]}</span>}>

  return (
    <>
      <LightTooltip
        title={
          <span>{["Your Cart", <br />, <br />, "Your Cart is empty"]}</span>
        }
      >
        {" "}
        <IconButton>
          {" "}
          <ShoppingCartOutlinedIcon />
        </IconButton>
      </LightTooltip>
    </>
  );
}

{
  /* <Box
sx={{
  width: "100%",
  maxWidth: 500,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
  gap: 2,
}}
>
<Card>
  <CardContent>
    <Typography level="title-md">Your Cart </Typography>
    <Typography>Your cart is empty</Typography>
  </CardContent>
</Card>
</Box> */
}

//        <Button sx={{ m: 1 }}>
// Default Width [300px]
// </Button>
