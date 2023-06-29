import { Router } from "../Router"

import { HomeComponent } from '../resources/pages/home/home.component';
import { InterfacesComponent } from '../resources/pages/interfaces/interfaces.component';
import { PipeComponent } from '../resources/pages/pipe/pipe.component';
import { TwowaybindingComponent } from '../resources/pages/twowaybinding/twowaybinding.component';
import { CompatilhamentoComponent } from '../resources/pages/compatilhamento/compatilhamento.component';
import { ServicosComponent } from '../resources/pages/servicos/servicos.component';
import { ItemDetailComponent } from "../resources/pages/item-detail/item-detail.component";

Router.set('', HomeComponent);
Router.set('compartilhamento-dados', CompatilhamentoComponent);
Router.set('interfaces', InterfacesComponent);
Router.set('operador-pipe', PipeComponent);
Router.set('two-way-binding', TwowaybindingComponent);
Router.raw({path: 'servicos', component: ServicosComponent});
Router.set('item/:id', ItemDetailComponent);



