import Profile from './profile/Profile'
import amine from './amine.jpg'


function App() {
 const handleName = () => {
   alert('this profile is under authority of Med Amine')
 }
  return (
    <div style= {{color:"red" , backgroundColor:"black"}}>
    <Profile fullName="Mohamed Amine Hamdi" bio="32 years old"  profession="student" handleName={handleName}>
      <img src={amine} alt='amine'/>   </Profile>
    </div>
  );
}

export default App




