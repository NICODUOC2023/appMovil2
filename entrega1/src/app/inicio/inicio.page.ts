import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonPlaceholderService } from '../services/jsonplaceholder.service';
import { Storage } from '@ionic/storage-angular';

interface NavigationState {
  username?: string;
}
interface Estudiante {
  nombre: string;
  rut: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  username: string = '';
  posts: any[] = [];  // Propiedad para almacenar los posts obtenidos de la API
  estudiantes: Estudiante[] = [];  // Propiedad para almacenar la lista de estudiantes
  searchTerm: string = '';  // Propiedad para almacenar el término de búsqueda
  nombre: string | null = null;
  nombreAlmacenado: string | null = null;



  // Inyecta tanto el Router como el JsonPlaceholderService
  constructor(
    private router: Router,
    private jsonPlaceholderService: JsonPlaceholderService,
    private storage: Storage

  ) {this.initStorage()}

  ngOnInit() {
    // Obtén el username del estado de navegación, si existe
    const state = this.router.getCurrentNavigation()?.extras.state;
    this.username = state?.['username'] || 'Usuario';

    // Llama a la función para cargar los posts
    this.loadPosts();

    this.estudiantes = [ 
      { nombre: 'Juan Pérez', rut: '12.345.678-9' },
      { nombre: 'Ana Gómez', rut: '76.543.210-1' },
      { nombre: 'Luis Sánchez', rut: '23.456.789-0' },
      { nombre: 'Carla López', rut: '87.654.321-0' },
      { nombre: 'Miguel Torres', rut: '98.765.432-1' },
      { nombre: 'María Fernández', rut: '34.567.890-2' },
      { nombre: 'Fernando Castillo', rut: '45.678.901-3' },
      { nombre: 'Claudia Martínez', rut: '56.789.012-4' },
      { nombre: 'Roberto Díaz', rut: '67.890.123-5' },
      { nombre: 'Sofía Morales', rut: '78.901.234-6' },
      { nombre: 'Daniela Muñoz', rut: '89.012.345-7' },
      { nombre: 'Esteban Ríos', rut: '90.123.456-8' },
      { nombre: 'Patricia Salazar', rut: '01.234.567-9' },
      { nombre: 'Jorge Castillo', rut: '11.223.344-5' },
      { nombre: 'Valentina Aguirre', rut: '22.334.455-6' },
      { nombre: 'Cristian Bravo', rut: '33.445.566-7' },
      { nombre: 'Camila Peña', rut: '44.556.677-8' },
      { nombre: 'Felipe Ortega', rut: '55.667.788-9' },
      { nombre: 'Ximena Silva', rut: '66.778.899-0' },
      { nombre: 'Samuel Jiménez', rut: '77.889.900-1' },
      { nombre: 'Natalia Pinto', rut: '88.990.011-2' },
    ];


  }

  async initStorage() {
    await this.storage.create(); // Inicializamos el storage antes de usarlo
    }


  guardarNombre() {
    this.storage.set('nombre', this.nombre);
    console.log('Nombre guardado:', this.nombre);
  }

  async obtenerNombre() {
    this.nombreAlmacenado = await this.storage.get('nombre');
    console.log('Nombre almacenado:', this.nombreAlmacenado);
  }
  
  async eliminarNombre() {
    await this.storage.remove('nombre');
    this.nombreAlmacenado = null;
    console.log('Nombre eliminado');
  }
  
  async limpiarStorage() {
    await this.storage.clear();
    this.nombreAlmacenado = null;
    console.log('Almacenamiento limpiado');
  }


  // Función para cargar los posts desde el servicio
  loadPosts() {
    this.jsonPlaceholderService.getPosts().subscribe(
      (data) => {
        this.posts = data;  // Asigna los datos obtenidos a la propiedad `posts`
      },
      (error) => {
        console.error('Error al cargar los posts:', error);
      }
    );
  }  
  
  buscarEstudiantes() {
    return this.estudiantes.filter(estudiante =>
      estudiante.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  
}
