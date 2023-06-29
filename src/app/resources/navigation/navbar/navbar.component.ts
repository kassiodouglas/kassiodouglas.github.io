import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent {

  constructor(){
    this.setLinkActive()
  }


  setLinkActive(){
    const allLinks = document.querySelectorAll('.navbar .nav-link');
    console.log(allLinks)


    allLinks.forEach(link => link.addEventListener('click',()=>{
      console.log(link)
      allLinks.forEach(x=>x.classList.remove('active'));
      link.classList.add('active');
    })); 
    
  }
    

}
