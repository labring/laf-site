import React from 'react'

type Props = {
  title:string;
  content:string;
}

const homecard = (props: Props) => {
  const {title,content} = props;
  return (
    <div>
    <div>title</div>
    <div>content</div>
    </div>
  )
}

export default homecard