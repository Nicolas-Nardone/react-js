import { CartWidget } from "./CartWidget";

export const NavBar = () =>(
 <div className="contenedorsuperior">
  <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DuUXG2ue_bB3rkt_3mFVm_ofkL1jyq_tRw&s" alt="" />
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Catalogo</a></li>
    <li> <a href="#">Contacto</a></li>
  </ul>
  <CartWidget />
 </div>

)