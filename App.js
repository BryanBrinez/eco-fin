import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./firebase-config";
import MyStack from "./src/utils/MyStack";
import { createNotificationChannel } from "./src/utils/firebase/createNotificationChannel";



export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("user", user);
      setUser(user);
    });
    
    createNotificationChannel();
  }, []);
  return (
    
      <NavigationContainer>
        <MyStack user={user} />
      </NavigationContainer>
    
  );
}
