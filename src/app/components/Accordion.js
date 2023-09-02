import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Get a statement of purpose drafted for your study permit
            application. We will draft a custom SOP for your study visa
            application that satisfies the requirements of IRCC and looks great
            on your study permit application.{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
