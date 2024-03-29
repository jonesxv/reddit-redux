import React from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

const Vote = ({ votes, upVote, downVote, id }) => {
  return (
    <>
      <FaArrowUp onClick={() => upVote(id)} /> {votes} <FaArrowDown onClick={() => votes > 0 && downVote(id)}/>
    </>
  )
}

export default Vote;