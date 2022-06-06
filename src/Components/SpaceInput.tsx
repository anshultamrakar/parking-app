import React from 'react'
import {  TextField } from '@material-ui/core';
import { Grid, Button} from '@material-ui/core';


interface Props {
    userInput : string;
    setUserInput : React.Dispatch<React.SetStateAction<string>>
    handleSubmit : (e:React.FormEvent) => void;
}


const SpaceInput = ({userInput , setUserInput , handleSubmit} : Props) => {
  return (
    <form onSubmit = {handleSubmit}>
        <Grid container style = {{marginTop : "150px", gap : "40px"}} direction= "column" justifyContent="center" alignItems="center" >
        <Grid >
          
         <TextField style = {{width : "200px"}} inputProps={{ min : 1, max : 10  }} type = "number" autoComplete='off' id="parking-create-text-input" label = "No.of space available"  value = {userInput} 
         onChange = {(e) => setUserInput(e.target.value)} autoFocus  required/>
        </Grid>
        <Grid >
   <Button id = "parking-create-submit-button" variant="contained" color="secondary" type = 'submit'> Submit</Button>
        </Grid>
        </Grid>
   
    </form>
  )
}

export default SpaceInput