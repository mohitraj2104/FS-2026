import React from 'react'

export default function CustomButton({style, title}) {
  return (
    <button style={style}>{title || "Submit"}</button>
  )
}
