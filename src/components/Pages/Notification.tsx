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

  const nullEntry: any[] = []
  const [notifications, setnotifications] = useState(nullEntry);


  const register = () => {
    console.log('Initializing HomePage');

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

    // Notif reçues en background
    PushNotifications.addListener('pushNotificationReceived',
        (notification: PushNotificationSchema) => {
          let parsedNotification = JSON.parse(notification.data.body);
          setnotifications(notifications => [...notifications, { ...notification, id: notification.id, title: parsedNotification.titre, body: parsedNotification.messageContent, dateTime: parsedNotification.dateHeureEnvoi, type: 'foreground' }])
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


  return (
      <body className="container">
      <div className="p-3 rounded mt-3 text">
        <h1 className="h2"> Push Notifications</h1>
      </div>

      <h1 className="h3">Notifications</h1>
      <div
          className="row scrollspy-example scrollable-container mt-3 border-none"
          data-bs-offset="0">

        {
            notifications.length !== 0 &&
            <ul className="list-group list-group-numbered justify-content-center ml-6 p-4">
              {
                notifications.map((notif: any) =>
                    <li key={notif.id}>
                      <div className="list-group-item d-flex justify-content-center align-items-center">
                        <p>{notif.body}</p>
                        {notif.data && <p>De : {notif.data.nomUtilisateurEnvoyeur}</p>}
                        {notif.data && <p>À: {notif.data.dateHeureEnvoi}</p>}
                      </div>
                    </li>
                )
              }
            </ul>
        }

      </div>
      <Navigation sessionProp={session}/>
      </body>
  );



}
export default Notification;
