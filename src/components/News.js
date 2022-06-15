import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "OPINION | How clean do the Saudis expect to get by sportswashing with men's golf? | CBC Sports",
            "description": "I did not imagine that golf would be the centre of heated debate about reckless sportswashing.",
            "url": "http://www.cbc.ca/sports/soccer/liv-golf-sportswashing-saudi-arabia-opinion-shireen-ahmed-1.6487789",
            "urlToImage": "https://i.cbc.ca/1.6487967.1655231932!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/1402176586.jpg",
            "publishedAt": "2022-06-15T06:37:21.2236598Z",
            "content": "As the beautifully warm months begin and we move into the summer sports season, who knew that one of the most polarizing topics would be men's golf?\r\nYes, one of the most elite, white-men's sports be… [+6101 chars]"
        },
        {
            "source": {
                "id": "lequipe",
                "name": "L'equipe"
            },
            "author": "L'EQUIPE",
            "title": "Le flash sports du 15 juin",
            "description": "Retrouvez toute l'actualité sportive dans votre flash quotidien.",
            "url": "https://www.lequipe.fr/Tous-sports/Actualites/Le-flash-sports-du-15-juin/1338695",
            "urlToImage": "https://medias.lequipe.fr/img-photo-jpg/le-flash-sports-a-retrouver-tous-les-jours-en-podcast/1500000001655518/0:0,826:551-640-427-75/cb4fa.jpg",
            "publishedAt": "2022-06-15T05:39:00+00:00",
            "content": "Les Girondins de Bordeaux rétrogradés en National ; Keira Hamraoui se livre après l'agression subie le 4 novembre dernier ; l'Allemagne humilie l'Italie (5-2), la Hongrie surclasse l'Angleterre (4-0)… [+123 chars]"
        },
        {
            "source": {
                "id": "ars-technica",
                "name": "Ars Technica"
            },
            "author": "Samuel Axon and Eric Bangeman",
            "title": "Bad news for cable: A major sports league will stream exclusively on Apple TV",
            "description": "Streaming services continue to dig a grave for traditional cable.",
            "url": "https://arstechnica.com/gadgets/2022/06/apple-will-stream-all-major-league-soccer-matches-for-10-years/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/06/Apple-MLS-partnership-June-2022-760x380.jpg",
            "publishedAt": "2022-06-14T20:36:03+00:00",
            "content": "Enlarge/ Major League Soccer is coming to Apple TV.\r\n142 with 97 posters participating\r\nToday, Apple and Major League Soccer (MLS) announced that the Apple TV app will offer streaming video of every … [+4424 chars]"
        },
        {
            "source": {
                "id": "fox-sports",
                "name": "Fox Sports"
            },
            "author": "FOX Sports",
            "title": "Title IX stories: Marlins GM Kim Ng 'never got scared off' career in sports",
            "description": "Since her senior thesis on Title IX set her on a career in sports, Kim Ng has blazed a trail for women in baseball, Pedro Moura writes.",
            "url": "http://www.foxsports.com/stories/mlb/i-never-got-scared-off-kim-ngs-rise-to-mlb-gm-role-fueled-by-title-ix",
            "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2022/06/1408/814/05.11.22_Title-IX_Kim-Ng_16x9.jpg?ve=1&tl=1",
            "publishedAt": "2022-06-14T20:08:38Z",
            "content": "By Pedro MouraFOX Sports MLB Writer\r\nEDITOR'S NOTE: This story is part of FOX Sports' series commemorating the 50th anniversary of Title IX, which was enacted into law on June 23, 1972. The series te… [+5480 chars]"
        }
    ];
    constructor(){
        super();
        this.state = {
            articles : this.articles,
            loading : false
        }
    }
  render() {
    return (
      <div className='container my-3'>
        <h2>Newsaholic - Top Headlines</h2>
        <div className='row my-3'>
            <div className='col-md-4'>
            <NewsItem title = "myTitle" description = "myDesc" imageUrl = "https://i.cbc.ca/1.6487967.1655231932!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/1402176586.jpg" newsUrl= "Todo"/>
            </div>
            <div className='col-md-4'>
            <NewsItem title = "myTitle" description = "myDesc" imageUrl = "https://i.cbc.ca/1.6487967.1655231932!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/1402176586.jpg"/>
            </div>
            <div className='col-md-4'>
            <NewsItem title = "myTitle" description = "myDesc" imageUrl = "https://i.cbc.ca/1.6487967.1655231932!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/1402176586.jpg"/>
            </div>
        </div>
        
      </div>
    )
  }
}

export default News