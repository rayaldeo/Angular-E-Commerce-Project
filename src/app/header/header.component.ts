import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private formBuilder : FormBuilder) {}

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
    //stop here if  form is invalid
    if( this.registerForm.invalid)
    {
      return;
    }

    if( this.submitted)
    {
      this.showModal = false;
    }
  }
}
