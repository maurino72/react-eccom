import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const db = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const collectionRef = doc(db, "users", userAuth.uid);
  const userObject = await getDoc(collectionRef);
  let user;
  if (userObject.exists()) {
    user = userObject;
  } else {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      user = await setDoc(collectionRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log(err);
      console.log("Error creating the user");
    }
  }

  return user;
};
