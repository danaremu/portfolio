import './About.css'

//
import Section from './../../../compx/ui/Section'

const About = () => {
  return (
    <Section nom='about'>
      <div className='about-inner'>
        <div className='about-content'>
          <h1 className='about-content-h1'>About Dan Aremu</h1>
          <div className='about-content-info'>
            <div className='about-content-info_item'>
              <div className='about-content-dp'>
                <div className='about-content-img'></div>
                <div className='about-content-text'>
                  <p>
                    I'm Dan Aremu, a Data Scientist, Machine Learning Engineer,
                    and Software Developer who specializes in turning messy data
                    into insights, building scalable AI models, and optimizing
                    software performance. Whether it’s training AI, fine-tuning
                    databases, or crafting reliable web applications, I’m all
                    about making tech work smarter. When I’m not coding in
                    Python, SQL, or JavaScript, I’m probably automating tasks,
                    solving complex problems, or demystifying AI for non-tech
                    folks. I thrive on creating efficient systems and making
                    tech both functional and fun. Let’s build something awesome!
                    🚀
                  </p>
                </div>
                {/* <ul>
                  <li>Work Experience</li>
                  <li>AI Research</li>
                  <li>Presentations</li>
                  <li>Data Portfolio</li>
                  <li>Data Journalism</li>
                  <li>Coding Porfolio</li>
                  <li>Papers</li>
                </ul> */}
              </div>
              <div className='about-content-context'>
                <div className='about-content-context-stacks'>
                  skcjskcmodcjnsdojcn
                </div>
                <div className='about-content-context-select'>
                  <p>select stack:</p>
                  <div className='stacks_row'>
                    <div className='stacks_item' data-stack={'front-end'}></div>
                    <div className='stacks_item' data-stack='front-end'></div>
                  </div>
                </div>
                {/* <p>
                  Hey there! I’m Dan Aremu, a Data Scientist, Machine Learning
                  Engineer, and Code-Wrangling Wizard who spends most of my time
                  convincing computers to do my bidding. Sometimes they listen,
                  sometimes they throw cryptic error messages at me—but that’s
                  all part of the fun, right?
                </p>
                <p>
                  I specialize in turning messy data into gold, building machine
                  learning models that (mostly) behave, and engineering
                  scalable, efficient software solutions. Whether it’s training
                  AI to predict trends, optimizing databases to run faster than
                  your morning coffee kicks in, or crafting web applications
                  that don’t break (too often)—I’m on it.
                </p>
                <p>
                  When I’m not knee-deep in Python, SQL, or JavaScript, you’ll
                  probably find me debugging my life choices, automating tasks
                  just to avoid doing them manually, or explaining to non-tech
                  folks that "AI won't take over the world... yet."
                </p>
                <p>
                  If you're looking for a problem-solver, data enthusiast, or
                  someone who can make tech sound (almost) fun, you’re in the
                  right place. Let’s build something awesome!
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About
