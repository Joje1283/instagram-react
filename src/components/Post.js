import React from "react";
import {Avatar, Card} from "antd";
import {HeartOutlined, HeartTwoTone} from '@ant-design/icons';
import CommentList from "./CommentList";

function Post({post, handleLike}) {
  const {author, photo, caption, location, is_like} = post;
  const { username, avatar_url } = author
  return (
    <div>
      <Card
        hoverable
        cover={<img src={photo} alt={caption} />}
        actions={
          [
            is_like ?(
              <HeartTwoTone twoToneColor="red" onClick={() => handleLike({post, isLike: false})}/>
            ) : (<
                HeartOutlined onClick={() => handleLike({post, isLike: true})}/>
            )
          ]
        }
      >
        <Card.Meta
          avatar={<Avatar icon={<img src={avatar_url ? avatar_url : "https://joeschmoe.io/api/v1/random"} alt={username} />}/>}
          title={location}
          description={caption}
          style={{marginBottom: "0.5em"}}
        />
        <CommentList post={post} />
      </Card>
    </div>
  )
}

export default Post;