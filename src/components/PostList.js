import React, {useEffect, useState} from "react";
import {Alert} from "antd"
import Post from "./Post";
import {useAppContext} from "../core/store";
import {axiosInstance, useAxios} from "../core/api"

function PostList() {
  const { store: { jwtToken } } = useAppContext();
  const headers = {Authorization: `Bearer ${jwtToken}`}  // config
  const [postList, setPostList] = useState([]);


  const [{data: originPostList, loading,  error}, refetch] = useAxios({
    url: "/api/posts/",
    headers
  });

  useEffect(() => {
    setPostList(originPostList);
  }, [originPostList]);

  const handleLike = async ({post, isLike}) => {
    const apiUrl = `/api/posts/${post.id}/like/`;
    const method = isLike ? "POST" : "DELETE";
    try {
      await axiosInstance({
        url: apiUrl,
        method,
        headers,
      });
      setPostList(prevList => {
        return prevList.map(currentPost =>
          currentPost === post
            ? {...currentPost, is_like: isLike }
            : currentPost
        );
      });
    }
    catch (error) {
      console.log("error :", error)
    }

    console.group('handleLike')
    console.log(post);
    console.log(isLike)
    console.groupEnd()
  }

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      {loading && "loading..."}
      {error}
      {postList && postList.length === 0 &&
        <Alert type="warning" message="포스팅이 없습니다." />
      }
      {postList && postList.map(post => <Post key={post.id} post={post} handleLike={handleLike} />)}
    </div>
  )
}

export default PostList;