import { Component } from '@angular/core';
import { EnumToArrayPipe } from 'src/app/shared/enum-to-array.pipe';
import { Coupon } from 'src/models/coupon';
import { CompanysService } from 'src/services/company.service';
import { Router } from '@angular/router';
import { couponType } from 'src/models/couponType';

@Component({
    selector: "app-company-coup-type",
    templateUrl: "./company-coup-type.component.html",
    styleUrls: ["./company-coup-type.component.css"],
    providers: [EnumToArrayPipe]
  })
  export class CompanyCouponTypeComponent {
    
   public coupon = new Coupon();
    constructor(private companyService: CompanysService, private router: Router) {}

    public couponType = couponType;
    public chosenType: couponType;
    public companyid:number;
    public coupons: Coupon[];

    public onSearch() {
        this.companyService.getCouponByType(this.companyid,this.chosenType).subscribe(coupons => {
          this.coupons = coupons;
          console.log(this.coupons);
        }),
          err => {
            alert(err.message);
            this.coupons = undefined;
          };
      }
    
  }