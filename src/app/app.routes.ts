import {Routes, RouterModule} from "@angular/router";
import {SixstarComponent} from "./protected/sixstar/sixstar.component";
import {SixstarCreateComponent} from "./protected/sixstar/sixstar-create/sixstar-create.component";


const APP_ROUTES: Routes = <Routes>[
  {path: '', component: SixstarComponent},
  {path: 'sixstar', component: SixstarComponent},
  {path: 'sixstar/create', component: SixstarCreateComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);

