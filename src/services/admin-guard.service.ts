import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { LoginServiceService } from "./loginServiceService";

@Injectable({
  providedIn: "root"
})
export class AdminGuardService implements CanActivate {
  public constructor(private loginService: LoginServiceService, private router: Router) {}

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  state: RouterStateSnapshot;

  public canActivate(r: ActivatedRouteSnapshot, s: RouterStateSnapshot): boolean {
    if (this.loginService.isAdmin()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
