import { Component, Input } from "@angular/core";

@Component({
  selector: "second-child-component",
  templateUrl: "./second-child.component.html",
  styleUrls: ["./second-child.component.css"]
})
export class SecondChildComponent {
  @Input() name: string = "";
}
