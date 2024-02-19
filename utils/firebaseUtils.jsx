// firebaseUtils.jsx

import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../firebase'; // Import initialized Firebase app

const db = getFirestore(app);

const getUserData = async (userId) => {
  const userRef = doc(db, 'users', userId);
  const userSnapshot = await getDoc(userRef);
  return userSnapshot.exists() ? userSnapshot.data() : null;
};

export { getUserData };
