import React, { useState } from 'react'

const ResumeBuilder = () => {

  const [resumeData, setResumeData] = useState({
    _id: '',
    title: '',
    personal_info: {}
  })

  return (
    <div>
        <h1>ResumeBuilder Page</h1>
    </div>
  )
}

export default ResumeBuilder