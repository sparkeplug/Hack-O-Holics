import { Component, OnInit, ViewChild, Renderer2 } from "@angular/core";
import * as XLSX from "xlsx";
import { PredictService } from "./../services/predict.service";
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
    private renderer: Renderer2
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
    if(payload !== '') {
      this.predictService.singleUpload().subscribe(
        resp => {
          console.log("SINGLE RESP ",resp);
          
        },
        err => {
          console.log("SINGLE ERR ",err);
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

  // unicodeStringToTypedArray(s) {
  //   var escstr = encodeURIComponent(s);
  //   var binstr = escstr.replace(/%([0-9A-F]{2})/g, (match, p1) => {
  //     return String.fromCharCode("0x" + p1);
  //   });
  //   var ua = new Uint8Array(binstr.length);
  //   Array.prototype.forEach.call(binstr, function(ch, i) {
  //     ua[i] = ch.charCodeAt(0);
  //   });
  //   return ua;
  // }

  onFileAdded() {
    var reader = new FileReader();
    this.fileToUpload = this.file.nativeElement.files[0];
    this.predictService.bulkUpload(this.fileToUpload).subscribe(
      data => {
        console.log("FILE -> ", data);
      },
      err => {
        var anchor = this.renderer.createElement("a");
        this.renderer.setAttribute(
          anchor,
          "href",
          "data:attachment/csv;charset=utf-8," + encodeURI(err["error"]["text"])
        );
        this.renderer.setAttribute(anchor, "target", "_blank");
        this.renderer.setAttribute(anchor, "download", "predictResult.csv");

        anchor.click();
        // console.log("ERR -> ", err);
        // var data = btoa(this.decode_utf8(err["error"]["text"]));
        // var workbook = XLSX.read(data, { type: "base64" });
        // debugger;
        // let d = this.unicodeStringToTypedArray(err["error"]["text"]);
        // let d = btoa(err["error"]["text"]);
        // debugger;
        // let arr = new Array();
        // for (var i = 0; i != d.length; ++i) arr[i] = String.fromCharCode(d[i]);
        // // var bstr = arr.join("");
        // var data = new Uint8Array(arr);

        /* Call XLSX */
        // var workbook = XLSX.read(d, { type: "base64" });
        // XLSX.writeFile(workbook, "predictedAnalysis.xlsx");
      }
    );
  }
}
