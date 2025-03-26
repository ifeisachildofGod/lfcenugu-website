
let menuListHTML = "";
   menu.forEach((list) => {
    menuListHTML += ` 
    <nav class="nav">
     <div class="menu-toggle" id="menuToggle">
        <span></span>
        <span></span>
        <span></span>
     </div> <!-- toggle end -->
  </nav>
    <div class="menu" id="menu">
                <ul>
               <li><a href="${list.link}">${list.item}</a></li>  
               </ul>
            </div>
    `;

  });
  document.querySelector(".counter").innerHTML = menuListHTML;


  
