import { Component, OnInit } from '@angular/core';
//cargamos los js que necesita para funcionar
import { CargarScriptsService } from 'src/app/core/services/cargar-scripts/cargar-scripts.service';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent implements OnInit {

  constructor( private _CargaScripts:CargarScriptsService) {
    _CargaScripts.Carga(["functions", "jquery", "plugins","jquery.calendario"]);
  }

  ngOnInit(): void {
  }

}
