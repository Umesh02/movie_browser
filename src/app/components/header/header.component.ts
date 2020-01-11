import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  queryTerm: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  submitHander(evt) {
    evt.preventDefault();
    this.router.navigate(["/movies"], { queryParams: { q: this.queryTerm } });
  }

  clearInput(inpVal: HTMLInputElement) {
    // console.log(inpVal);
    inpVal.value = "";
  }
}
