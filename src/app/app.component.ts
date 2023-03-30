import { Component, ViewChild } from "@angular/core";

import { ViewerComponent, AR_EXPORTS, PdfExportService, HtmlExportService, TabularDataExportService } from "@grapecity/activereports-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: AR_EXPORTS,
      useClass: PdfExportService,
      multi: true,
    },
    {
      provide: AR_EXPORTS,
      useClass: HtmlExportService,
      multi: true,
    },
    {
      provide: AR_EXPORTS,
      useClass: TabularDataExportService,
      multi: true,
    },
  ],
})
export class AppComponent {
  @ViewChild(ViewerComponent, { static: false }) reportViewer: ViewerComponent;
  onViewerInit() {
    this.reportViewer.open("assets/SampleReport.rdlx-json");
  }
}
