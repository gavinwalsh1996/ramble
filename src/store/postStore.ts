import { create } from "zustand";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

type Post = {
  id: string;
  text: string;
  upvotes: number;
  downvotes: number;
};

type PostStore = {
  posts: Post[];
  fetchPosts: () => void;
  addPost: (text: string) => Promise<void>;
};

export const usePostStore = create<PostStore>((set) => ({
  posts: [],

  fetchPosts: async () => {
    const snapshot = await getDocs(collection(db, "posts"));
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

    // ✅ Re-fetch posts immediately after adding one
    const snapshot = await getDocs(collection(db, "posts"));
    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Post, "id">),
    }));
    set({ posts });
  },
}));
