import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { AppServicesComponent } from './services/app-services/app-services.component';
import { GenericService } from './services/generic.service';
import { LogginService } from './services/logging.service';
import { RoutingComponent } from './routing/routing.component';
import { PageOneComponent } from './routing/page-one/page-one.component';
import { PageTwoComponent } from './routing/page-two/page-two.component';
import { PageThreeComponent } from './routing/page-three/page-three.component';
import { PageFourComponent } from './routing/page-four/page-four.component';
import { SubComponent } from './routing/page-four/sub/sub.component';
import { NotFoundComponent } from './routing/not-found/not-found.component';
import { AppRouterMdule } from './app-router.module';
import { ObserveComponent } from './observe/observe.component';
import { FormsComponent } from './forms/forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpComponent } from './http/http.component';
import { ObjService } from './http/obj.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    TestComponentComponent,
    DirectivesComponent,
    HighlightDirective,
    UnlessDirective,
    AppServicesComponent,
    RoutingComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFourComponent,
    SubComponent,
    NotFoundComponent,
    ObserveComponent,
    FormsComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    HttpComponent
  ],
  imports: [
    AppRouterMdule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [GenericService, LogginService, ObjService], // To Inject a service inside a service declare theme here
  bootstrap: [AppComponent]
})
export class AppModule { }
