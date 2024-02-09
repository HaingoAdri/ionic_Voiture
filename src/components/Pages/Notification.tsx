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
    nomUtilisateurEnvoyeur: "",
    messageContent: "",
    dateHeureEnvoi: ""
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

/*
      const parseNotifStr = (notifStr : string) => {
          const notification : Notification = {
              nomUtilisateurEnvoyeur : '',
              messageContent : '',
              dateHeureEnvoi : ''
          }

          notifStr = notifStr.replace('{', '');
          notifStr = notifStr.replace('}', '');
          notifStr = notifStr.replace("\"", '');

          alert(JSON.stringify(notifStr));
          const attributesValues : string [] = notifStr.split(",");
          alert(JSON.stringify(attributesValues));

          attributesValues.forEach(attrValue => {
              if(attrValue.split(":")[0] == 'nomUtilisateurEnvoyeur') {
                  notification.nomUtilisateurEnvoyeur = attrValue.split(":")[1];
                  alert(notification.nomUtilisateurEnvoyeur);
              } else if (attrValue.split(":")[0] == 'messageContent') {
                  notification.messageContent = attrValue.split(":")[1];
                  alert(notification.messageContent);
              } else if (attrValue.split(":")[0] == 'dateHeureEnvoi') {
                  notification.dateHeureEnvoi = attrValue.split(":")[1];
                  alert(notification.dateHeureEnvoi);
              }
          });

          return notification;
      }

*/

      // Notif reçues en background
      PushNotifications.addListener('pushNotificationReceived',
          (notification: PushNotificationSchema) => {

              alert(JSON.stringify(notification.data.data));

              //alert(parsedNotification.nomUtilisateurEnvoyeur+" "+parsedNotification.messageContent+" "+parsedNotification.dateHeureEnvoi);

              //const str = JSON.stringify(notification.data.data);
              //const parsed = JSON.parse(str);
              //alert(str+" \n "+parsed.nomUtilisateurEnvoyeur+" "+parsed.messageContent+" "+parsed.dateHeureEnvoi);
              //alert(JSON.stringify(notification.data.data.nomUtilisateurEnvoyeur) + " : " + notification.data.data.messageContent + " : " + notification.data.data.dateHeureEnvoi);

              /*
              // Use functional update to ensure we're working with the latest state
              setnotifications(prevNotifications => [
                  ...prevNotifications,
                  {
                      "nomUtilisateurEnvoyeur": parsedNotification.nomUtilisateurEnvoyeur,
                      "messageContent": parsedNotification.messageContent,
                      "dateHeureEnvoi": parsedNotification.dateHeureEnvoi
                  }
              ]);
*/
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
                {notifications.map((notif, index) => (
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{notif.nomUtilisateurEnvoyeur}</div>
                            {notif.messageContent}
                        </div>
                        <span className="badge bg-primary rounded-pill">{notif.dateHeureEnvoi}</span>
                    </li>
                ))}
          </ul>



      </div>
      <Navigation sessionProp={session}/>
      </body>
    );


}

export default Notification;
