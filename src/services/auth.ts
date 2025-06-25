import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import type { LoginUserProps, RegisterUserProps } from "../types/auth";

export const registerUser = async ({
  name,
  email,
  password,
}: RegisterUserProps) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  await updateProfile(user, { displayName: name });

  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    name,
    email,
  });

  return user;
};

export const loginUser = async ({ email, password }: LoginUserProps) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  const userDoc = await getDoc(doc(db, "users", user.uid));
  return userDoc.data();
};
