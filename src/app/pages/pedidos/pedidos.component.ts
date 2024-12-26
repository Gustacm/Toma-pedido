import { Component } from '@angular/core';
import { FormularioComponent } from "../../component/pedido/formulario/formulario.component";
import { TableComponent } from "../../component/pedido/table/table.component";
import { NavbarComponent } from "../../component/pedido/navbar/navbar.component";
import { FooterComponent } from "../../component/pedido/footer/footer.component";

@Component({
  selector: 'app-pedidos',
  imports: [FormularioComponent, TableComponent, NavbarComponent, FooterComponent],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosComponent {

}
