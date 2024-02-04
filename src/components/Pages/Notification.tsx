import React, { useEffect, useState } from "react";
import "../Body/bootstrap.min.css";
import "../Body/bootstrap.rtl.min.css";
import "../dist/bootstrap-icons.css";
import "../dist/bootstrap-icons.min.css";
import "./Acceuil.css";
import Navigation from "./Navigation";
import { PushNotificationSchema, PushNotifications, Token, ActionPerformed } from '@capacitor/push-notifications';
import { Toast } from "@capacitor/toast";
import {
    IonButton,
    IonFooter,
    IonHeader, IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonPage, IonText,
    IonTitle,
    IonToolbar
} from "@ionic/react";

function Notification() {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const storedSessionString = localStorage.getItem("userSession");
        if (storedSessionString) {
            const sess = JSON.parse(storedSessionString);
            setSession(sess);
        }
    }, []);

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
                showToast('Push Notification désactivé');
            }
        });
    },[])

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

    const showToast = async (msg: string) => {
        await Toast.show({
            text: msg
        })
    }

    const nullEntry: any[] = []
    const [notifications, setnotifications] = useState(nullEntry);

    return (
        <IonPage className="container">
            <IonHeader className="p-3 rounded mt-3 text">
                <IonToolbar color="primary">
                    <IonTitle slot="start" className="h2"> Push Notifications</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonListHeader mode="ios" lines="full">
                <IonLabel className="h3">Notifications</IonLabel>
            </IonListHeader>
            <div
                className="row scrollspy-example scrollable-container mt-3 border-none"
                data-bs-offset="0">

                {
                    notifications.length !== 0 &&
                    <IonList className="list-group list-group-numbered justify-content-center ml-6 p-4">
                        {
                            notifications.map((notif: any) =>
                                <IonItem key={notif.id}>
                                    <IonLabel className="list-group-item d-flex justify-content-center align-items-center">
                                        <IonText className="ms-2 me-auto">
                                            <h3 className="notif-title">{notif.title}</h3>
                                        </IonText>
                                        <p>{notif.body}</p>
                                        {notif.data && <p>From: {notif.data.nomUtilisateurEnvoyeur}</p>}
                                        {notif.data && <p>Sent: {notif.data.dateHeureEnvoi}</p>}
                                        {notif.type==='foreground' && <p>This data was received in foreground</p>}
                                        {notif.type==='action' && <p>This data was received on tap</p>}
                                    </IonLabel>
                                </IonItem>
                            )
                        }
                    </IonList>
                }

            </div>
            <Navigation sessionProp={session}/>
  </IonPage>
  );
}
export default Notification;
