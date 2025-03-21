import { create } from "zustand";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  increment,
  getDoc,
  setDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db, auth } from "@/lib/firebaseConfig";

type Post = {
  id: string;
  text: string;
  upvotes: number;
  downvotes: number;
};

type VoteType = "upvote" | "downvote";

type PostStore = {
  posts: Post[];
  fetchPosts: () => void;
  addPost: (text: string) => Promise<void>;
  votePost: (postId: string, type: VoteType) => Promise<void>;
};

export const usePostStore = create<PostStore>((set) => ({
  posts: [],

  fetchPosts: async () => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Post, "id">),
    }));
    set({ posts });
  },

  addPost: async (text) => {
    await addDoc(collection(db, "posts"), {
      text,
      upvotes: 0,
      downvotes: 0,
      createdAt: new Date(),
    });

    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Post, "id">),
    }));
    set({ posts });
  },

  votePost: async (postId, type) => {
    const userId = auth.currentUser?.uid;
    if (!userId) return;

    const voteRef = doc(db, "posts", postId, "votes", userId);
    const postRef = doc(db, "posts", postId);

    const existingVote = await getDoc(voteRef);

    const fieldName = (t: VoteType) =>
      t === "upvote" ? "upvotes" : "downvotes";

    if (!existingVote.exists()) {
      await setDoc(voteRef, { type });
      await updateDoc(postRef, {
        [fieldName(type)]: increment(1),
      });
    } else {
      const prevType = existingVote.data().type;

      if (prevType === type) {
        await deleteDoc(voteRef);
        await updateDoc(postRef, {
          [fieldName(type)]: increment(-1),
        });
      } else {
        await setDoc(voteRef, { type });
        await updateDoc(postRef, {
          [fieldName(prevType)]: increment(-1),
          [fieldName(type)]: increment(1),
        });
      }
    }

    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Post, "id">),
    }));
    set({ posts });
  },
}));
