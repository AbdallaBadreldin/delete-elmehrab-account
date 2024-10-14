import React from 'react';
import { auth } from '../firebaseConfig';
import { deleteUser, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { getFirestore, doc, deleteDoc } from 'firebase/firestore';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';


const Delete = () => {
   signOut(auth);
    const user = auth.currentUser;
    const db = getFirestore();
    // const userDocRef = doc(db, 'users', user.uid);
// Function to set up reCAPTCHA verifier
const navigate = useNavigate();
function handleNavigation(){
navigate('/');
}


const handleDeleteAccount = async () => {
    if (user) {
      try {
        // Re-authenticate if needed (e.g., with email/password)
        // const credential = EmailAuthProvider.credential(user.email, 'USER_PASSWORD');

        // Delete user
        // await deleteUser( reauthenticateWithPhoneNumber (user.phoneNumber));
        deleteUser(user)
      
        alert('Account deleted successfully');
        handleNavigation()
      } catch (error) {
        console.error('Error deleting account:', error);
        alert('Error deleting account');
      }
    } else {
      alert('No user is currently signed in');
    }
  };

  return (
    <div>
      <h2>Are you sure to Delete Account "  {auth.currentUser.phoneNumber} " ?</h2>
      <button onClick={handleDeleteAccount}>Delete My Account</button>
<br/>
<br/>
<br/>
<br/>
<div id="recaptcha-container"></div>
<br/>
<br/>
<br/>

      <h2>Delete Another Account</h2>
      <button onClick={handleDeleteAccount}>Delete My Account</button>
    </div>
  );
};

export default Delete;