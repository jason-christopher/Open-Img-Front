import { Component } from 'react';
import Tilt from 'react-parallax-tilt';
import { Modal } from 'react-bootstrap';
import './About.css';



class About extends Component {
    constructor(props) {
       super(props);
       this.state = {
         id: 0,
         isOpen: false,
         isOpen2: false,
         isOpen3: false,
         isOpen4: false
       }
     }

     openModal = () => this.setState({ isOpen: true });
     closeModal = () => this.setState({ isOpen: false });

     openModal2 = () => this.setState({ isOpen2: true });
     closeModal2 = () => this.setState({ isOpen2: false });
  
     openModal3 = () => this.setState({ isOpen3: true });
     closeModal3 = () => this.setState({ isOpen3: false });

     openModal4 = () => this.setState({ isOpen4: true });
     closeModal4 = () => this.setState({ isOpen4: false });
  
  render() {

    //   let personArray =[{
    //     Name:'Keyan Tabor' ,
    //     Bio: 'Keyan lives in upstate South Carolina with his wife Whitney and his daughter Alice.They have 2 cats Jekyll and Clyde (yes this was intentional). Prior to attending Code Fellows, Keyan spent 4 years in the United States Marine Corps as an 0311 Infantryman. Upon exiting the Marine Corps, Keyan was in search of what to do with his life next. He took on an apprenticeship working in a factory that built gas tanks for a variety of vehicles. He knew right away this wasnt a long term solution. The timing worked out perfectly because at the same time Solana NFTs took off. As soon as he got involved he was hooked. He now works towards becoming a fullstack software developer so he can return to the community with the ability to be involved in and help build out the next generation of the web (web3).' ,
    //     imgSrc: 'https://i.imgur.com/tpxB7Vo.png'
    //   }, 
    //  {
    //     Name:'DeShon Dixon' ,
    //     Bio: 'Hey! I’m DeShon Dixon. US Army Veteran transitioning into software development. I’ve chosen to transition into software development because I wanted a career where my work is meaningful and I can see the results of my hard work. The experience I’ve gained while in the military has instilled the ability to adapt in self-starting and collaborative environments.' ,
    //     imgSrc: 'https://avatars.githubusercontent.com/u/107225817?s=400&u=e5bf8fd83578ecaaa45d1820a9101f13ef7646d0&v=4'
    //   }, 
    //   {
    //     Name:'Jason Christopher' ,
    //    Bio: 'I’m an Air Force veteran and the spouse of an active-duty military member and I currently serve as an officer in the Air Forces Reserves. I’ve excelled in my military career becoming my squadron’s top instructor and the “Top Graduate” of multiple military training courses; however, I’m looking for a more stable career as a remote software engineer as it’s the best way I can support my wife’s continued success in the military. I’ve had experience as a leader and project manager in the Air Force and have test and evaluation experience working with Boeing’s software updates for the mission systems on our aircraft. I have an engineering background from college and I continue to use those analytical and technical skills in my day-to-day work. I hope I can be a good fit for a position at your company.' ,
    //     imgSrc: 'https://github.com/jason-christopher/reading-notes/blob/main/Profile%20Pic.jpeg?raw=true'
    //   },
    //   {
    //     Name:'Oliver Speir' ,
    //     Bio: 'Hey I’m Oliver Speir! I’m a passionate Software Engineer with experience in full MERN stack. I approach every opportunity with excitement and an open mind. I strive to create value through my detail oriented approach to problem solving. I balance my attention to detail by maintaining a creative mindset. By consistently asking myself if there is a better way to arrive at the solution I’m working toward I gain experience not just in problem solving but creative thinking with every challenge I meet. I am currently expanding my skills to include Python, in hopes of becoming a complete package ready for deployment in any environment. This project has been a blast for me, so thank you for taking the time to engage with it!' ,
    //     imgSrc: 'https://i.imgur.com/2WJ1vWM.png'
    //   }
    //   ]
    //   const imgSrc = `${personArray[this.state.id].imgSrc}`
      
    return (
      <>
      
        {/* <Navbar className="justify-content-center" bg="dark">
        <Button onClick={()=> this.setState({id:0})}>Keyan Tabor</Button>
        <Button onClick={()=> this.setState({id:1})}>DeShon Dixon</Button>
        <Button onClick={()=> this.setState({id:2})}>Jason Christopher</Button>
        <Button onClick={()=> this.setState({id:3})}>Oliver Speir</Button>
        </Navbar> */}
      {/* <Card style={{ width: '18rem' }}>  */}
       {/* <div className="bio">
      <Card className = "card">
      <Card.Img alt='Profile Picture' variant="top" src= {imgSrc} style={{ width: '50rem' }} className="cardTop"/>
      <p>{personArray[this.state.id].Name}</p>
      <p>{personArray[this.state.id].Bio}</p> 
     </Card>
      </div>  */}
        
 
      <div className="glassContainer">
        <Tilt >
        <div className="glassCard">
          <div className="glassContent">
            <h2 className="glassHeader">Team SA</h2>
            <h3 className="glassName"> Keyan Tabor </h3>
            <p className="glassBio"> Keyan spent 4 years in the United States Marine Corps as an 0311 Infantryman.</p>
            <button onClick={this.openModal}>Read More</button>
          </div>
        </div>
        </Tilt>
        <Tilt>
        <div className="glassCard">
          <div className="glassContent">
            <h2 className="glassHeader">Team SA</h2>
            <h3 className="glassName"> DeShon Dixon </h3>
            <p className="glassBio"> Hey! I’m DeShon Dixon. US Army Veteran transitioning into software development.</p>
            <button onClick={this.openModal2}>Read More</button>
          </div>
        </div>
        </Tilt>
        <Tilt>
        <div className="glassCard" data-tilt>
          <div className="glassContent">
            <h2 className="glassHeader">Team SA</h2>
            <h3 className="glassName"> Jason Christopher </h3>
            <p className="glassBio"> I’m an Air Force veteran and I currently serve as an officer in the Air Forces Reserves. </p>
            <button onClick={this.openModal3}>Read More</button>
          </div>
        </div>
        </Tilt>
        <Tilt>
        <div className="glassCard">
          <div className="glassContent">
            <h2 className="glassHeader">Team SA</h2>
            <h3 className="glassName"> Oliver Speir </h3>
            <p className="glassBio"> Hey I’m Oliver Speir! I’m a passionate Software Engineer with experience in full MERN stack. </p>
            <button onClick={this.openModal4}>Read More</button>
          </div>
        </div>
        </Tilt>
      </div>

     
      <Modal dialogClassName="modal-90w public-profile-modal-class" size='lg' aria-labelledby="example-custom-modal-styling-title" className= "modal" 
      show={this.state.isOpen} onHide={this.closeModal}>
      <Modal.Header closeButton>
      <img src="https://i.imgur.com/tpxB7Vo.png" alt="" />
        <Modal.Title className="modalTitle">Keyan Tabor</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Keyan lives in upstate South Carolina with his wife Whitney and his daughter Alice.They have 2 cats Jekyll and Clyde (yes this was intentional). Prior to attending Code Fellows, Keyan spent 4 years in the United States Marine Corps as an 0311 Infantryman. Upon exiting the Marine Corps, Keyan was in search of what to do with his life next. He took on an apprenticeship working in a factory that built gas tanks for a variety of vehicles. He knew right away this wasnt a long term solution. The timing worked out perfectly because at the same time Solana NFTs took off. As soon as he got involved he was hooked. He now works towards becoming a fullstack software developer so he can return to the community with the ability to be involved in and help build out the next generation of the web (web3).</p>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>

    <Modal dialogClassName="modal-90w public-profile-modal-class" size='lg' aria-labelledby="example-custom-modal-styling-title" className= "modal"
     show={this.state.isOpen2} onHide={this.closeModal2}>
      <Modal.Header closeButton>
      <img src="https://avatars.githubusercontent.com/u/107225817?s=400&u=e5bf8fd83578ecaaa45d1820a9101f13ef7646d0&v=4" alt="" />
        <Modal.Title>DeShon Dixon</Modal.Title>
        
      </Modal.Header>
      <Modal.Body>
        <p>Hey! I’m DeShon Dixon. US Army Veteran transitioning into software development. I’ve chosen to transition into software development because I wanted a career where my work is meaningful and I can see the results of my hard work. Experience with JavaScript and Python development and a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high quality results under strict deadlines. United States Army Veteran transitioning careers and eager to obtain a position at a prestigious company that will expand my learning and build upon my developer skills. </p>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>

    <Modal dialogClassName="modal-90w public-profile-modal-class" size='lg' aria-labelledby="example-custom-modal-styling-title" className= "modal"
    show={this.state.isOpen3} onHide={this.closeModal3}>
      <Modal.Header closeButton>
      <img src="https://github.com/jason-christopher/reading-notes/blob/main/Profile%20Pic.jpeg?raw=true" alt="" />
        <Modal.Title>Jason Christopher</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>I’m an Air Force veteran and the spouse of an active-duty military member and I currently serve as an officer in the Air Forces Reserves. I’ve excelled in my military career becoming my squadron’s top instructor and the “Top Graduate” of multiple military training courses; however, I’m looking for a more stable career as a remote software engineer as it’s the best way I can support my wife’s continued success in the military. I’ve had experience as a leader and project manager in the Air Force and have test and evaluation experience working with Boeing’s software updates for the mission systems on our aircraft. I have an engineering background from college and I continue to use those analytical and technical skills in my day-to-day work. I hope I can be a good fit for a position at your company.</p>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>

    <Modal dialogClassName="modal-90w public-profile-modal-class" size='lg' aria-labelledby="example-custom-modal-styling-title" className= "modal"
      show={this.state.isOpen4} onHide={this.closeModal4}>
      <Modal.Header closeButton>
      <img src="https://i.imgur.com/2WJ1vWM.png" alt="" /> 
        <Modal.Title>Oliver Speir</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Hey I’m Oliver Speir! I’m a passionate Software Engineer with experience in full MERN stack. I approach every opportunity with excitement and an open mind. I strive to create value through my detail oriented approach to problem solving. I balance my attention to detail by maintaining a creative mindset. By consistently asking myself if there is a better way to arrive at the solution I’m working toward I gain experience not just in problem solving but creative thinking with every challenge I meet. I am currently expanding my skills to include Python, in hopes of becoming a complete package ready for deployment in any environment. This project has been a blast for me, so thank you for taking the time to engage with it!</p>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
      </>
    )
  };
};


export default About;
