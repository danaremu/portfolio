import './Landing.css'

// Media & Icons
import action_icon from './../../../compx/icons/icons8-arrow-down.gif'
//
import Section from './../../../compx/ui/Section'

const Index = () => {
  return (
    <Section nom='landing'>
      <div className='grid-image'></div>

      <div
        className='grid-branding'
        data-year='2025'
        data-title='Software Engineer || AI & ML Developer || Data Engineer'
      >
        <div className='grid-branding_title'>
          {/* Software Engineer || AI & ML Developer || Data Engineer */}
          <span>Software Engineer</span>
          <br />
          <span>AI & ML Developer</span>
          <br />
          <span>Data Engineer</span>
        </div>
        <div className='grid-branding_line'></div>
        <div className='grid-branding_year'>2025</div>
      </div>
      <div className='grid-greet'>
        <h1 className='grid-greet_h1'>
          Dan <br /> Aremu
        </h1>
        <p className='grid-greet_p'>
          Hello and welcome! <br /> I’m delighted to have you here. <br /> I
          truly appreciate your time and <br /> invite you to explore my
          personal portfolio. <br /> It’s great to meet you!
        </p>
      </div>
      <div className='grid-action'>
        <span className='grid-action_text'>Scroll down</span>
        <img
          src={action_icon}
          alt={'action button'}
          className='grid-action_icon'
        />
      </div>
    </Section>
  )
}

export default Index
