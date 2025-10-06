// src/app/components/main/main.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DogService } from '../../services/dog.service';
import { Dog } from '../../models/dog.interface';
import { DogCardComponent } from '../dog-card/dog-card.component';
import { DogDetailComponent } from '../dog-detail/dog-detail.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, DogCardComponent, DogDetailComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  username: string = '';
  dogs: Dog[] = [];
  selectedDog: Dog | null = null;

  constructor(
    private route: ActivatedRoute,
    private dogService: DogService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || 'Usuario';
    });

    this.dogs = this.dogService.getDogs();
    
    if (this.dogs.length > 0) {
      this.selectedDog = this.dogs[0];
    }
  }

  onDogSelected(dog: Dog): void {
    this.selectedDog = dog;
  }
}
