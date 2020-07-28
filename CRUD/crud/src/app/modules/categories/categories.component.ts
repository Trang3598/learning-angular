import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Category} from "../../model/category";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource = new MatTableDataSource<Category>(this.categories);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private apiService: ApiService) {
    this.showCategories();
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.showCategories();
    this.dataSource.paginator = this.paginator;
  }

  showCategories(): void {
    this.apiService.getCategories().subscribe(categories => {
      this.categories = categories
      this.dataSource.data = categories;
    })
  }

  delete(category: Category): void {
    this.categories = this.categories.filter(h => h !== category);
    this.apiService.deleteCategory(category).subscribe(res => {
      alert('Delete successfully');
      this.showCategories();
    }, error => {
      console.log(error)
    });
  }
}
