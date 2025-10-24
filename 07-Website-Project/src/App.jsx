import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {
  const users = [
    {
      img:`https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"`,
      intro:``,
      tag:`Satisfied`
    },
    {
      img:`https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600`,
      intro:``,
      tag:`Underserved`
    },
    {
      img:`https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600`,
      intro:``,
      tag:`Underbanked`
    }
  ]
  return (
    <div>
      <Section1 user={users} />
      <Section2 />
    </div>
  )
}

export default App