import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenavlist',
  templateUrl: './sidenavlist.component.html',
  styleUrls: ['./sidenavlist.component.css']
})
export class SidenavlistComponent implements OnInit {
  @Output() sidenavClose= new EventEmitter<void>();
  
  constructor() { }

  ngOnInit() {
  }

  onClose(){
    this.sidenavClose.emit()
  }

}
