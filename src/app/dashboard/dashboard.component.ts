import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { PredictService } from "../services/predict.service";

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
//   { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
//   { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
//   { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
//   { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
//   { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
//   { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
//   { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
//   { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
//   { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
//   { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
//   { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
//   { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
//   { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
//   { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
//   { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
//   { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
//   { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
//   { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
//   { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" }
// ];

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  // displayedColumns = ["position", "name", "weight", "symbol"];
  // dataSource = ELEMENT_DATA;

  rowData;
  columnDefs;
  gridOptions;
  gridParams;

  // @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private predictService: PredictService) {}

  ngOnInit() {
    this.gridOptions = {
      autoHeight: true,
      enableColResize: true,
      enableSorting: true,
      enableFilter: true
    };
    this.columnDefs = [
      {
        headerName: "Business Category",
        field: "Business_Category",
        autoHeight: true,
        cellStyle: { "white-space": "normal" }
      },
      {
        headerName: "Business Description",
        field: "Business_Description",
        autoHeight: true,
        pinned: 'left',
        cellStyle: { "white-space": "normal" }
      },
      {
        headerName: "Industry Category",
        field: "Industry_Category",
        autoHeight: true,
        cellStyle: { "white-space": "normal" }
      },
      {
        headerName: "Product Category",
        field: "Product_Category",
        autoHeight: true,
        cellStyle: { "white-space": "normal" }
      },
      {
        headerName: "Service Category",
        field: "Service_Category",
        autoHeight: true,
        cellStyle: { "white-space": "normal" }
      }
    ];
  }

  onGridReady(params) {
    this.gridParams = params;
    this.rowData =
      this.predictService.dashboardData !== undefined ||
      this.predictService.dashboardData !== null
        ? this.predictService.dashboardData
        : null;
  }

  onRowDataChanged(params) {
    params.api.sizeColumnsToFit();
    params.api.resetRowHeights();
  }
}
