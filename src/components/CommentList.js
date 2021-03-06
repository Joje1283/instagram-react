import React, {useState} from "react";
import {Input, Button} from "antd";
import {useAppContext} from "../core/store";
import {axiosInstance, useAxios} from "../core/api";

import Comment from "./Comment";

export default function CommentList({post}) {
  const { store: { jwtToken } } = useAppContext();
  const [commentContent, setCommentContent] = useState("")
  const headers = {Authorization: `Bearer ${jwtToken}`}  // config
  const [{ data: commentList }, refetch] = useAxios({
    url: `/api/posts/${post.id}/comments/`,
    headers
  });

  const handleCommentSave = async () => {
    const apiUrl = `/api/posts/${post.id}/comments/`
    console.group("handleCommentSave");
    try {
      const response = await axiosInstance.post(apiUrl, { message: commentContent }, { headers });
      console.log(response)
      setCommentContent("");
      refetch();
    }
    catch(error) {
      console.log(error)
    }
    console.groupEnd();
  }

  return (
    <div>
      {commentList && commentList.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <Input.TextArea
        style={{marginBottom: ".5em"}}
        value={commentContent}
        onChange={e => setCommentContent(e.target.value)}
      />
      <Button block type="primary" disabled={commentContent.length === 0} onClick={handleCommentSave}>
        댓글 쓰기
      </Button>
    </div>
  );
}