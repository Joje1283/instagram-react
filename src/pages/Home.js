import React from "react";
import AppLayout from "../components/AppLayout";
import PostList from "../components/PostList";

export default function Home() {
  return (
    <AppLayout>
      <PostList />
    </AppLayout>
  )
}