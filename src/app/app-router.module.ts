import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageOneComponent } from "./routing/page-one/page-one.component";
import { PageTwoComponent } from "./routing/page-two/page-two.component";
import { PageThreeComponent } from "./routing/page-three/page-three.component";
import { PageFourComponent } from "./routing/page-four/page-four.component";
import { SubComponent } from "./routing/page-four/sub/sub.component";
import { NotFoundComponent } from "./routing/not-found/not-found.component";

const routes: Routes = [
    {
      path: "",
      component: PageOneComponent
    },
    {
      path: "two",
      component: PageTwoComponent,
    },
    {
      path: "two/:id",
      component: PageTwoComponent
    },
    {
      path: "three",
      component: PageThreeComponent
    },
    {
      path: "four",
      component: PageFourComponent,
      children: [
        {
          path: ":id",
          component: SubComponent
        },
      ]
    },
    {
      path: "not-found",
      component: NotFoundComponent
    },
    {
      path: "**",
      redirectTo: 'not-found'
    },
  ];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRouterMdule {}