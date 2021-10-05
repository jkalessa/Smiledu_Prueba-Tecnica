import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.css'],
})
export class ClassroomsComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'year',
    'location',
    'program',
    'grade',
    'section',
    'scholarship',
    'status',
  ];
  dataSource = new MatTableDataSource<TableElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = 'Registros por pagina';
    this.dataSource.paginator = this.paginator;
  }
}

export interface TableElement {
  year: number;
  location: string;
  program: string;
  grade: string;
  section: string;
  scholarship: string;
  status: string;
}

const ELEMENT_DATA: TableElement[] = [
  {
    year: 2020,
    location: 'PREMIUM COLLEGE-SURCO',
    program: 'Año Lectivo',
    grade: '1° PRIMARIA',
    section: 'LOS LEÑADORES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: 'Activo',
  },
  {
    year: 2020,
    location: 'PREMIUM COLLEGE-SURCO',
    program: 'Año Lectivo',
    grade: '1° PRIMARIA',
    section: 'LOS PASTORES',
    scholarship: 'BECA SOCIOECONOMICA',
    status: 'Inactivo',
  },
  {
    year: 2020,
    location: 'PREMIUM COLLEGE-SURCO',
    program: 'Año Lectivo',
    grade: '1° PRIMARIA',
    section: 'MIGUEL DE CERVANTES',
    scholarship: '-',
    status: 'Inactivo',
  },
];
