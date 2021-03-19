import { Component, OnInit } from '@angular/core';

import GoogleNewsRss from 'google-news-rss';

@Component({
  selector: 'app-news2',
  templateUrl: './news2.page.html',
  styleUrls: ['./news2.page.scss'],
})
export class News2Page implements OnInit {

  constructor() {

    const googleNews = new GoogleNewsRss();
    googleNews
    .search('unicorns')
    .then(resp => console.log(resp));

   }

  ngOnInit() {

    

   }

}
