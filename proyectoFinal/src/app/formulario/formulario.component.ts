import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      mensaje: ["", [Validators.required, Validators.minLength(10)]]
    }

    )
  }

  getForm(){
    return this.form.controls;
  }
  
  onSubmit(){
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    alert("Mensaje enviado");
  }
  
  onReset(){
    this.submitted = false;
    this.form.reset();
  }

}
