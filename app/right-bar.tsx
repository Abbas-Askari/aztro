import React from 'react'

type Props = {
  className?: string;
}

function RightBar({className}: Props) {
  return (
    <div className={` bg-base-200 ${className}`}>RightBar</div>
  )
}

export default RightBar
