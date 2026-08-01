function getGreeting() {
  const hour = new Date().getHours()
  return hour < 12 ? 'Good morning' : 'Good afternoon'
}

function Header() {
  const firstName = 'Maynard'
  const lastName = 'Villar'
  const totalTopics = 3
  const isReady = true

  return (
    <header className="card">
      <h1>{getGreeting()}, welcome to My Study Toolkit</h1>
      <p>Prepared by {firstName + ' ' + lastName}</p>
      <p>You have {totalTopics * 2} flashcards ready to review</p>
      <p>{isReady ? 'Status: Ready to study' : 'Status: Not ready yet'}</p>
    </header>
  )
}

export default Header