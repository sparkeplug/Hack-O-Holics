import { Component, OnInit } from "@angular/core";
import { PredictService } from "../services/predict.service";

@Component({
  selector: "app-analysis",
  templateUrl: "./analysis.component.html",
  styleUrls: ["./analysis.component.scss"]
})
export class AnalysisComponent implements OnInit {
  graphsData;
  constructor(private predictService: PredictService) {}

  ngOnInit() {
    this.predictService.graphs().subscribe(
      resp => {
        this.graphsData = resp;
        debugger;
      },
      err => {
        this.graphsData = err["error"]["text"];
        debugger;
      }
    );
  }
}
