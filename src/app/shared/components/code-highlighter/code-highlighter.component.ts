import { AfterViewInit } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-code-highlighter',
  templateUrl: './code-highlighter.component.html',
  styleUrl: './code-highlighter.component.css'
})
export class CodeHighlighterComponent implements OnInit, AfterViewInit {
  @Input() codeHtml: string = '';
  @Input() codeTs: string = '';
  @Input() buttonExpand: boolean = true;
  
  isExpandCode : boolean = false
  selectedType : 'html' | 'ts' = 'html'
  
  onToggleCode(){
    this.isExpandCode = !this.isExpandCode;
  }

  ngOnInit(): void {
    this.codeHtml === ''? this.selectedType = 'ts' : null
    this.buttonExpand? this.isExpandCode = false : this.isExpandCode = true
  }

  ngAfterViewInit() {
    Prism.highlightAll();
  }
}
