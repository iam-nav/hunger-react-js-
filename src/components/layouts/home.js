
import React,{useEffect} from 'react'
import logo from '../layouts/images/free_food.png'
import './home.css'
import anime from 'animejs'


export default function Home() {

    useEffect(() => {
        animation()
      });
    function animation(){
        var textWrapper = document.querySelector('.ml6 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        
        anime.timeline({loop: false})
          .add({
            targets: '.ml6 .letter',
            translateY: ["1.1em", 0],
            translateZ: 0,
            duration: 750,
            delay: (el, i) => 50 * i
          })
    }

    return (
        <div>
<h1 class="ml6">
  <span class="text-wrapper">
    <span class="letters" style={{color:"#AC3B61",fontSize:"80px"}}>H U N G  R Y ?</span>
  </span>
</h1>
<h4 style={{textAlign:"center",fontSize:"2.2em",marginTop:"-20px",color:"#D57A99"}}>Lets Find Free Food <br />
                around you
            </h4>
<img src={logo} width="160px" style={{borderRadius:"50px",marginLeft:"43%",marginTop:"-30px"}}></img>
 <a href="">
 <span style={{position:"absolute",left:"47%",top:"77.6%",color:"#AC3B61",fontSize:"22px"}}>Find Now</span>
 <div className="backgroundbtn">
     
 </div>
 </a>
        </div>
    )
}