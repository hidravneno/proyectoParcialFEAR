// src/app/services/dog.service.ts
import { Injectable } from '@angular/core';
import { Dog } from '../models/dog.interface';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private dogs: Dog[] = [
    {
      id: 1,
      name: 'Labrador Retriever',
      image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=500&h=400',
      lifeExpectancy: '10-12 años',
      description: 'El Labrador Retriever es una raza amigable, extrovertida y activa. Son excelentes perros de familia, inteligentes y fáciles de entrenar.'
    },
    {
      id: 2,
      name: 'Golden Retriever',
      image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=500&h=400',
      lifeExpectancy: '10-12 años',
      description: 'El Golden Retriever es conocido por su pelaje dorado y su temperamento amigable. Son leales, inteligentes y excelentes con los niños.'
    },
    {
      id: 3,
      name: 'Pastor Alemán',
      image: 'https://images.unsplash.com/photo-1568572933382-74d440642117?w=500&h=400',
      lifeExpectancy: '9-13 años',
      description: 'El Pastor Alemán es una raza versátil, inteligente y protectora. Son utilizados frecuentemente como perros policía y de servicio.'
    },
    {
      id: 4,
      name: 'Bulldog Francés',
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&h=400',
      lifeExpectancy: '10-12 años',
      description: 'El Bulldog Francés es pequeño, muscular y con orejas características. Son perros juguetones, cariñosos y adaptables a la vida en apartamento.'
    },
    {
      id: 5,
      name: 'Beagle',
      image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=500&h=400',
      lifeExpectancy: '12-15 años',
      description: 'El Beagle es una raza pequeña a mediana, conocida por su excelente olfato. Son amigables, curiosos y excelentes compañeros para familias.'
    },
    {
      id: 6,
      name: 'Husky Siberiano',
      image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=500&h=400',
      lifeExpectancy: '12-14 años',
      description: 'El Husky Siberiano es una raza de trabajo con ojos azules característicos. Son enérgicos, independientes y requieren mucho ejercicio.'
    }
  ];

  getDogs(): Dog[] {
    return this.dogs;
  }

  getDogById(id: number): Dog | undefined {
    return this.dogs.find(dog => dog.id === id);
  }
}
