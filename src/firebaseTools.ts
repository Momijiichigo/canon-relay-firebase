import { initializeApp } from "firebase/app"
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage'

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyBWTYavpftVjt6od4XxFXj8ifigmx15xUo",
  authDomain: "canon-guitar-relay-test.firebaseapp.com",
  projectId: "canon-guitar-relay-test",
  storageBucket: "canon-guitar-relay-test.appspot.com",
  messagingSenderId: "295423601931",
  appId: "1:295423601931:web:732a77d3be6b162eef060e"
});

const strageRef = ref(getStorage(firebaseApp))

export const checkIfRoomExists = (roomId: string): boolean => {

}
export const addRoomMate = (roomId: string, email: string): boolean => {

}

export const uploadFiles = (roomId: string, path: string, file: File) => new Promise((resolve, reject)=>{
  uploadBytesResumable(ref(strageRef, `${roomId}/${path}`), file).then(resolve, reject)
})
