
import React,{useRef,useEffect} from "react"
import "../../styles/sidebar.scss"
import gsap,{TimelineLite,Expo} from "gsap";

const SidebarNav = props => {

const {menuState, setMenuState} = props; 
let sidebarMenu = useRef(null); 
let sidebarMenuLi = useRef(null); 
let menuTimeLine = useRef(); 

useEffect(()=>{
    menuTimeLine.current  = gsap.timeline({paused:true}); 
    menuTimeLine.current.fromTo([sidebarMenu],
        {
            duration:0, 
            x:'-100%'
        },
        {
            duration:0.75, 
            x:'0%',
            ease: 'Power3.inOut', 
            stagger:{
                amount:0.5
            }
        })
},[]); 

useEffect(()=>{
    
    menuTimeLine.current.staggerFrom(".menu-li",2,
        {
            x:-200, 
            opacity:0, 
            ease:Expo.easeInOut
        },0.3
        
        );
},[]);

useEffect(()=>{
    menuState ? menuTimeLine.current.play(): menuTimeLine.current.reverse(); 
},[menuState]); 
  return (
  
    <div class="sidebarnav" ref={el => (sidebarMenu = el) }>
<nav>
<ul>
<li className="menu-li"><a href="#">About</a></li>
<li className="menu-li"><a href="#">Resume</a></li>
<li className="menu-li"><a href="#">Work</a></li>
<li className="menu-li"><a href="#">Contact</a></li>
</ul>
</nav>
  </div>

  )
}



export default SidebarNav
