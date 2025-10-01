import { Injectable } from '@angular/core';
import { Guest } from './guest';

@Injectable({
  providedIn: 'root'
})
export class GuestList {
  // I am so sorry I did not want to set up a database for this one day.
  // One of the worst possible ways to do this, but idrc. None of this is personal info.
  public guestList: Guest[] = JSON.parse(`
    [
 {
   "table": "1",
   "guests": 0,
   "name": "Carol Speakman"
 },
 {
   "table": "1",
   "guests": 0,
   "name": "Lew Speakman"
 },
 {
   "table": "1",
   "guests": 0,
   "name": "Madison Romero"
 },
 {
   "table": "1",
   "guests": 0,
   "name": "Eduardo Romero"
 },
 {
   "table": "1",
   "guests": 0,
   "name": "Gretchen Foltz"
 },
 {
   "table": "1",
   "guests": 0,
   "name": "Deron Foltz"
 },
 {
   "table": "1",
   "guests": 0,
   "name": "Chris Speakman"
 },
 {
   "table": "1",
   "guests": 0,
   "name": "Dianna Speakman"
 },
 {
   "table": "2",
   "guests": 0,
   "name": "Tracy Kohls"
 },
 {
   "table": "2",
   "guests": 0,
   "name": "Jeffrey Kohls"
 },
 {
   "table": "2",
   "guests": 0,
   "name": "Mark Wellinghoff"
 },
 {
   "table": "2",
   "guests": 0,
   "name": "Rita Wellinghoff"
 },
 {
   "table": "2",
   "guests": 0,
   "name": "Tom Wellinghoff"
 },
 {
   "table": "2",
   "guests": 0,
   "name": "Carol Wellinghoff"
 },
 {
   "table": "2",
   "guests": 0,
   "name": "Nancy Kos"
 },
 {
   "table": "2",
   "guests": 0,
   "name": "George Kos"
 },
 {
   "table": "3",
   "guests": 0,
   "name": "Patty Shelton"
 },
 {
   "table": "3",
   "guests": 0,
   "name": "Lisa Snyder"
 },
 {
   "table": "3",
   "guests": 0,
   "name": "Taylor Delph"
 },
 {
   "table": "3",
   "guests": 0,
   "name": "Trevor Greenawalt"
 },
 {
   "table": "3",
   "guests": 0,
   "name": "Sarah Snyder"
 },
 {
   "table": "3",
   "guests": 0,
   "name": "Jogi Roe"
 },
 {
   "table": "3",
   "guests": 0,
   "name": "Tyler Chamblin"
 },
 {
   "table": "3",
   "guests": 0,
   "name": "Zon Chamblin"
 },
 {
   "table": "4",
   "guests": 0,
   "name": "Ethan Habicht"
 },
 {
   "table": "4",
   "guests": 0,
   "name": "Gloria Habicht"
 },
 {
   "table": "4",
   "guests": 0,
   "name": "Kristen Almes"
 },
 {
   "table": "4",
   "guests": 0,
   "name": "Griffin Almes"
 },
 {
   "table": "4",
   "guests": 0,
   "name": "Heidi Marschall"
 },
 {
   "table": "4",
   "guests": 0,
   "name": "Eric Marschall"
 },
 {
   "table": "4",
   "guests": 0,
   "name": "Kelsey Almes"
 },
 {
   "table": "4",
   "guests": 0,
   "name": "Brett Economas"
 },
 {
   "table": "5",
   "guests": 0,
   "name": "Susan Long"
 },
 {
   "table": "5",
   "guests": 0,
   "name": "Danny Long"
 },
 {
   "table": "5",
   "guests": 0,
   "name": "Jo Ellen Gossett"
 },
 {
   "table": "5",
   "guests": 0,
   "name": "Tim Gossett"
 },
 {
   "table": "5",
   "guests": 0,
   "name": "Janie King"
 },
 {
   "table": "5",
   "guests": 0,
   "name": "Terry Washburn"
 },
 {
   "table": "5",
   "guests": 0,
   "name": "Kenneth Streitenberger"
 },
 {
   "table": "5",
   "guests": 0,
   "name": "Sharon Streitenberger"
 },
 {
   "table": "6",
   "guests": 0,
   "name": "Matthew Osterlund"
 },
 {
   "table": "6",
   "guests": 0,
   "name": "Mary Osterlund"
 },
 {
   "table": "6",
   "guests": 0,
   "name": "Tony Osterlund"
 },
 {
   "table": "6",
   "guests": 0,
   "name": "Rob Painter"
 },
 {
   "table": "6",
   "guests": 0,
   "name": "Carin Painter"
 },
 {
   "table": "6",
   "guests": 0,
   "name": "Grace Osterlund"
 },
 {
   "table": "6",
   "guests": 0,
   "name": "Ankita Bansode"
 },
 {
   "table": "6",
   "guests": 0,
   "name": "Trevor Bowie"
 },
 {
   "table": "7",
   "guests": 0,
   "name": "Raymond Frost"
 },
 {
   "table": "7",
   "guests": 0,
   "name": "Tere Frost"
 },
 {
   "table": "7",
   "guests": 0,
   "name": "Rick Schluep"
 },
 {
   "table": "7",
   "guests": 0,
   "name": "Tonia McLanahan"
 },
 {
   "table": "7",
   "guests": 0,
   "name": "Vikram Matta"
 },
 {
   "table": "7",
   "guests": 0,
   "name": "Usha Matta"
 },
 {
   "table": "7",
   "guests": 0,
   "name": "Ken Bresnahan"
 },
 {
   "table": "7",
   "guests": 0,
   "name": "Tracey Bresnahan"
 },
 {
   "table": "8",
   "guests": 0,
   "name": "Kasielle Carroll"
 },
 {
   "table": "8",
   "guests": 0,
   "name": "Jonah Linton"
 },
 {
   "table": "8",
   "guests": 0,
   "name": "Eric Fox"
 },
 {
   "table": "8",
   "guests": 0,
   "name": "Julia Krauth"
 },
 {
   "table": "8",
   "guests": 0,
   "name": "Ali Addington"
 },
 {
   "table": "8",
   "guests": 0,
   "name": "Sarah Tomasch"
 },
 {
   "table": "8",
   "guests": 1,
   "name": "Maddi Raisch"
 },
 {
   "table": "9",
   "guests": 0,
   "name": "Meloney George"
 },
 {
   "table": "9",
   "guests": 0,
   "name": "Natalie Rolfe"
 },
 {
   "table": "9",
   "guests": 0,
   "name": "Justin Hall"
 },
 {
   "table": "9",
   "guests": 0,
   "name": "Katie Graham"
 },
 {
   "table": "9",
   "guests": 0,
   "name": "Logan Scales"
 },
 {
   "table": "9",
   "guests": 0,
   "name": "Madison Leugers"
 },
 {
   "table": "9",
   "guests": 0,
   "name": "Adam Leugers"
 },
 {
   "table": "9",
   "guests": 0,
   "name": "Beckley Smith"
 },
 {
   "table": "10",
   "guests": 0,
   "name": "Josh Blaine"
 },
 {
   "table": "10",
   "guests": 0,
   "name": "Peyton Ryba"
 },
 {
   "table": "10",
   "guests": 0,
   "name": "Ceci Rockwell"
 },
 {
   "table": "10",
   "guests": 0,
   "name": "Eitan Palmer"
 },
 {
   "table": "10",
   "guests": 0,
   "name": "Peyton Farrell"
 },
 {
   "table": "10",
   "guests": 0,
   "name": "Lucas Strunc"
 },
 {
   "table": "10",
   "guests": 0,
   "name": "Maleah Tucker"
 },
 {
   "table": "10",
   "guests": 0,
   "name": "Liv Michota"
 },
 {
   "table": "11",
   "guests": 0,
   "name": "Nick Cunningham"
 },
 {
   "table": "11",
   "guests": 0,
   "name": "Timmy Eleyet"
 },
 {
   "table": "11",
   "guests": 0,
   "name": "Vincent Leeth"
 },
 {
   "table": "11",
   "guests": 0,
   "name": "Kenzie Kay"
 },
 {
   "table": "11",
   "guests": 0,
   "name": "Cody Lane"
 },
 {
   "table": "11",
   "guests": 0,
   "name": "Kaycie Tillis"
 },
 {
   "table": "11",
   "guests": 0,
   "name": "Cody Borsini"
 },
 {
   "table": "11",
   "guests": 0,
   "name": "Sam Colburn"
 },
 {
   "table": "11",
   "guests": 0,
   "name": "Reece McLanahan-Schluep"
 },
 {
   "table": "A",
   "guests": 0,
   "name": "Lauren Dreyer"
 },
 {
   "table": "A",
   "guests": 0,
   "name": "Ian Lindstrom"
 },
 {
   "table": "A",
   "guests": 0,
   "name": "Griffin Foltz"
 },
 {
   "table": "A",
   "guests": 0,
   "name": "Caroline Kohls"
 },
 {
   "table": "A",
   "guests": 0,
   "name": "Clifford Cooke"
 },
 {
   "table": "A",
   "guests": 0,
   "name": "Hailey Stoneman"
 },
 {
   "table": "B",
   "guests": 0,
   "name": "Maddy George"
 },
 {
   "table": "B",
   "guests": 0,
   "name": "Fausta Fenner"
 },
 {
   "table": "B",
   "guests": 0,
   "name": "Alex Snyder"
 },
 {
   "table": "B",
   "guests": 0,
   "name": "Kelsie Smith"
 },
 {
   "table": "B",
   "guests": 0,
   "name": "Blake Gall"
 },
 {
   "table": "C",
   "guests": 0,
   "name": "Ethany Bresnahan"
 },
 {
   "table": "C",
   "guests": 0,
   "name": "Cassidy Spurgeon"
 },
 {
   "table": "C",
   "guests": 0,
   "name": "Bridget Trout"
 },
 {
   "table": "C",
   "guests": 0,
   "name": "Colette Trout"
 },
 {
   "table": "C",
   "guests": 0,
   "name": "Lauren Kohls"
 },
 {
   "table": "C",
   "guests": 0,
   "name": "Jack Collins"
 }
]
    `);
}
