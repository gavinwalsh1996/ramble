import { create } from "zustand";
import {
  collection,
  getDocs,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
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
}));
