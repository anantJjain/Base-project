import Aos from 'aos'
import "aos/dist/aos.css";
import React,{useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import SideBar from '../Sidebar/SideBar'
import './styles.css'
import { DataTags } from '../Swap/SwapData'
import { DataTags2 } from '../Swap/SwapData'
import { HiOutlineCog } from 'react-icons/hi'
import { HiOutlinePlus } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'


const TableHead = ({ column1, column2, column3, column4, classNameHead,headDelay }) => (
  <table data-aos="fade-down" data-aos-delay={headDelay}>
    <tr>
      <td className={classNameHead}>{column1}</td>
      <td className={classNameHead}>{column2}</td>
      <td className={classNameHead}>{column3}</td>
      <td className={classNameHead}>{column4}</td>
    </tr>
  </table>
)

const TableData = ({ column1, column2, column3, column4, classNameData,dataDelay }) => (
  <table data-aos="fade-right" data-aos-delay={dataDelay}>
    <tr>
      <td className={classNameData}>{column1}</td>
      <td className={classNameData}>{column2}</td>
      <td className={classNameData}>{column3}</td>
      <td className={classNameData}>{column4}</td>
    </tr>
  </table>
)


const Liquidity = () => {

  useEffect(()=>{Aos.init({
    duration:1000
  })},[])

  return ( 
      <div>
        <div className='Navbar'><Navbar /></div>
        
        <div className="MainContainer3">  
          <div className='Sidebar2'>
            <SideBar />
          </div>
          <div className='LiquidityContainer'>
            <div data-aos="zoom-in" className='AddressContainer'>Address</div>
            <div className='FormContainer'>
              <div className='EllipseOne'></div>
              <h1 data-aos="fade-right">add liquidity<NavLink to='/settings'><HiOutlineCog size={26} /></NavLink></h1>
              <form data-aos="fade-left">
                <div>
                  <input className='inputMax' value="0.0 Max" />
                  <div style={{color:'#fff',border:'0px red solid',backgroundColor:'transparent'}}>
                    <select className="select" style={{}}>
                      <option className="option" value="CUBE" >CUBE</option>
                      <option className="option" value="ETH">ETH</option>
                    </select>
                  </div>
                </div>
                <div>
                  <HiOutlinePlus color="#fff" size={24} />
                </div>
                <div>
                  <input className='inputMax' value="0.0 Max"/>
                  <div style={{color:'#fff',border:'0px red solid',backgroundColor:'transparent'}}>
                    <select className="select">
                      <option className="option" value="CUBE" >CUBE</option>
                      <option className="option" value="ETH">ETH</option>
                    </select>
                  </div>
                </div>
                <input type='submit' value="APPROVE PAIR"></input>
                <input type='submit' value="APPROVE TO LP POOL"></input>
              </form>
            
              <div className='EllipseTwo'></div>
            </div>

            <div className='DataTable'>
              <div>
                <div data-aos="fade-up" style={{display:'flex',justifyContent:'space-between'}}><span className='LeftData'>Pool Rate</span><span className="RightData" style={{textAlign:'right'}}>1 CUBE = 0.459825cuETH</span></div>
                <div data-aos="fade-down" style={{display:'flex',justifyContent:'space-between'}}><span className='LeftData'>Share of Pool</span><span className="RightData" style={{textAlign:'right'}}>0,5%</span></div>
              </div>
              <div data-aos="flip-right" className='Details'>
                By adding liquidity you'll earn 0.25% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.
              </div>
              <h1 data-aos="fade-down" >Your LP Pools</h1>
              <div className='TopTableDesktop2'>
                <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column'}}><TableHead headDelay="100" classNameHead="TableHead2" column1="POOL" column2="SHARE" column3="TVL" column4="24H VOLUME"/></div>
                <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column'}}><TableData dataDelay="200" classNameData="TableData2" column1="CUBE/ETH" column2="0,5%" column3="1.1M" column4="20M" /></div>
                <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column'}}><TableData dataDelay="300" classNameData="TableData2" column1="CUBE/ETH" column2="0,5%" column3="1.1M" column4="20M" /></div>
                <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column'}}><TableData dataDelay="400" classNameData="TableData2" column1="CUBE/ETH" column2="0,5%" column3="1.1M" column4="20M" /></div>
              </div>              
            </div>

          
          
          </div>  { /* LiquidityContainer */ }
      
        </div>    { /* MainContainer3 */ }
      </div>
  )
}

export default Liquidity



