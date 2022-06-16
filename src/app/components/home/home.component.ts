import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  formdata:any;
  imagecode: string = "../../../assets/profile.jpg";

  constructor(private http: HttpClient , private router:Router) { }

  ngOnInit(): void {
    this.data = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      city: new FormControl(),
      address: new FormControl(),
      msg: new FormControl(),
      image: new FormControl()

    })

  }
 

  submit(data: any) {
    data.image =  this.imagecode;
    this.http.post("http://localhost:3000/User", data).subscribe((data:any)=>{
      console.log(data.id);
      console.log(data);

      window.location.href=`/register/${data.id}`;
    });
  }

  handleUpload(event: any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = ()=>{
      if(reader.result != null)
        this.imagecode = reader.result.toString();
    }

  }
}
