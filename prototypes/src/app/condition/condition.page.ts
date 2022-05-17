import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemoryService } from 'src/services/memory.service';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.page.html',
  styleUrls: ['./condition.page.scss'],
})
export class ConditionPage implements OnInit {

  public isAgree = false
  constructor(private memory: MemoryService, private router: Router) {
  }

  ngOnInit() {
  }
  
  ionViewDidEnter() {
    this.isAgree = this.memory.isAgree;
    console.log(this.isAgree);
  }

  gotoPage(){
    if (this.isAgree == false || this.isAgree == undefined) {
      this.router.navigate(['/consent']);
    }
    else{
      this.router.navigate(['/memeber']);
    }
  }

}
