import Countdown from "react-countdown";
const WreathCountdown= () => {
    return <a href="https://sherwoodfundraiser.com/frc6995nomad/products" target="_top"><div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100vw", height:"100vh", backgroundImage:`url('/wreath.jpg')`, backgroundRepeat:"no-repeat", backgroundSize:"auto 100%", backgroundPosition:"center", color:"white", fontSize:"12vw", fontWeight:"bolder"}}>
        <div style={{textAlign:"center", backgroundColor:"#99cc33", borderRadius:"3vmin", padding:"5px"}}>
            <Countdown  date={Date.UTC(2021,11,8,11,59,59)}></Countdown>
<div style={{fontSize:"6vw"
}}>Holiday Wreath Fundraiser<br />Click Here to Support NOMAD</div></div>
</div></a>};
export default WreathCountdown