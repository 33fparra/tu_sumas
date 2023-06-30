import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/core/services/cargar-scripts/cargar-scripts.service';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {

  constructor( private _CargaScripts:CargarScriptsService) {
    _CargaScripts.Carga(["main", "owl.carousel.min", "bootstrap.min"]);
  }

  ngOnInit(): void {
  }

}
