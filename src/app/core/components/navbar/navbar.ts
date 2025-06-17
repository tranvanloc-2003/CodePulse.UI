import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthServices } from '../../../features/auth/services/auth.services';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit{
  constructor(private authServices : AuthServices) {}
  ngOnInit(): void {
    this.authServices.user().subscribe({
      next: (response) =>{
        console.log('User data:', response);
      }
    })
  }

}
