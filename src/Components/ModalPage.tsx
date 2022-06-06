import React from 'react'
import { Button , Modal,Typography, Box, Grid} from '@material-ui/core';
import { useParams , useNavigate } from 'react-router-dom';




const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };



  type PaymentResponse = {
    registration: string;
    charges: number;
  };

interface Props {
  open : boolean;
  price : number;
  parkingSlots : any;
}



const ModalPage = ({open, price, parkingSlots} :  Props) => {
let {slotID} = useParams()
console.log(slotID)
let navigate = useNavigate()


const handleBack = () => {
        navigate('/layout')
}


const handlePayment = async (slotID: string | undefined) => {
    const newArray = parkingSlots.filter((x : any) => x.id == slotID)
    
  
  const response = await fetch('https://httpstat.us/200', {
    method : "POST",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body : JSON.stringify(newArray)
  })

  let data = await response.json()
   if (response.status === 200)
   {
     if(newArray.length > 0){
      let newData = newArray[0].isAlloted = false;
      console.log("new data",newData)
      
     }
     
     console.log(data)
   }
  



}

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4"> Calculate Price</Typography>
          <Typography variant="h6">Total Price : $ {price}</Typography>
         <hr/>
         <Grid>
             <Button variant="contained" color="secondary" onClick = {handleBack}>Back </Button>
             <Button style = {{marginLeft : "10px"}} variant="contained" color="secondary" onClick = {() => handlePayment(slotID)}>Payment taken</Button>
         </Grid>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalPage

function isAlloted(isAlloted: any) {
  throw new Error('Function not implemented.');
}
