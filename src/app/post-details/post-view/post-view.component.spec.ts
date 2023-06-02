import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostViewComponent } from './post-view.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from 'src/app/services/post/post.service';
import { of } from 'rxjs';
import { post } from 'src/app/models/post.model';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('PostViewComponent', () => {
  let component: PostViewComponent;
  let fixture: ComponentFixture<PostViewComponent>;
  let mockPostService : any
  let mockActivatedRoute: any;
  let mockLocation: jasmine.SpyObj<Location>;
  let posts: post[] = [
    {
        id: 1,
        body: 'describe test',
        title: 'test'
    },
    {
        id: 2,
        body: 'describe test',
        title: 'test'
    },
    {
        id: 3,
        body: 'describe test',
        title: 'test'
    },
]

  beforeEach(async () => {
    mockPostService = jasmine.createSpyObj(['getPostById', 'updatePost'])
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => {
            return '3'
          }
        }
      }
    }
    mockLocation = jasmine.createSpyObj(['back'])
    await TestBed.configureTestingModule({
      declarations: [PostViewComponent],
      imports: [
        FormsModule
      ],
      providers: [
        {
          provide: Location,
          useValue: mockLocation
        },
        {
          provide: PostService,
          useValue: mockPostService
        },
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute,
        }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
    ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should render the post title in h2 template', () => {
    mockPostService.getPostById.and.returnValue(of(posts[0]))
    fixture.detectChanges();
    let titleElement = fixture.debugElement.query(By.css('#title')).nativeElement
    expect(titleElement.textContent).toContain(posts[0].title);
  })
});
