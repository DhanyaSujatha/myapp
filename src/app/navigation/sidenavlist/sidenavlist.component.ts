import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sidenavlist',
  templateUrl: './sidenavlist.component.html',
  styleUrls: ['./sidenavlist.component.css']
})
export class SidenavlistComponent implements OnInit {
  @Output() sidenavClose= new EventEmitter<void>();
  isAuth=false;
  authsub:Subscription;
  
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authsub=this.authService.authChange.subscribe(authStatus=>{
      this.isAuth=authStatus;
    })
  }
  onClose(){
this.sidenavClose.emit()
  }
  onLogout(){
    this.onClose();
    this.authService.logout();
  }
  ngOnDestroy(){
this.authsub.unsubscribe();
  }

}
