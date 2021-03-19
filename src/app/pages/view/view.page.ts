import { Component, OnInit } from '@angular/core';

// 1) Importa dependências
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// 4) Importa componente de manipulação de rotas
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  // 3) Atributos
  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;
  id: string;

  constructor(

    // 2) Injeta dependências
    private firestore: AngularFirestore,
    private route: ActivatedRoute
  ) {

    // 5) Obtém o id do artigo a ser exibido
    this.id = this.route.snapshot.paramMap.get('id');

    // 6) Consulta o banco de dados
    this.itemDoc = firestore.doc<any>(`articles/${this.id}`);
    this.item = this.itemDoc.valueChanges();
  }

  ngOnInit() {}

}
