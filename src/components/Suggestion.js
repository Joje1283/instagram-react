import React from "react";
import {Avatar, Image} from "antd";
import './suggestion.scss'

export default function Suggestion() {
  return (
    <div className='suggestion'>
      <div className="avatar">
        <Avatar src={<Image preview={false} src="https://joeschmoe.io/api/v1/random" style={{ width: 24 }} />} />
      </div>
      <div className="username">
        Username
      </div>
      <div className="actions">
        Follow
      </div>
    </div>
  )
}