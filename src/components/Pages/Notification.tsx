import React, { useEffect, useState } from "react";
import "../Body/bootstrap.min.css";
import "../Body/bootstrap.rtl.min.css";
import "../dist/bootstrap-icons.css";
import "../dist/bootstrap-icons.min.css";
import "./bootstrap.bundle.min";
import "./Acceuil.css";
import Navigation from "./Navigation";
import {PushNotifications, PushNotificationSchema, Token} from "@capacitor/push-notifications";
import {Toast} from "@capacitor/toast";
import Notification from "../../models/Notification";

function Notification() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const storedSessionString = localStorage.getItem("userSession");
    if (storedSessionString) {
      const sess = JSON.parse(storedSessionString);
      setSession(sess);
    }
  }, []);

  const showToast = async (msg: string) => {
    await Toast.show({
      text: msg
    })
  }

  const nullEntry: Notification[] = []
  const [notifications, setnotifications] = useState(nullEntry);
  const [uniqueNotif, setUniqueNotif] = useState<Notification>(
      {
    "nomUtilisateurEnvoyeur": "",
    "messageContent": "",
    "dateHeureEnvoi": ""
  });

  const register = () => {
    // Register with Apple / Google to receive push via APNS/FCM
    PushNotifications.register();

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration',
        (token: Token) => {
          showToast('Push registration success : '+JSON.stringify(token));
        }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError',
        (error: any) => {
          showToast('Error on registration: ' + JSON.stringify(error));
        }
    );

    const parseNotifStr = (notifStr : string) => {
      const notification : Notification = {
        nomUtilisateurEnvoyeur : '',
        messageContent : '',
        dateHeureEnvoi : ''
      }
      
      notifStr = notifStr.replace('{', '');
      notifStr = notifStr.replace('}', '');
      notifStr = notifStr.replace("\"", '');
      
      const attributesValues : string [] = notifStr.split(",");
      
      attributesValues.forEach(attrValue => {
        if(attrValue.split(":")[0] == 'nomUtilisateurEnvoyeur') {
          notification.nomUtilisateurEnvoyeur = attrValue.split(":")[1];
        } else if (attrValue.split(":")[0] == 'messageContent') {
          notification.messageContent = attrValue.split(":")[1];
        } else if (attrValue.split(":")[0] == 'dateHeureEnvoi') {
          notification.dateHeureEnvoi = attrValue.split(":")[1];
        }
      });

      return notification;
    }

    // Notif reçues en background
      PushNotifications.addListener('pushNotificationReceived',
          (notification: PushNotificationSchema) => {

              let parsedNotification: Notification = notification.data.data;

              const notifStr = JSON.stringify(parsedNotification);
              const notifParsed = parseNotifStr(notifStr);
              setUniqueNotif(notifParsed);
          }
      );

  }


  useEffect(()=>{
    PushNotifications.checkPermissions().then((res) => {
      if (res.receive !== 'granted') {
        PushNotifications.requestPermissions().then((res) => {
          if (res.receive === 'denied') {
            showToast('Push Notification permission denied');
          }
          else {
            showToast('Push Notification permission granted');
            register();
          }
        });
      }
      else {
        register();
      }
    });
  },[])


  //@ts-ignore
    return (
      <body className="container">
      <div className="p-3 rounded mt-3 text">
        <h1 className="h2"> Push Notifications</h1>
      </div>

      <h1 className="h3">Notifications</h1>
      <div
          className="row scrollspy-example scrollable-container mt-3 border-none"
          data-bs-offset="0">


          <ul className="list-group list-group-numbered justify-content-center ml-6 p-4">
              <li className="list-group-item">
                  <div className="d-flex justify-content-between">
                      <h6>test1@gmail.com</h6>
                      <small>ven. 6 février 2024 14:37</small>
                  </div>
                  <p>Ceci est juste un test</p>
              </li>

              <li className="list-group-item">
                  <div className="d-flex justify-content-between">
                      <h6>{uniqueNotif.nomUtilisateurEnvoyeur}</h6>
                      <small>{uniqueNotif.dateHeureEnvoi}</small>
                  </div>
                  <p>{uniqueNotif.messageContent}</p>
              </li>

              {/*
                  <li className="list-group-item">
                      <div className="d-flex justify-content-between">
                          <h6>test1@gmail.com</h6>
                          <small>ven. 6 février 2024 14:37</small>
                      </div>
                      <p>Ceci est juste un test</p>
                  </li>
                  */
              }

          </ul>

      </div>
      <Navigation sessionProp={session}/>
      </body>
    );


}

export default Notification;
