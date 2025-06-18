import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthServices } from '../../../features/auth/services/auth.services';
import { UserModel } from '../../../features/auth/models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit{
  user?:UserModel;
  constructor(private authServices : AuthServices,private router: Router) {}
  onShowLogout(): void{
    this.authServices.logout();
    this.router.navigate(['auth/login']);

  }
  ngOnInit(): void {
    this.authServices.user().subscribe({
      next: (response) =>{
        // console.log('User data:', response);
        this.user = response;
      }
    })
    this.user = this.authServices.getUser();
    console.log('User from getUser:', this.user);
  }

}
