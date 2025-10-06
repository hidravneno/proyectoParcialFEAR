// src/app/components/dog-detail/dog-detail.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dog } from '../../models/dog.interface';

@Component({
  selector: 'app-dog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dog-detail.component.html',
  styleUrl: './dog-detail.component.css'
})
export class DogDetailComponent {
  @Input() dog: Dog | null = null;
}
