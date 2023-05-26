import {
  IonContent,
  IonHeader,
  IonPage,
  IonLabel,
  IonImg,
  IonFooter,
  IonToolbar,
  IonTitle,
  IonRouterLink,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";
import { useState } from "react";
import React from 'react';
import { IonIcon } from '@ionic/react';
import { heart, home, logoIonic, person } from 'ionicons/icons';

const Tab3: React.FC = () => {

  let [userInfo,setUserInfo] = useState({
    name:"",
    password:"",
    conpassword:"",
    email:"",
  })
  const submit = ()=> {

    console.log("user--->0,",userInfo)

    localStorage.setItem("user_login",JSON.stringify(userInfo))

    let user = JSON.parse(localStorage.getItem("user_login") as any);

    console.log("item i got when i save --->000",user.email)  

    console.log("userInfo.password.toLowerCase()---->0,0,",userInfo.password.toLowerCase())
    console.log("userInfo.conpassword.toLowerCase()---->0,0,",userInfo.conpassword.toLowerCase())

    const validpass = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (!validpass.test(userInfo.password)) {
      console.log('Invalid password. Password should contain at least one letter, one number, and be at least 8 characters long.');
      
      alert("Invalid password. Password should contain at least one letter, one number, and be at least 8 characters long.")
      return;
    }else if (userInfo.password.toLowerCase() != userInfo.conpassword.toLowerCase()){
      console.log("Invalid password!");
      
      alert("Invalid password")
    }else if(userInfo.password.toLowerCase() === userInfo.conpassword.toLowerCase()){
      localStorage.setItem("user_login",JSON.stringify(userInfo))

      let user = JSON.parse(localStorage.getItem("user_login") as any);

      console.log("Password valid");
      
      window.location.href="Tab1"
    } 
    
  }
  return (
    
    
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense"></IonHeader>
        <IonLabel id="Register">Register</IonLabel>
        <IonImg src="\assets\icon\logo.png" id="img"></IonImg>
        <br />
        <IonLabel id="email">Email</IonLabel>
        <br />
        <input type="email" id="User" name="User" placeholder="Enter Email" onChange={(e)=>{
          setUserInfo({
            ...userInfo,
            email:e.target.value
          })
        }}/>
        <br />
        <IonLabel id="pass">Password</IonLabel>
        <br />
        <input
          type="password"
          id="Password"
          name="Password"
          placeholder="Enter Password"
          onChange={(e)=>{
            setUserInfo({
              ...userInfo,
              password:e.target.value
            })
          }}/>
        <br />
        <IonLabel id="conpass">Confirm Password</IonLabel>
        <br />
        <input
          type="password"
          id="ConPassword"
          name="ConPassword"
          placeholder="Confirm Password"
          onChange={(e)=>{
            setUserInfo({
              ...userInfo,
              conpassword:e.target.value
            })
          }}/>
          <input type="button" id="btn" value="Submit" onClick={()=> {
            submit()
          }} />
      </IonContent>
      <IonFooter color="dark" className="footer" >
        <IonToolbar >
          <a href="tab2">
      <IonIcon className="icons" icon={home} size="large"></IonIcon> &nbsp; &nbsp; &nbsp;
      </a>
      <IonIcon className="icons"  icon={person} size="large" color="primary"></IonIcon> &nbsp; &nbsp; &nbsp;
      <IonIcon className="icons"  icon={heart} size="large" ></IonIcon> &nbsp; &nbsp; &nbsp;
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Tab3;
