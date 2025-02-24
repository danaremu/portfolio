const Section = ({ children, nom }) => {
  return (
    <section id={nom} className={`section ${nom}`}>
      <div className='navCover'></div>
      <div className='app-container'>{children}</div>
    </section>
  )
}

export default Section
