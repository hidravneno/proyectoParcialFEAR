# 🐕 Dog Breeds Explorer - Proyecto Parcial

Una aplicación web desarrollada con Angular 17 que permite explorar diferentes razas de perros, visualizar sus características y obtener información detallada sobre cada una.

## 📋 Descripción del Proyecto

Este proyecto es una aplicación Single Page Application (SPA) desarrollada como proyecto parcial que presenta un catálogo interactivo de razas de perros. La aplicación incluye autenticación básica, navegación entre componentes y una interfaz intuitiva para explorar información sobre diferentes razas caninas.

##  Características Principales

- **Sistema de Login**: Autenticación básica para acceder a la aplicación
- **Catálogo de Razas**: Visualización de 6 razas de perros populares
- **Información Detallada**: Cada raza incluye:
  - Imagen representativa
  - Esperanza de vida
  - Descripción detallada de características
- **Navegación Fluida**: Router de Angular para navegación SPA
- **Diseño Responsivo**: Interfaz adaptable con Bootstrap 5
- **Server-Side Rendering**: Configurado con Angular Universal

##  Razas Incluidas

1. **Labrador Retriever** - Amigable, extrovertido y activo
2. **Golden Retriever** - Leal, inteligente y excelente con niños
3. **Pastor Alemán** - Versátil, inteligente y protector
4. **Bulldog Francés** - Pequeño, juguetón y adaptable
5. **Beagle** - Curioso, amigable y excelente olfato
6. **Husky Siberiano** - Enérgico, independiente y resistente

##  Tecnologías Utilizadas

- **Frontend**: Angular 17.3.0
- **Styling**: Bootstrap 5.3.8
- **Backend**: Node.js con Express (SSR)
- **Testing**: Jasmine y Karma
- **Build Tool**: Angular CLI 17.3.17
- **TypeScript**: 5.4.2

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── login/           # Componente de autenticación
│   │   ├── main/            # Componente principal con catálogo
│   │   ├── dog-card/        # Tarjeta individual de perro
│   │   └── dog-detail/      # Vista detallada de cada raza
│   ├── models/
│   │   └── dog.interface.ts # Interface TypeScript para Dog
│   ├── services/
│   │   └── dog.service.ts   # Servicio para manejo de datos
│   └── app.routes.ts        # Configuración de rutas
└── assets/                  # Recursos estáticos
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn
- Angular CLI

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd proyectoParcial
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm start
   # o
   ng serve
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:4200/
   ```

## 🎮 Uso de la Aplicación

1. **Inicio**: La aplicación redirige automáticamente al login
2. **Login**: Ingresa credenciales para acceder (interfaz de demostración)
3. **Catálogo Principal**: Navega por las tarjetas de diferentes razas
4. **Detalles**: Haz clic en cualquier raza para ver información detallada

## 📜 Scripts Disponibles

```bash
# Servidor de desarrollo
npm start

# Construir para producción
npm run build

# Ejecutar tests
npm test

# Construir en modo watch
npm run watch

# Servidor SSR
npm run serve:ssr:proyectoParcial
```

## 🧪 Testing

El proyecto incluye configuración para testing unitario con Jasmine y Karma:

```bash
npm test
```

## 🏗️ Build para Producción

Para generar una build optimizada para producción:

```bash
npm run build
```

Los archivos se generarán en el directorio `dist/`.

## 🌐 Server-Side Rendering (SSR)

El proyecto está configurado con Angular Universal para SSR:

```bash
npm run build
npm run serve:ssr:proyectoParcial
```


## 📝 Licencia

Este proyecto fue desarrollado con fines educativos como parte de un proyecto parcial.

## 👨‍💻 Autor

**Francisco Eduardo Aramburo Reyes**




