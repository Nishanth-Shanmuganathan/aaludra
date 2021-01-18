import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userInput: number

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  proceedToResult() {
    console.log(this.userInput);
    const userInput = JSON.stringify(this.userInput)
    localStorage.setItem('user-input', userInput)
    this.router.navigate(["/", "result"])
  }
}
