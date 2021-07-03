import { firebaseApp } from "../../firebaseTools";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import firebaseui from "firebaseui"

const auth = getAuth(firebaseApp);
const ui = new firebaseui.auth.AuthUI(auth);


export default () => {
  const self = <div>

  </div>
  ui.start(self, {
    signInOptions: [
      // List of OAuth providers supported.
      GoogleAuthProvider.PROVIDER_ID,
    ],
    // Other config options...
  });
  return self
}
