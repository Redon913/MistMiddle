import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/model/model';
import { TransferService } from 'src/app/providers/transfer.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.less'],
})
export class BlogPageComponent {
  Blog!: Blog | null | undefined;
  img: string[] = [];

  constructor(
    private transferService: TransferService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.getBlogById(Number(this.route.snapshot.paramMap.get('id')));
  }

  ngOnInit() {
    console.log();
  }

  getBlogById(requestId: number) {
    if (Math.round(requestId) > 0)
      this.transferService.getBlogs(Math.round(requestId)).subscribe((res) => {
        if (res[0]) {
          this.Blog = res[0] as Blog;

          this.img = res[0].image.split(';');
        } else this.router.navigate(['blogs']);
      });
  }
}
