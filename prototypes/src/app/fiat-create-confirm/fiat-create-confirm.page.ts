import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemoryService } from 'src/services/memory.service';

@Component({
  selector: 'app-fiat-create-confirm',
  templateUrl: './fiat-create-confirm.page.html',
  styleUrls: ['./fiat-create-confirm.page.scss'],
})
export class FiatCreateConfirmPage implements OnInit {

  constructor(private router: Router, private memory: MemoryService) { }

  ngOnInit() {
  }

  goto() {
    this.memory.isCreateWallet = 'true';
    this.router.navigate(['/fiat-main']);
  }

}
