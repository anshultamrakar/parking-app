import React from 'react'
import {  TextField } from '@material-ui/core';
import { Grid, Button , Box} from '@material-ui/core';
import {Link} from "react-router-dom"



type FormData = {
    registration : string ,
    time : string
}


interface Props {
    parkingSlots: number[];
    form : FormData ;
    open : boolean;
    setPrice :React.Dispatch<React.SetStateAction<number>>;
    setOpen :  React.Dispatch<React.SetStateAction<boolean>>;
    setForm : React.Dispatch<React.SetStateAction<{
        registration: string;
        time: string;
    }>>;
    handleSubmit2 : (e: React.FormEvent) => void;
}


const Layout = ({handleSubmit2, parkingSlots , form, setForm , setPrice , setOpen } :Props) => {

  



    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
       const {name , value } = e.target
       setForm ({...form, [name] : value })
    }
 

    const handleOpen = (item : any) => {
     let exitTime =  new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
     let arriveTime = item.id ? item.time : item
     const newArrivetime =  arriveTime.split(":");
     const newExitTime =  exitTime.split(":")
    const totaltime = Number(newExitTime[0]) - Number(newArrivetime[0])
     if(totaltime < 2 ){
     setPrice(10)
    }else{
     setPrice((totaltime - 1) * 10)
    }
     setOpen(true)
    } 


  return (
    <div>
        <Grid  container style = {{padding : "3%", gap : "20px"}} direction= "row" justifyContent="center" alignItems="center" > 
            {parkingSlots.map((item : any)=> (
                <Link  key = {item.id}  style = {{pointerEvents : item.isAlloted ? "auto": "none", textDecoration : "none"}}  to = {`/layout/${item.id}`}>
                 <Box 
                
               style={{lineHeight: "50px", textAlign: "center", border : "1px solid black", backgroundColor: item.isAlloted ? "green" : "grey"  ,color:"#000", margin: "0px 15px"}}
               sx={{
                 width: 50,
                 height: 50,
               }}
               id = "parking-drawing-space"
               onClick={() => handleOpen(item)}
               >
                 {item.id}
                 </Box>
                </Link>
              
            ))}
        </Grid> 
        <form onSubmit={handleSubmit2}>
            <Grid className = "inputs" style = {{marginTop : "50px", gap : "30px" }} container direction= "column" justifyContent="center" alignItems="center"   >
           <Grid>
               <TextField onChange = {handleChange}   name = "registration" value = {form.registration}  autoFocus autoComplete='off' id = "parking-drawing-registration-input" label = "Enter car registration no." required/>
           </Grid>
           <Grid>
               <TextField  style = {{width : "150px"}}  name = "time" onChange = {handleChange} value = {form.time}  id="time" label = "Arrive time" type="time" />
           </Grid>
           <Grid>
               <Button  id = "parking-drawing-add-car-button" variant="contained" color="secondary" type = "submit">Submit</Button>
           </Grid>
           </Grid>
        </form>
    </div>
  )
}

export default Layout

