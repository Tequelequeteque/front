import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"]
})
export class CadastrarComponent implements OnInit {
  public registerForm = new FormGroup({
    name: new FormControl({ value: null, disabled: false }, [
      Validators.required,
      Validators.minLength(5)
    ]),
    email: new FormControl({ value: null, disabled: false }, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl({ value: null, disabled: false }, [
      Validators.required,
      Validators.minLength(6)
    ]),
    passwordConfirmation: new FormControl({ value: null, disabled: false }, [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  constructor() {}

  ngOnInit() {}
}
