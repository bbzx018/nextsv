"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useComments } from "@/store/comments";

export default function CommentsPage() {
  const params = useParams();   // { id: '1' }
  const postId = Number(params.id);

  const { items, loading, error, fetchComments } = useComments();

  useEffect(() => {
    if (postId) fetchComments(postId);
  }, [postId, fetchComments]);

  if (loading) return <p>กำลังโหลดคอมเมนต์...</p>;
  if (error) return <p>ผิดพลาด: {error}</p>;

  return (
    <div>
      <h1>Comments for Post {postId}</h1>
      <ul>
        {items.map((c) => (
          <li key={c.id} style={{ marginBottom: "1rem" }}>
            <strong>{c.name}</strong> ({c.email})
            <p>{c.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
// src/app/(user)/comments/[id]/page.tsx