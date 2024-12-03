import { Routes } from '@angular/router';
import { ListagemLinguagensComponent } from './listagem-linguagens/listagem-linguagens.component';
import { EditarLinguagemComponent } from './editar-linguagem/editar-linguagem.component';
import { DeletarLinguagemComponent } from './deletar-linguagem/deletar-linguagem.component';
import { InserirLinguagemComponent } from './inserir-linguagem/inserir-linguagem.component';

export const routes: Routes = [
    { path: '', component:ListagemLinguagensComponent },
    { path: 'inserir-linguagem', component:InserirLinguagemComponent },
    { path: 'editar-linguagem', component:EditarLinguagemComponent },
    { path: 'deletar-linguagem', component:DeletarLinguagemComponent },
    { path: '**', redirectTo: ''},
];
