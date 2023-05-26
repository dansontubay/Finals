import { cartOutline } from "ionicons/icons";
import {
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonLabel,
  IonButton,
  IonFooter,
  IonRouterLink,

} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";
import React from 'react';
import { IonIcon } from '@ionic/react';
import { heart, home, logoIonic, person } from 'ionicons/icons';


const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense"></IonHeader>
        
        <IonLabel id="shopname">JAL-SHOP</IonLabel>
        <div>
          <a href="https://shopee.ph/product/290040860/13380108882?gclid=Cj0KCQjwjryjBhD0ARIsAMLvnF9Mh9pWHw2YnoglWgESAHqsIq81zmEalcLBAEs3hlADxFbLZ2JxHwMaAjcKEALw_wcB">
            <IonImg src="\assets\img\MousepadF.png" id="img1"></IonImg>
          </a>
          
          <a href="https://shopee.ph/MSI-Optix-G241VC-23.6%E2%80%9D-FHD-Curved-Gaming-Monitor-i.167356732.17328518116?sp_atk=9c27d306-1484-4b84-abc5-28a5e91f1c5d&xptdk=9c27d306-1484-4b84-abc5-28a5e91f1c5d">
            <IonImg src="\assets\img\monitor.png" id="img2"></IonImg>
          </a>
          <a href="https://shopee.ph/INPLAY-M520-Usb-Wired-Rgb-Gaming-Mouse-For-Laptop-Pc-Desktop-Accessories-i.462016051.15004447689?sp_atk=6d73f739-a66d-40ad-894f-a5bfd293dfe6&xptdk=6d73f739-a66d-40ad-894f-a5bfd293dfe6">
            <IonImg src="\assets\img\mouseF.png" id="img3"></IonImg>
          </a>
          <IonImg src="\assets\img\RamF.png" id="img4"></IonImg>
          <a href="https://shopee.ph/product/164931908/7172611787?d_id=66580&utm_content=1111DPjs6bbyFdKMbMQVFNWDAo">
            
          </a>
          <a href="https://shopee.ph/Used-Sapphire-RX-580-590-RX580-2048sp-8G-8GB-D5-DUAL-FAN-AMD-Graphic-Graphics-Card-grafik-cards-stock-GPU-Ultra-platinum-aurora-i.616038984.21015120095?sp_atk=c1dcc267-7e54-4125-a4ec-2b34c2828374&xptdk=c1dcc267-7e54-4125-a4ec-2b34c2828374">
            <IonImg src="\assets\img\FanF.png" id="img5"></IonImg>
          </a>
          <a href="https://shopee.ph/product/122537847/4952707660?d_id=66580&utm_content=21YdqwJSqmXmkfXQAAusQNiHvbM9">
            <IonImg src="\assets\img\caseF.png" id="img6"></IonImg>
          </a>
          <a href="https://shopee.ph/NEW-AMD-Ryzen-5-5500-Original-Box-Brand-new-6-Cores-3.6GHz-Upto-4.2Ghz-Unlocked-AM4-Desktop-CPU-Processor-R5-i.616038984.18374845928">
            <IonImg src="\assets\img\processorF.png" id="img7"></IonImg>
          </a>
          <a href="https://shopee.ph/Asus-ROG-Phone-5S-ZS676KS-16GB-256GB-Dual-SIM-5G-Qualcomm-Snapdragon-888-6000mAh-Battery-Capacity-6.78-inches--i.92926624.3188571626?sp_atk=ce8615e4-4025-4f3b-ad6f-8ecb9d443790&xptdk=ce8615e4-4025-4f3b-ad6f-8ecb9d443790">
            <IonImg src="\assets\img\ROGF.png" id="img8"></IonImg>
          </a>
        </div>
        <IonRouterLink>
          <a href="tab1">
            <button id="buy">Back</button>
          </a>
        </IonRouterLink>
       
      </IonContent>
      <IonFooter color="dark" className="footer" >
        <IonToolbar >
          <a href="tab2">
      <IonIcon className="icons" icon={home} size="large"></IonIcon> &nbsp; &nbsp; &nbsp;
      </a>
      <IonIcon className="icons"  icon={person} size="large" color="primary"></IonIcon> &nbsp; &nbsp; &nbsp;
      <IonIcon className="icons"  icon={heart} size="large" color="primary" ></IonIcon> &nbsp; &nbsp; &nbsp;
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Tab2;
