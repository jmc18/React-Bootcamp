import React from 'react'

const Section = ({ children }) => {
  return <div className="section">{children}</div>
}

export const SectionTitle = ({ children }) => {
  return <div className="title">{children}</div>
}

export const SectionBody = ({ children }) => {
  return <div className="body">{children}</div>
}

export default Section
