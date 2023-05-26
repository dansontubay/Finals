import {
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonLabel,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { SetStateAction, useEffect, useState } from 'react';
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const [user, setUser] = useState({
      name:"",
      password:"",
      conpassword:"",
      email:"",
    });
  const Submit = () => {
    
    // get user from localstorage
    // compare credential
    //if not equal, alert no account is found
    // if equal, proceed to main tab sample code ====>  window.location.href ="/Tab2"

    const storedUser = localStorage.getItem('user_login');

    
    const enteredUsername = user.email;
    const enteredPassword = user.password;
    
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
    
      if (
        parsedUser.email === enteredUsername &&
        parsedUser.password === enteredPassword
      ) {
       
        window.location.href = '/Tab2';
      } else {
        
        alert('No account found.');
      }
    }

  }
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense"></IonHeader>
        <IonLabel id="login">Login</IonLabel>
        <IonImg src="\assets\icon\logo.png" id="image"></IonImg>
        <br />
        <IonLabel id="Email">Email</IonLabel>
        <br />
        <input type="email" id="user" name="User" placeholder="Enter Email" onChange={(e)=>{
          setUser({
            ...user,
            email:e.target.value
          })
        }}/>
        <br />
        <IonLabel id="Pass">Password</IonLabel>
        <br />
        <input
          type="password"
          id="password"
          name="Password"
          placeholder="Enter Password"
          onChange={(e)=>{
            setUser({
              ...user,
              password:e.target.value
            })
          }}
        />
        <br />
          <input type="button" id="btnl" value="Submit" onClick={()=>{
            
            Submit()
            
            }}/>

        <IonLabel id="Create">
          New User?<a href="\Tab3">Createa an account</a>
        </IonLabel>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
