import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.data = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      city: new FormControl(),
      address: new FormControl(),
      msg: new FormControl(),

    })
  }
  register() {
  }

  submit(data: any) {
    console.log(data);
    this.http.post("http://localhost:3000/User", data).subscribe((data:any)=>{
      console.log(data);
      window.location.href="/register:id"
    });
  }
}
