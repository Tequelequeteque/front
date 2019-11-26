import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ApiService } from "src/app/Services/api.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public loginForm = new FormGroup({
    email: new FormControl(
      {
        value: null,
        disabled: false
      },
      Validators.compose([Validators.required, Validators.email])
    ),
    password: new FormControl(
      {
        value: null,
        disabled: false
      },
      Validators.compose([Validators.required, Validators.minLength(6)])
    )
  });

  constructor(private _api: ApiService) {}

  ngOnInit() {}

  async handleLogin() {
    const user = this.loginForm.getRawValue();
    try {
      const token = await this._api.login(user);
      this._api.setToken(token);
    } catch (error) {
      console.error(error);
    }
  }
}
