# NBA Playoff Wager

Static GitHub Pages site for tracking a friend-group NBA playoff bracket pool.

## Files

- `index.html` contains the page structure.
- `styles.css` contains the responsive sports-style design.
- `script.js` contains all pool data and scoring logic.

## Personalized View

- Each player can click their name on the selector or leaderboard
- The site remembers that choice in the browser
- You can also send direct links with `?player=Alex` style query parameters
- No backend or login is required for this behavior

## How To Update

Edit `DATA` inside `script.js`:

- Add or remove people in `DATA.participants`
- Update each person's bracket picks and finals bonus picks
- Mark real series outcomes in `DATA.actualResults`
- Set `complete: true` and add the final `games` value when a series ends
- Fill in `DATA.actualResults.bonus` when champion, Finals MVP, and Finals games are known

## Scoring Rules Implemented

- First Round: 2 points
- Second Round: 4 points
- Conference Finals: 8 points
- NBA Finals: 12 points
- Exact series length: +2 bonus
- Champion pick: +5
- Finals MVP: +5
- Finals games prediction: +3
- Hard bracket scoring: later rounds only score if the earlier bracket path stayed correct
