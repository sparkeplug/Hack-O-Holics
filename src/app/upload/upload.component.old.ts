import { Component, OnInit, ViewChild } from "@angular/core";
import * as XLSX from "xlsx";
import { PredictService } from "./../services/predict.service";
import { forkJoin } from "rxjs";
import { MatDialogRef } from "@angular/material/dialog";
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

  constructor(
    private predictService: PredictService,
    public dialogRef: MatDialogRef<any>
  ) {}

  ngOnInit() {}

  addFiles() {
    this.file.nativeElement.click();
    return false;
  }

  onFileAdded() {
    this.fileToUpload = this.file.nativeElement.files[0];
    debugger;
    this.progress = this.predictService.bulkUpload(this.file);
    let allProgressObservables = [];
    for (let key in this.progress) {
      allProgressObservables.push(this.progress[key].progress);
    }
    // Adjust the state variables

    // The OK-button should have the text "Finish" now
    this.primaryButtonText = "Finish";

    // The dialog should not be closed while uploading
    this.canBeClosed = false;
    this.dialogRef.disableClose = true;

    // Hide the cancel-button
    this.showCancelButton = false;

    // When all progress-observables are completed...
    forkJoin(allProgressObservables).subscribe(end => {
      // ... the dialog can be closed again...
      this.canBeClosed = true;
      this.dialogRef.disableClose = false;

      // ... the upload was successful...
      this.uploadSuccessful = true;

      // ... and the component is no longer uploading
      this.uploading = false;
    });
  }
}
