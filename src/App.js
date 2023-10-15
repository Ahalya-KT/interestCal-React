
import { Button, Stack, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {

  //creating state to store principle values
  const[principle,setPrinciple]=useState("")

  //creating state to store rate values
  const[rate,setRate]=useState("")

  //creating state to store time period
  const[year,setYear]=useState("")

  //creating state to store inrerest
  const[interest,setInterest]=useState(0)

  
  const calculateInterest=(e)=>{
    //to prevent automatic reload we use preventDefault()
    e.preventDefault()
    console.log(principle,rate,year);

    //if no value in the input boxes giving an if condition 
    if(!principle || !rate || !year){
      alert('please fill the form completely')
    }
    else{
      setInterest(principle*rate*year/100)
    }

  }
 
  //function for resetForm
  const resetForm=()=>{
    setPrinciple("")
    setRate("")
    setInterest(0)
  }


  return (
    <>
      <div className="app">

        <div className='container'>

          {/* heading */}
          <div className='heading-text'>
            <h3 className='title'>SIMPLE INTERST CALCULATOR</h3>
            <p className='title-para'>CALCULATE YOUR SIMPLE INTEREST</p>
           

          </div>

          {/* card */}
          <div className='amount-card'>
            <div className='card-text'>
              {/* setting value to zero using{} */}
              <h3 className='total-amount'>₹{interest}</h3>
              <p className='total-para'>TOTAL SIMPLE INTEREST</p>
            </div>

          </div>

          <form onSubmit={calculateInterest}>
             {/* to hold text field */}
            <div className='text-fields'>

               {/* principle amount */}
              
              <div className='input'>
              <TextField value={principle ||""} onChange={e=>setPrinciple(e.target.value)}
               className="outlined-basic" id="outlined-basic" label="Principle Amount" variant="outlined" />
              </div>

              {/* interest */}
              <div className='input'>
              <TextField onChange={e=>setRate(e.target.value)}
              className="outlined-basic" id="outlined-basic" label="Rate Of Interest (p.a)%" variant="outlined" />
              </div>

              {/* year */}
              <div className='input'>
              <TextField onChange={e=>setYear(e.target.value)}
               className="outlined-basic" id="outlined-basic" label="Time Period" variant="outlined" />
              </div>

            </div>

            {/* button */}
            <div className='btn-group'>
            <Stack direction="row" spacing={2}>
            <Button className='btn' type='submit' style={{backgroundColor:'black'}} variant="contained">Calculate</Button>
            <Button className='btn'onClick={resetForm} variant="outlined">Reset</Button>
              </Stack>
            </div>

            </form>

        </div>
        
      </div>
     
    </>
  );
}

export default App;
