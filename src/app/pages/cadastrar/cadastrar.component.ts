import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ApiService } from "src/app/Services/api.service";

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
    ]),
    phone: new FormControl({ value: null, disabled: false }, [
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(15)
    ]),
    cpf: new FormControl({ value: null, disabled: false }, [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11)
    ])
  });

  constructor(private api: ApiService) {}

  ngOnInit() {}

  async handleRegister() {
    const data = this.registerForm.getRawValue();
    try {
      await this.api.register(data);
    } catch (error) {
      console.error(error);
    }
  }
}
