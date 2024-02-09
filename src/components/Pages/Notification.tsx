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
import { v4 as uuidv4 } from 'uuid';


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

  type Notification = {
    id: string;
    title: string | undefined;
    body: string | undefined;
  };

  const [notifications, setNotifications] = useState<Notification[]>([]);
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

      // Notif reçues en background
      PushNotifications.addListener('pushNotificationReceived',
          (notification: PushNotificationSchema) => {

              // Use functional update to ensure we're working with the latest state
            setNotifications(prevNotifications => [
                  ...prevNotifications,
                  {
                      id: uuidv4(),
                      title: notification.title,
                      body: notification.body
                  }
              ]);
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


          <ul className="list-group list-group-numbered justify-content-center">
                {notifications.map((notif) => (
                    <li key={notif.id} className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{notif.title}</div>
                            <p>{notif.body}</p>
                        </div>
                    </li>
                ))}
          </ul>



      </div>
      <Navigation sessionProp={session}/>
      </body>
    );


}

export default Notification;
