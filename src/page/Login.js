
import React, { useState } from 'react';
import { auth, database, ref, remove, onValue } from '../firebaseConfig';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { deleteUser } from 'firebase/auth';
import { storage, storageRef, deleteObject, set } from '../firebaseConfig'; // Adjust the path as needed
import { deleteDoc } from 'firebase/firestore';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const handleDeleteAccount = async () => {
    const user = auth.currentUser;

    if (!user) {
      alert('No user is currently signed in');
      navigate('/')
      return;
    }

    try {
      const lostItemsPath = '/profiles/' + user.uid + '/lostItems'
      const foundItemsPath = '/profiles/' + user.uid + '/foundItems'
      const chatRoomsPath = '/profiles/' + user.uid + '/chatRooms'

      const lostItemsRef = ref(database, lostItemsPath)
      const foundItemsRef = ref(database, foundItemsPath)
      const chatRoomsRef = ref(database, chatRoomsPath)

      onValue(lostItemsRef, (snapshot) => {
        if(snapshot)
        snapshot.array.forEach(profileItem => {
          var pathRef = "/lostItems/" + profileItem.key
          var pathStor = "/LostItemsImages/" + profileItem.key

          var storRef = storageRef(storage, pathStor)
          var refr = ref(database, pathRef)

          remove(refr)
          deleteObject(storRef);
        });
      })
      onValue(foundItemsRef, (snapshot) => {
        snapshot.array.forEach(profileItem => {
          var pathRef = "/foundItems/" + profileItem.key
          var pathStor = "/FoundItemsImages/" + profileItem.key

          var storRef = storageRef(storage, pathStor)
          var refr = ref(database, pathRef)

          remove(refr)
          deleteObject(storRef);

        });
      })
      onValue(chatRoomsRef, (snapshot) => {
        snapshot.array.forEach(profileItem => {
          var path = "/chatRooms/" + profileItem.key + "/isDeleted"
          var pathRef = ref(database, path);
          set(pathRef, true)
        });
      })
      //delete user data
      var userpath = "/profiles/" + user.uid
      var userRef = ref(database, userpath);
      remove(userRef)
      // Delete the user account
      await deleteUser(user);
      alert('Account deleted successfully');
      navigate("/");
      // Optionally redirect to login page or home page
    } catch (error) {
      console.error('Error during account deletion:', error);
      alert('Error during account deletion: ' + error.message);
    }
  };

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      'size': 'normal',

      'callback': (response) => {
        console.log(response);
        onSignInSubmit();
      },
      'expired-callback': () => {
        // var navigate = useNavigate();
        // navigate('/login');
      }
    });
  }

  const onSignInSubmit = (e) => {
    if (e) e.preventDefault();
    setUpRecaptcha();

    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((result) => {
        setShow(null)
        setConfirmationResult(result);
        alert("OTP has been sent!");
      }).catch((error) => {
        console.error(error);
        // alert(error)
      });
  };

  const onOtpSubmit = (e) => {
    e.preventDefault();

    confirmationResult.confirm(otp).then((result) => {
      const user = result.user;
      handleDeleteAccount()
      alert("Account Is Deleted!! We are going to miss you");

    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div>
      {show && (<div><h2>Phone Authentication</h2>
        <form onSubmit={onSignInSubmit}>
          <div>
            <label>Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => {
                console.log("setPHoneNumber" + e.target.value)
                setPhoneNumber(e.target.value)
              }
              }
              placeholder="+1234567890"
            />
          </div>
          <button type="submit">Send OTP</button>
          <div id="recaptcha-container"></div>
        </form>  </div>)}

      {confirmationResult && (
        <form onSubmit={onOtpSubmit}>
          <div>
            <label>OTP</label>
            <input
              type="number"
              value={otp}
              onChange={(e) => {
                console.log("OTP" + e.target.value)
                setOtp(e.target.value)
              }
              }
            />
          </div>
          <button type="submit">Verify OTP</button>
        </form>
      )}
    </div>
  );
};

export default Login;