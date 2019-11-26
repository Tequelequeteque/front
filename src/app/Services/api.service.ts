import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private _token: {
    type: string;
    token: string;
    refreshToken: string;
  };

  constructor(private _api: HttpClient) {}

  private getHeaderTypeJson(header: HttpHeaders = null) {
    return (header || new HttpHeaders()).set(
      "Content-Type",
      "application/json"
    );
  }

  public setToken(token) {
    this._token = token;
  }

  private getHeaderToken(header: HttpHeaders = null) {
    return (header || new HttpHeaders()).set(
      "Authorization",
      `${this._token.type} ${this._token.token}`
    );
  }

  public login({ email, password }) {
    return this._api
      .post(
        `${environment.apiURL}/sessions`,
        { email, password },
        { headers: this.getHeaderTypeJson() }
      )
      .toPromise();
  }
}
