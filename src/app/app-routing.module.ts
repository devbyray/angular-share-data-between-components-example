import { NgModule } from "@angular/core";
import { ParentToChildComponent } from "./pages/parent-to-child/parent-to-child.component";
import { ChildToChildComponent } from "./pages/child-to-child/child-to-child.component";
import { ChildToParentComponent } from "./pages/child-to-parent/child-to-parent.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", component: ParentToChildComponent },
  { path: "child-to-child", component: ChildToChildComponent },
  { path: "child-to-parent", component: ChildToParentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
