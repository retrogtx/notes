import React from 'react'
import Card from './card'

function foreground() {
  const data = [
    {
      desc: "Hi this is amrit",
      size: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
    },
  ]
  return (
    <div className="fixed top-0 left-0 z-[3] w-full h-full">
      {data.map((item, index) => (
        <Card data={item} />
      ))}
    </div>
  )
}

export default foreground