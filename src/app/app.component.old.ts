import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "hack-o-holics";
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.customSvgMaterialIcons();
  }

  customSvgMaterialIcons() {
    this.matIconRegistry.addSvgIcon(
      `cloud`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `../assets/images/cloud.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      `download`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `../assets/images/download.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      `upload`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `../assets/images/upload-file.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      `upload`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `../assets/images/ui.svg`
      )
    );
  }
}
