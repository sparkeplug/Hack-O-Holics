import { Component, OnInit, ViewChild, Renderer2 } from "@angular/core";
import * as XLSX from "xlsx";
import { PredictService } from "./../services/predict.service";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { Router } from "@angular/router";
@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"]
})
export class UploadComponent implements OnInit {
  unformattedStringToPredict: string;

  formattedStringToPredict: string = "";
  @ViewChild("file", { static: false }) file;
  public fileToUpload: { [key: string]: File };

  constructor(
    private predictService: PredictService,
    private renderer: Renderer2,
    private ngxService: NgxUiLoaderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.unformattedStringToPredict = "";
  }

  stringToPredictChanged(e) {
    // console.log("EVENT -> ", e);
    // this.unformattedStringToPredict = this.textareabox.value;
    // this.formattedStringToPredict = JSON.stringify(
    //   this.unformattedStringToPredict,
    //   undefined,
    //   4
    // );
  }

  predictSingleCase() {
    const payload = this.unformattedStringToPredict;
    if (payload !== "") {
      const data = {
        Business_Description: payload
      };
      this.ngxService.start();
      this.predictService.singleUpload(data).subscribe(
        resp => {
          this.predictService.dashboardData = [resp];
          this.ngxService.stop();
          this.router.navigate(["/dashboard"]);
        },
        err => {
          this.ngxService.stop();
          console.error("PREDICT SINGLE CASE ERROR -> ", err);
        }
      );
    }
  }

  formatString() {
    return JSON.stringify(
      String(this.unformattedStringToPredict),
      undefined,
      4
    );
  }

  addFiles() {
    this.file.nativeElement.click();
    return false;
  }

  onFileAdded() {
    var reader = new FileReader();
    this.fileToUpload = this.file.nativeElement.files[0];
    this.ngxService.start();
    this.predictService.bulkUpload(this.fileToUpload).subscribe(
      data => {
        this.ngxService.stop();
        console.log("FILE -> ", data);
      },
      err => {
        this.ngxService.stop();
        var anchor = this.renderer.createElement("a");
        this.renderer.setAttribute(
          anchor,
          "href",
          "data:attachment/csv;charset=utf-8," + encodeURI(err["error"]["text"])
        );
        this.renderer.setAttribute(anchor, "target", "_blank");
        this.renderer.setAttribute(anchor, "download", "predictResult.csv");

        anchor.click();
      }
    );
  }
}
