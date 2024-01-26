import welcomeimg from './assets/welcomePageIllustration.svg'
import echologo from './assets/echo_2x (1).png'
import Buttons from './components/buttons.jsx';
import{users} from './Data.js'
import Footer from './components/Footer.jsx';
function App() {
  const phoneSelect= ()=>{
    alert("Thank you for choosing mobile, Suraj");
  }
  const sortedUsers = users.sort((a, b) => a.age - b.age);
  console.log(sortedUsers)
  for (let i = 0; i < sortedUsers.length; i++) {
    const names = sortedUsers[i].name;
    console.log(names);
    }
  const emailSelect = ()=> {
    const userNames = users.map(user => user.name);
    alert(`Names: ${userNames}`);
  };

  return (
    <>
    <div className="logo">
    <img src={echologo} />
    </div>
    
     <div className="container">
     
            <div class="pageleft">
            
                <h1>Welcome to iECHO</h1>
                <p>Please choose an option to continue</p>
                <div class="continue">
                   <Buttons onClick={emailSelect} >Continue with Email</Buttons>
                   <Buttons onClick={phoneSelect} >Continue with Phone</Buttons>
                   <div class="divider">
                        <p>OR</p>
                    </div>
                    <button type='button' disabled id='Google'>Continue with google</button>
                    </div>
    
            <div class="tc"><p>By continuing, you accept the <a href="https://iecho.org/terms">Terms of Use</a> and<a href="https://iecho.org/privacy"> Privacy Policy</a></p></div>
            <Footer/> 
                </div>
                <div class="pageright">
                <div class="help"><a href="https://projectecho.notion.site/iECHO-Help-Center-1e3301587de24775a6abd9100f937682">?</a></div>
                    <img src={welcomeimg} alt="" />
                    <h1>Learn from Experts and Share <br/>your Expertise</h1>
                    <p>The ECHO model uses a hub-and-spoke <br/> knowledge-sharing approach</p>
                </div>
    
        </div>
  
    </>
  )
}

export default App