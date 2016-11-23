import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

private name :string;
private email: string;
private password: string;

  constructor(
        private router: Router,
        private RegisterService: RegisterService) { }

  ngOnInit() {
  }

  register(): void {

    RegisterService.register()

  }

}
