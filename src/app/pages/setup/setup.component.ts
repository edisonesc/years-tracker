import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {
  title = 'year-app';
  birthDate = null;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('test')
  }

  submit() {
    if(this.birthDate) {
      localStorage.setItem('date_of_birth', this.birthDate);
      localStorage.setItem('target_year', "90");
      localStorage.setItem('view_by_unit', 'week');
      this.router.navigateByUrl('/home')
    }    
  }

  onDateSelect(event) {
    this.birthDate = JSON.stringify(event);
  }

}
