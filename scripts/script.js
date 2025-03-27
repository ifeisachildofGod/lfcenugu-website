
let menuListHTML = "";

menuOptions.forEach((menu) => {
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
         <li><a href="${menu.link}">${menu.name}</a></li>  
      </ul>
   </div>
   `;

});

document.querySelector(".counter").innerHTML = menuListHTML;


  
