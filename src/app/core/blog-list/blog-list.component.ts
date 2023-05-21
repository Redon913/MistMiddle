import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/model/model';
import { TransferService } from 'src/app/providers/transfer.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.less'],
})
export class BlogListComponent implements OnInit {
  rand!: number;

  selectedBlog!: Blog;
  Blogs: Blog[] = [];
  PopularBlogs: Blog[] = [];

  constructor(private transferService: TransferService) {
    this.getBlogs(0);
    this.getBlogs(1);
  }

  ngOnInit() {
    this.rand = Math.floor(Math.random() * 4) + 1;
    console.log(this.PopularBlogs);
  }

  getBlogs(request: number) {
    this.transferService.getBlogs(request).subscribe((res) => {
      if (request == 1) this.PopularBlogs = res;
      else this.Blogs = res;
    });
  }
}
