# NBA Playoff Pool Website – Project Brief

## Overview

This project is a GitHub Pages website that tracks a friend-group wager for the NBA Playoffs. The site will display each participant’s bracket, calculate scores automatically, and show a live leaderboard.

The system is designed to be simple, competitive, and easy to update manually.

---

## Pool Format

* Each participant submits a **full NBA playoff bracket before the playoffs begin**
* Picks include:

  * All First Round series winners
  * All Second Round winners
  * Conference Finals winners
  * NBA Finals winner
  * (Optional) Series length for each matchup (4–7 games)

---

## Scoring System

### Base Points by Round

* First Round: 2 points per correct series winner
* Second Round: 4 points
* Conference Finals: 8 points
* NBA Finals: 12 points

### Bonus Points

* Exact series length correct: +2 points

---

## Finals Bonus Picks

These are chosen before the playoffs start:

* Correct NBA Champion: +5 points
* Correct Finals MVP: +5 points
* Correct number of NBA Finals games: +3 points

---

## Loose Bracket Rule (IMPORTANT)

This pool uses a **loose bracket scoring system**.

* Each round is scored independently
* Incorrect earlier-round picks do NOT eliminate later-round scoring
* Users can still earn points in later rounds even if their bracket path was wrong

Example:
If a user incorrectly predicts a team in Round 1 but correctly predicts the Finals winner, they still receive full Finals points.

---

## Tiebreakers

1. Most exact series length predictions correct
2. Correct NBA Champion
3. Correct Finals MVP
4. Closest prediction to total number of NBA Finals games

---

## Website Requirements

The website should include:

### 1. Leaderboard

* Display all participants
* Show total points
* Rank users from highest to lowest score

### 2. Bracket / Picks View

* Show each user’s picks by round
* Clearly display predicted winners and series lengths

### 3. Results Tracking

* Store actual series results
* Allow easy manual updates after each series ends

### 4. Score Calculation

* Automatically calculate points based on:

  * Correct picks
  * Round values
  * Bonus points
* Must follow loose bracket logic

### 5. Finals Bonus Section

* Show each user’s:

  * Champion pick
  * Finals MVP pick
  * Finals games prediction
* Show whether each bonus is correct

---

## Technical Requirements

* Use **plain HTML, CSS, and JavaScript**
* Must be compatible with **GitHub Pages**
* No backend required
* Data can be stored in JavaScript objects or JSON
* Code should be simple and easy to edit manually

---

## Data Structure (Guidelines)

The app should store:

* Users (names)
* Each user’s picks by round
* Finals bonus picks
* Actual results
* Calculated scores

---

## Design Goals

* Clean and modern layout
* Easy to read leaderboard
* Organized by round
* Mobile-friendly if possible
* Minimal but visually appealing (sports-style UI)

---

## Future Enhancements (Optional)

* Ability to add users easily
* Highlight correct vs incorrect picks visually
* Animate leaderboard updates
* Add team logos or colors

---

## Summary

This is a full NBA playoff bracket pool with:

* Weighted round scoring
* Bonus categories
* Loose bracket scoring system
* Live leaderboard

The goal is to make it fun, competitive, and easy to manage for a group of friends.
