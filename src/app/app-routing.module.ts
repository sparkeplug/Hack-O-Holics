import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UploadComponent } from "./upload/upload.component";
import { TeamComponent } from "./team/team.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AnalysisComponent } from "./analysis/analysis.component";

const routes: Routes = [
  { path: "upload", component: UploadComponent },
  { path: "team", component: TeamComponent },
  { path: "analysis", component: AnalysisComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "", redirectTo: "/upload", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
