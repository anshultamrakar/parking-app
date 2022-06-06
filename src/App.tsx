import React from "react";
import { useState } from "react";
import Header from "./Components/Header";
import SpaceInput from "./Components/SpaceInput";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Layout from "./Components/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalPage from './Components/ModalPage'






const App: React.FC = () => {
  let navigate = useNavigate();
  const [userInput, setUserInput] = useState<string>("");
  const [form, setForm] = useState<{ registration: string; time: string }>({
    registration: "",
    time: "",
  });
  const [parkingSlots, setParkingSlots] = useState<any>([]);
  const [open , setOpen] = useState<boolean>(false)
  const [price , setPrice ] = useState<number>(20)




  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let data = [];
    for (let i = 1; i <= Number(userInput); i++) {
      data.push({ id: i, isAlloted: false });
    }
    navigate("/layout" );
    setParkingSlots(data);
    console.log(data);
  };



  const handleSubmit2 = (e: React.FormEvent) => {
    e.preventDefault();
    let randomNum = parkingSlots[Math.floor(Math.random() * parkingSlots.length)];
    const slotBooked = parkingSlots.map((item: any) => {
      if (item === randomNum) {
        if (item.isAlloted !== true) {
          return {
            ...item,
            isAlloted: true,
            registration: form.registration,
            time: form.time
          };
        } else{
          const notify = () => toast("Please select another slot ");
          notify();
          return { ...item };
        }
      } else {
        return item;
      }
    });

    console.log(slotBooked)
    setParkingSlots(slotBooked);
    setForm({ registration: "", time: "" });
  };


  return (
     <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <SpaceInput
              userInput={userInput}
              setUserInput={setUserInput}
              handleSubmit={handleSubmit}
            />
          }
        />
      <Route path = "layout">
        <Route index element = {<Layout 
              handleSubmit2={handleSubmit2}
              parkingSlots={parkingSlots}
              form={form}
              setForm={setForm}
              open = {open} setOpen = {setOpen}
              setPrice = {setPrice}
              />}/>
              <Route path = ":slotID" element = {<ModalPage open = {open} price = {price} parkingSlots = {parkingSlots}/>}/>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
   
  );
};

export default App;



