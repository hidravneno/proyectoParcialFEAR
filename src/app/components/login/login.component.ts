// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  usernameError: boolean = false;
  passwordError: boolean = false;

  constructor(private router: Router) {}

  onLogin(): void {
    this.usernameError = false;
    this.passwordError = false;

    if (!this.username.trim()) {
      this.usernameError = true;
    }

    if (!this.password.trim()) {
      this.passwordError = true;
    }

    if (this.username.trim() && this.password.trim()) {
      this.router.navigate(['/main'], { 
        queryParams: { username: this.username } 
      });
    }
  }
}
