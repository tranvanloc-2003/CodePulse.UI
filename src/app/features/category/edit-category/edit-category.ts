import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-category',
  imports: [],
  templateUrl: './edit-category.html',
  styleUrl: './edit-category.css'
})
export class EditCategory implements OnInit, OnDestroy {
  id: string | null = null;
  paramSubscription?: Subscription;
  constructor(private router: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.paramSubscription = this.router.paramMap.subscribe({
      next: (params) => {
        this.id = params.get("id");
      }
    })
  }
  ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
  }
}
