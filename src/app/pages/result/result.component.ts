import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  data: any
  isLoading: boolean
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoading = true
    const userInput = localStorage.getItem('user-input')

    console.log("http://numbersapi.com/" + userInput + "?json");

    this.http.get(`http://numbersapi.com/${JSON.parse(userInput)}?json`)
      .subscribe(res => {
        this.isLoading = false
        this.data = res
      }, err => {
        console.log(err);
      })
  }

  back() {
    this.router.navigate(["/"])
  }

}
