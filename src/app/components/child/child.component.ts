import { Component, Input } from "@angular/core";

@Component({
  selector: "child-component",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent {
  @Input() name: string = "";
}
