// src/app/components/dog-card/dog-card.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dog } from '../../models/dog.interface';

@Component({
  selector: 'app-dog-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dog-card.component.html',
  styleUrl: './dog-card.component.css'
})
export class DogCardComponent {
  @Input() dog!: Dog;
  @Input() isSelected: boolean = false;
  @Output() dogSelected = new EventEmitter<Dog>();

  private hoverTimeout: any;

  onCardClick(): void {
    this.dogSelected.emit(this.dog);
  }

  onCardHover(): void {
    // Cancela cualquier timeout previo
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }
    
    // Emite el evento después de un pequeño delay (300ms)
    this.hoverTimeout = setTimeout(() => {
      this.dogSelected.emit(this.dog);
    }, 300);
  }

  onCardLeave(): void {
    // Cancela el timeout si el mouse sale antes del delay
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    // URL de imagen de fallback para cuando falla la imagen original
    img.src = 'https://via.placeholder.com/400x300/cccccc/666666?text=' + encodeURIComponent(this.dog.name);
  }
}
