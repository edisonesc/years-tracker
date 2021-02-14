import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.checkSession();
  }

  checkSession() {
    if(localStorage.getItem('date_of_birth')) {
      this.router.navigateByUrl('/pages/home');
      return
    } 
    this.router.navigateByUrl('/pages/setup');
  }

}
