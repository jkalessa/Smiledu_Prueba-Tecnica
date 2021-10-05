import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ClassroomsComponent } from './components/classrooms/classrooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  expanded = true;

  menuItems: MenuItem[] = [
    { icon: 'home', label: 'Dashboard' },
    { icon: 'library_books', label: 'Noticias' },
    { icon: 'today', label: 'Agenda' },
    { icon: '', label: '' },
    { icon: 'airplay', label: 'Planificación Institucional' },
    { icon: 'work', label: 'Talento Humano' },
    { icon: 'attach_money', label: 'Tesorería' },
    { icon: 'class', label: 'Gestión académica' },
    { icon: 'assignment_ind', label: 'Matrícula' },
    { icon: 'event', label: 'Programación curricular' },
    { icon: 'settings', label: 'Configuración' },
    { icon: '', label: '' },
    { icon: 'credit_card', label: 'Facturación' },
  ];

  myControl = new FormControl();
  filteredOptions: Observable<string[]> | undefined;
  options: string[] = [
    'Abraham Salazar',
    'Valentina Corahua',
    'Peter Castle',
    'Juan Gonzales',
    'Carolina Guerrero',
  ];

  expandibleItems: ExpandibleItem[] = [
    {
      title: '3año. Inicial',
      children: [
        { nombre: 'Los pastorcitos', nota: ' 16/20' },
        { nombre: 'Niños del Señor', nota: '15/20' },
        { nombre: 'Bonitos y gorditos', nota: '19/20' },
      ],
    },
    {
      title: '4año. Inicial',
      children: [
        { nombre: 'Los panchos', nota: ' 14/20' },
        { nombre: 'Retoños', nota: '17/20' },
        { nombre: 'Los Milagritos', nota: '12/20' },
      ],
    },
    {
      title: '5año. Inicial',
      children: [
        { nombre: 'Los Moringatos', nota: ' 18/20' },
        { nombre: 'Pequeños y traviesos', nota: '13/20' },
        { nombre: 'Tamalitos de amor', nota: '19/20' },
      ],
    },
    {
      title: '1° Primaria',
      children: [
        { nombre: 'Los Pochis', nota: ' 20/20' },
        { nombre: 'Los Chicos del barrio', nota: '13/20' },
        { nombre: 'Los Tiktokers', nota: '11/20' },
      ],
    },
    {
      title: '2° Primaria',
      children: [
        { nombre: 'Los Pochis', nota: ' 20/20' },
        { nombre: 'Los Chicos del barrio', nota: '13/20' },
        { nombre: 'Los Tiktokers', nota: '11/20' },
      ],
    },
    {
      title: '3° Primaria',
      children: [
        { nombre: 'Los Pochis', nota: ' 20/20' },
        { nombre: 'Los Chicos del barrio', nota: '13/20' },
        { nombre: 'Los Tiktokers', nota: '11/20' },
      ],
    },
  ];
  colleges: ItemDropdown[] = [
    { value: '', viewValue: 'I.E. ANDRES AVELINO CACERES' },
    { value: '', viewValue: 'I.E.P MANUEL POLO JIMENEZ' },
    { value: '', viewValue: 'I.E.P LA SAYE' },
  ];
  religions: ItemDropdown[] = [
    { value: '', viewValue: 'Adventista' },
    { value: '', viewValue: 'Católico' },
    { value: '', viewValue: 'Cristiano' },
    { value: '', viewValue: 'Evangélica' },
    { value: '', viewValue: 'Judía' },
  ];
  mobilities: ItemDropdown[] = [
    { value: 'steak-0', viewValue: 'MOVILIDAD PARTICULAR' },
    { value: 'pizza-1', viewValue: 'MOVILIDAD ESTATAL' },
    { value: 'tacos-2', viewValue: 'SIN MOVILIDAD' },
  ];

  toggleSideNav() {
    this.expanded = !this.expanded;
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  openDialog() {
    this.dialog.open(ClassroomsComponent, { width: '900px' });
  }
}

interface MenuItem {
  icon: string;
  label: string;
}

interface ExpandibleItem {
  title: string;
  children: ExpandibleItemChild[];
}

interface ExpandibleItemChild {
  nombre: string;
  nota: string;
}
interface ItemDropdown {
  value: string;
  viewValue: string;
}
