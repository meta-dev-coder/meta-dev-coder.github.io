import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

export interface SearchSolution {
  Solutions: string;
  Indexing: number;
  Usage: string;
  Purchased: string;
}

export interface ApplicationList {
  Name: string;
  TotalImages: number;
  TotalObjects: number;
  SearchSevenDays: number;
  TodaysSearch: number;
}

const SOLUTION_DATA: SearchSolution[] = [
  {Solutions: 'Image Indexing', Indexing: 342377, Usage: '-', Purchased: 'Yes'},
  {Solutions: 'Visual similar recommendations', Indexing: 382, Usage: '-', Purchased: 'No'},
  {Solutions: 'Search by image', Indexing: 13701, Usage: '-', Purchased: 'Yes'},
  {Solutions: 'Search by color', Indexing: 0, Usage: '-', Purchased: 'No'},
  {Solutions: 'Multi product search', Indexing: 225, Usage: '-', Purchased: 'Yes'},
  {Solutions: 'Multi prdocu recommendations', Indexing: 0, Usage: '-', Purchased: 'Yes'}
];

const APPLICATION_LIST: ApplicationList[] = [
{ Name: 'VisenzeRetopo', TotalImages: 99126, TotalObjects: 99126, SearchSevenDays: 914,TodaysSearch: 0},
{ Name: 'VisenzeShark', TotalImages: 116388, TotalObjects: 116388, SearchSevenDays: 663,TodaysSearch: 0},
{ Name: 'Modeling', TotalImages: 104301, TotalObjects: 104301, SearchSevenDays: 306,TodaysSearch: 0},
{ Name: 'swatches', TotalImages: 4300, TotalObjects: 4300, SearchSevenDays: 257,TodaysSearch: 0},
{ Name: 'VisenzeBerk', TotalImages: 23555, TotalObjects: 23555, SearchSevenDays: 1,TodaysSearch: 0}];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  solutionDisplayedColumns: string[] = ['Solutions', 'Indexing', 'Usage', 'Purchased'];
  solutionDataSource = SOLUTION_DATA;

  applicationDisplayedColumns: string[] = ['Name', 'TotalImages', 'TotalObjects', 'SearchSevenDays', 'TodaysSearch'];
  applicationDataSource = APPLICATION_LIST;

  public options: any = {
    chart: {
      type: 'spline',
      height: 700
    },
    title: {
      text: 'Monthly Average Temperature'
    },
    credits: {
      enabled: false
    },

    xAxis: {
      categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    },
    series: [
         {
            name: 'Ahmedabad',
            data: [3.0, 15.9, 19.5, 16.5, 25.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6]
         },
         {
            name: 'Nadiad',
            data: [5.2, 2.8, 5.7, 11.3, 17.0, 22.0, 24.8,24.1, 20.1, 14.1, 8.6, 2.5]
         },
         {
            name: 'Surat',
            data: [4.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
         },
         {
            name: 'Mumbai',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
         }
      ]
  }



  constructor() { }

  ngOnInit(): void{
    Highcharts.chart('container', this.options);
  }

}
