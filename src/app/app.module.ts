import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AgGridModule } from "ag-grid-angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialsModule } from "./materials.module";
import { HeaderComponent } from "./header/header.component";
import { UploadComponent } from "./upload/upload.component";
import { TeamComponent } from "./team/team.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AnalysisComponent } from "./analysis/analysis.component";
import { NgxUiLoaderModule, NgxUiLoaderConfig } from "ngx-ui-loader";

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "white",
  bgsOpacity: 0.5,
  bgsPosition: "bottom-right",
  bgsSize: 60,
  bgsType: "ball-spin-clockwise",
  blur: 5,
  delay: 0,
  fgsColor: "red",
  fgsPosition: "center-center",
  fgsSize: 60,
  fgsType: "ball-scale-multiple",
  gap: 24,
  logoPosition: "top-center",
  logoSize: 120,
  logoUrl: "./assets/images/brain.svg",
  masterLoaderId: "master",
  overlayBorderRadius: "0",
  overlayColor: "rgba(40, 40, 40, 0.8)",
  pbColor: "red",
  pbDirection: "ltr",
  pbThickness: 5,
  hasProgressBar: true,
  text: "Connecting Server ...",
  textColor: "#FFFFFF",
  textPosition: "center-center",
  maxTime: -1,
  minTime: 500
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UploadComponent,
    TeamComponent,
    DashboardComponent,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
