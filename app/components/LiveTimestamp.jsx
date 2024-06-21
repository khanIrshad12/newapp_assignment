"use client"
import TimeAgo from "react-timeago"


const LiveTimestamp = ({time}) => {
    console.log("time",time);
  return (
    <TimeAgo date={time} />
  )
}

export default LiveTimestamp