import React from 'react'

export default function TodoList({items}) {
  return (
    items.map((item) => {return <p>{item}</p>})
  )
}
