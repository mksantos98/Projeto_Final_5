import { Component, OnInit } from '@angular/core';

// 1) Importa dependências
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  // 3) Cria atributos
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;

  constructor(

    // 2) Injeta dependências
    private firestore: AngularFirestore
  ) {

    // 4) Obtém dados do database
    this.itemsCollection = firestore.collection<any>(
      'articles', ref => ref
        .where('status', '==', 'ativo') // Somente com 'status=ativo'
        .orderBy('date', 'desc') // Ordenado pela data decrescente

      /* ATENÇÃO!
      Ao executar este script pela primeira vez, será gerado um erro de indice
      do Firebase Firestore. Clique no link do erro para gerar o índice no site
      do Firebase.
      */
    );
    this.items = this.itemsCollection.valueChanges({ idField: 'id' });
  }

  ngOnInit() { }
}
