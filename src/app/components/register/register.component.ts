import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 data:any;
 id:any;
 lastid:any;
  constructor( private http:HttpClient ,private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get(this.id);
    console.log(this.id);

    this.http.get('http://localhost:3000/User').subscribe(res => {
      console.log('res', res)
      this.data = res;
      console.log(this.data);
      this.lastid =[]
    })
  }
}
