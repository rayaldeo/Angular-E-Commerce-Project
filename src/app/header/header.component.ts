import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
    });
  }

  showModal:boolean;
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder : FormBuilder,private server:ServerService) {}

  show()
  {
    this.showModal= true; //Show-Hide Modal Check
  }


  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }


//convenient getter for easy access to form fields
  get f()
  {
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    console.log("The form has been submitted");
    //stop here if  form is invalid
    if( this.registerForm.invalid)
    {
      return;
    }

    if( this.submitted)
    {
      this.showModal = false;
      console.log(this.registerForm.get('email').value);
      console.log(this.registerForm.get('password').value);
      //this.server.getUser().subscribe(data => {console.log(this.events=data)});
    }
  }



}
