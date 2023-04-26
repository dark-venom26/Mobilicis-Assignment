import "./dropdown.scss"
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));
  

function Dropdown({obj}) {
  const [expanded, setExpanded] = useState();
  const [data, setData] = useState([])

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  
  const columns = [
    { field: 'id', headerName: 'ID', type: 'number', width: 70 },
    { field: 'first_name', headerName: 'First name', width: 120 },
    { field: 'last_name', headerName: 'Last name', width: 120 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'gender', headerName: 'Gender', width: 100 },
    { field: 'income', headerName: 'Income', width: 70 },
    { field: 'city', headerName: 'City', width: 110 },
    { field: 'car', headerName: 'Car', width: 80 },
    { field: 'quote', headerName: 'Quote', width: 150 },
    { field: 'phone_price', headerName: 'Phone Price', width: 100 },
  ];


  const rows = [...data];

  useEffect(() => {
    const getData = async() => {
      const res = await axios.get(`api/v1/${obj.endpoint}`)
      setData(res.data.data)
    }

    getData()
    
  }, [obj])

  return (
      <Accordion expanded={expanded === `panel${obj.index}`} onChange={handleChange(`panel${obj.index}`)}>
      <AccordionSummary aria-controls={`panel${obj.index}d-content`} id={`panel${obj.index}d-header`}>
        <Typography>{obj.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="table">
          <DataGrid
            rows={rows}
            columns={columns}
            pagination
            pageSize={3}
            
          />
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default Dropdown

export function SpecialDropdown({obj}) {
  const [expanded, setExpanded] = useState();
  const [data, setData] = useState([])

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  
  const columns = [
    { field: 'id', headerName: 'ID', type: 'number', width: 70 },
    { field: 'first_name', headerName: 'First name', width: 120 },
    { field: 'last_name', headerName: 'Last name', width: 120 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'gender', headerName: 'Gender', width: 100 },
    { field: 'income', headerName: 'Income', width: 70 },
    { field: 'city', headerName: 'City', width: 110 },
    { field: 'car', headerName: 'Car', width: 80 },
    { field: 'quote', headerName: 'Quote', width: 150 },
    { field: 'phone_price', headerName: 'Phone Price', width: 100 },
  ];


  useEffect(() => {
    const getData = async() => {
      const res = await axios.get(`api/v1/${obj.endpoint}`)
      setData(res.data.data)
    }

    getData()
    
  }, [obj])

  return (
      <Accordion expanded={expanded === `panel${obj.index}`} onChange={handleChange(`panel${obj.index}`)}>
      <AccordionSummary aria-controls={`panel${obj.index}d-content`} id={`panel${obj.index}d-header`}>
        <Typography>{obj.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          {
            data.map((item)=>(
              <div className="specialContainer">
                <div className="specialContainer__block">
                  <span className="specialContainer__block__income">Average Income: ${item.average_income}</span>
                  <span className="specialContainer__block__city">City: {item.city}</span>
                </div>
                <DataGrid
                  rows={[...item.users]}
                  columns={columns}
                  pagination
                  pageSize={3}
                />
              </div>

            ))
          }
        </div>
      </AccordionDetails>
    </Accordion>
  )
}
