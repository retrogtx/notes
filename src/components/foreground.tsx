import React from 'react'
import Card from './card'

function foreground() {
  const ref = React.useRef(null);
  const data = [
    {
      desc: "Hi this is amrit",
      size: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
    },
    {
      desc: "Hi this is amrit",
      size: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
    },
    {
      desc: "Hi this is amrit",
      size: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
    },
  ]
  return (
    <div ref={ref} className="fixed p-5 top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap">
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  )
}

export default foreground