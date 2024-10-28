import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginationResultDTO } from '../../../../core/dto/pagination.dto';

@Component({
  selector: 'app-footer-pagination',
  templateUrl: './footer-pagination.component.html',
  styleUrl: './footer-pagination.component.css'
})
export class FooterPaginationComponent {
  @Input() paginationData : PaginationResultDTO<any> = <PaginationResultDTO<any>>{}

  @Output() pageChange = new EventEmitter<number>();

  goToPage(page: number) {
    console.log('emit go to page => ', page);
    
    this.pageChange.emit(page);
  }

  getPages(): number[] {
    const pages: number[] = [];

    if(this.paginationData){
      const { currentPage, lastPage } = this.paginationData;
  
      // Define the window size of pages to show around the current page
      const pageWindow = 2;
      const startPage = Math.max(1, currentPage - pageWindow);
      const endPage = Math.min(lastPage, currentPage + pageWindow);
  
      // Populate the pages array
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
    }

    return pages;
  }

}
