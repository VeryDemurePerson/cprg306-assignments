'use client';

import { db } from '@/app/week-10/_utils/firebase'; // ✅ you forgot this
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { auth } from '@/app/week-10/_utils/firebase'; // ✅ import this to get current user

export const getItems = async () => {
  const user = auth.currentUser; // ✅ get logged-in user
  if (!user) throw new Error("Not authenticated");

  const itemsCollection = collection(db, `users/${user.uid}/items`);
  const snapshot = await getDocs(itemsCollection);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const addItem = async (item) => {
  const user = auth.currentUser; // ✅ get logged-in user
  if (!user) throw new Error("Not authenticated");

  const itemsCollection = collection(db, `users/${user.uid}/items`);
  const docRef = await addDoc(itemsCollection, item);

  return { id: docRef.id, ...item };
};
