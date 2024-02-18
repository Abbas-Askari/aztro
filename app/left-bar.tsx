import React from 'react'

type Props = {
  className?: string;
}

function LeftBar({className}: Props) {
  return (
    <div className={` bg-base-200 ${className}`}>LeftBar</div>
  )
}

export default LeftBar
