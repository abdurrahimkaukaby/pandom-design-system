import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output, QueryList, Renderer2, SimpleChanges, ViewChildren } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-search-auto-suggest',
  templateUrl: './search-auto-suggest.component.html',
  styleUrl: './search-auto-suggest.component.css'
})
export class SearchAutoSuggestComponent implements OnChanges {
  @Input() searchResults: string[] = ['Gas Spanza', 'Gasoline Station', 'Gastronomy', 'Random Result','Gasoline Station', 'Gastronomy', 'Random Result','Gasoline Station', 'Gastronomy', 'Random Result']; // Example data
  @Input() searchTerm: string = 'Gas'; // Example search term
  @Output() onEmitSearch = new EventEmitter<string>();


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchResults'] && changes['searchResults']?.previousValue !== changes['searchResults']?.currentValue!){
    }

    if (changes['searchTerm'] && changes['searchTerm']?.previousValue !== changes['searchTerm']?.currentValue!){
    }
  }

// Function to highlight the search term in each result
highlightSearchTerm(text: string, searchTerm: string): string {
  if (!searchTerm.trim()) {
    return text;  // If search term is empty, return the original text
  }
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, '<span class="bg-etma-blue-100 py-[2px]">$1</span>');
}
// constructor(private sanitizer: DomSanitizer) {}

//   // Function to highlight the search term in each result
//   highlightSearchTerm(text: string, searchTerm: string): SafeHtml {
//     if (!searchTerm.trim()) {
//       return this.sanitizer.bypassSecurityTrustHtml(text); // If search term is empty, return original text as safe HTML
//     }

//     // Create a regular expression to match the search term (case-insensitive)
//     const regex = new RegExp(`(${searchTerm})`, 'gi');
//     const highlightedText = text.replace(regex, '<span class=" bg-etma-blue-100 py-1">$1</span>');

//     // Return the HTML with highlights as safe HTML to be rendered
//     return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
//   }

  // Function to handle the click event on each result
  onResultClick(result: string): void {
    console.log('You clicked on:', result);
    this.onEmitSearch.emit(result)
    // Implement your logic here when a result is clicked
  }
}
