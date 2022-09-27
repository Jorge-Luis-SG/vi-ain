import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { Observable } from 'rxjs/internal/Observable';
import { SanityService } from 'src/app/services/sanity.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})

export class BlogsComponent implements OnInit {

  blogs$: Observable<blog[]>
  constructor(private title:Title, private sanityService: SanityService) {
    title.setTitle("Vi-ain | Blog | Desarrollo Blockchain");

    const fetchBlogPosts = () => {

    }


    this.blogs$ = this.sanityService.fetch<blog[]>(
      `*[_type == "post"]{
        _id,
        title,
        _createdAt,
        author -> {
            name,
            image
        },
        description,
        mainImage,
        slug
        }`
     )



    console.log('hola', this.blogs$[0])
    }

    ngOnInit(): void {
    }

}

export interface blog {
  _id: String,
  _createdAt: string,
  title: String,
  author: {
    name: string
    image: string
  },
  description: string,
  mainImage: string,
  slug: string,
  poster: SanityImageSource, // = string | SanityReference | SanityAsset | SanityImageObject etc.
}

