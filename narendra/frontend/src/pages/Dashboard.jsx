import NavigationBar from "../components/Navbar";
import MainView from "../components/MainView";
import Highlights from "../components/Highlights";

const DashBoard = () => {
    return (
        <div>
            <NavigationBar/>
            <div style={{borderRadius:'10px', backgroundColor:'#3f9ac7', marginTop:'4rem', margin:'3rem'}}>
                <MainView/>
            </div>
            <div style={{display:'flex', alignItems:'flex-start', fontSize:'2rem', fontWeight:'700', margin:'3rem'}}>   
                Today's Highlights
            </div>
            <div style={{margin:'3rem'}}>
                <Highlights/>
            </div>
        </div>
    )
}

export default DashBoard;






