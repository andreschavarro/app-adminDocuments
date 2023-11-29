import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select"; // Import MatSelectModule
import { MatCardModule } from "@angular/material/card"; // Import MatCardModule
import { MatRadioModule } from "@angular/material/radio"; // Import MatRadioModule
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  exports: [
    MatInputModule,
    MatSelectModule, // Use MatSelectModule
    MatCardModule, // Use MatCardModule
    MatRadioModule, // Use MatRadioModule
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule
  ],
})
export class MaterialModule {}
