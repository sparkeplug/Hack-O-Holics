import { Component, OnInit, ViewChild } from "@angular/core";
import * as XLSX from "xlsx";
import { PredictService } from "./../services/predict.service";
import { log } from "util";
import { saveAs } from "file-saver";
@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"]
})
export class UploadComponent implements OnInit {
  @ViewChild("file", { static: false }) file;
  public files: Set<File> = new Set();
  public fileToUpload: { [key: string]: File };
  progress;
  canBeClosed = true;
  primaryButtonText = "Upload";
  showCancelButton = true;
  uploading = false;
  uploadSuccessful = false;

  constructor(private predictService: PredictService) {}

  ngOnInit() {}

  addFiles() {
    this.file.nativeElement.click();
    return false;
  }

  onFileAdded() {
    var reader = new FileReader();
    this.fileToUpload = this.file.nativeElement.files[0];
    this.predictService.bulkUpload(this.fileToUpload).subscribe(
      data => {
        console.log("FILE -> ", data);
      },
      err => {
        console.log("ERR -> ", err);
        let blob = err["error"]["text"].blob();
        saveAs(blob, "fileName.xlsx");
      }
    );
  }
}
