
import React,{useRef,useEffect} from "react"
import "../../styles/sidebar.scss"
import gsap,{Expo} from "gsap";




const Menu = props => {
const {menuState, setMenuState} = props;

let menuBarre = useRef(null); 


useEffect(() => {
    gsap.from(menuBarre.current,1.2,{ 
        delay:.1,
        opacity:0,
         y: 10,
         color:'#fff',
        ease:Expo.easeIn 

    });
},[]);




  return (
  
    <div>
 

   <button ref={menuBarre} className={`burger-menu ${menuState ? 'menu-close' : ''}`}
   onClick={()=> setMenuState(!menuState)}
   >
   <span class="line-1"></span>
   <span class="line-2"></span>
   <span class="line-3"></span>
</button>
  </div>

  )
}



export default Menu
