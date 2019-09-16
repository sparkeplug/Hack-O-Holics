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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AnalysisComponent } from './analysis/analysis.component';

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
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
