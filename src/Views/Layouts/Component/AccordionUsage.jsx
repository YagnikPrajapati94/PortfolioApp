import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage({ServiceTitle,Summary}) {
  return (
    <>
      <div className="col-12 my-2">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" className='fs-4'>{ServiceTitle}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className='m-0 fs-5 text-secondary'>{Summary}</p>
        </AccordionDetails>
      </Accordion>
      </div>
    </>
  );
}
