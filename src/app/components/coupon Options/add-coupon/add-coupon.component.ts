import { Component, OnInit } from "@angular/core";
import { Coupon } from "src/models/coupon";
import { Router } from "@angular/router";
import { couponType } from "src/models/couponType";
import { EnumToArrayPipe } from "src/app/shared/enum-to-array.pipe";
import { dateStringToNumber } from 'src/app/Utils/dateUtilConvertor';
import { CompanysService } from 'src/services/company.service';
import { LoginServiceService } from 'src/services/loginServiceService';
import { Company } from 'src/models/company';

@Component({
  selector: "app-add-coupon",
  templateUrl: "./add-coupon.component.html",
  styleUrls: ["./add-coupon.component.css"],
  providers: [EnumToArrayPipe]
})
export class AddCouponComponent {
  public coupon = new Coupon();
  public couponType = couponType;

  public startDate: string;
  public endDate: string;
  public company : Company;
  public chosenCompanyId: number;

  constructor(private companyService: CompanysService, private router: Router,private loginService: LoginServiceService) {}
  
  public addCoupon(): void {
     
    this.coupon.startDate = dateStringToNumber(this.startDate);
    this.coupon.endDate = dateStringToNumber(this.endDate);

      this.companyService.addCoupon(this.company,this.coupon).subscribe(
        coupon => {
          alert("Coupon has been successfully Added.");

          this.router.navigate(["company/coupons"]);
        },
         err => alert(err.message)
        // err => alert("Coupon Title Allready Exist!")
      );
  }
    
}
