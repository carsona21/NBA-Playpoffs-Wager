const SCORING = {
  rounds: {
    round1: { label: "First Round", points: 2 },
    round2: { label: "Second Round", points: 4 },
    conferenceFinals: { label: "Conference Finals", points: 8 },
    finals: { label: "NBA Finals", points: 12 }
  },
  exactSeriesBonus: 2,
  finalsBonus: {
    champion: 5,
    finalsMvp: 5,
    finalsGames: 3
  }
};

const DATA = {
  source: {
    officialPlayoffsUrl: "https://www.nba.com/playoffs/2026",
    officialScheduleUrl: "https://www.nba.com/news/2026-nba-playoffs-schedule",
    updatedLabel: "Official NBA.com playoff schedule, updated April 13, 2026"
  },
  actualResults: {
    round1: [
      { id: "r1-east-1", label: "East 1", matchup: "(1) Detroit vs. (8) TBD", winner: null, games: null, complete: false, schedule: "Game 1: Sunday, April 19 at 6:30 ET" },
      { id: "r1-east-2", label: "East 2", matchup: "(2) Boston vs. (7) TBD", winner: null, games: null, complete: false, schedule: "Game 1: Sunday, April 19 at 1:00 ET" },
      { id: "r1-east-3", label: "East 3", matchup: "(3) New York vs. (6) Atlanta", winner: null, games: null, complete: false, schedule: "Game 1: Saturday, April 18 at 6:00 ET" },
      { id: "r1-east-4", label: "East 4", matchup: "(4) Cleveland vs. (5) Toronto", winner: null, games: null, complete: false, schedule: "Game 1: Saturday, April 18 at 1:00 ET" },
      { id: "r1-west-1", label: "West 1", matchup: "(1) Oklahoma City vs. (8) TBD", winner: null, games: null, complete: false, schedule: "Game 1: Sunday, April 19 at 3:30 ET" },
      { id: "r1-west-2", label: "West 2", matchup: "(2) San Antonio vs. (7) TBD", winner: null, games: null, complete: false, schedule: "Game 1: Sunday, April 19 at 9:00 ET" },
      { id: "r1-west-3", label: "West 3", matchup: "(3) Denver vs. (6) Minnesota", winner: null, games: null, complete: false, schedule: "Game 1: Saturday, April 18 at 3:30 ET" },
      { id: "r1-west-4", label: "West 4", matchup: "(4) Los Angeles vs. (5) Houston", winner: null, games: null, complete: false, schedule: "Game 1: Saturday, April 18 at 8:30 ET" }
    ],
    round2: [
      { id: "r2-east-1", label: "East Semis 1", matchup: "Winner East 1 vs. Winner East 4", winner: null, games: null, complete: false, schedule: "TBD after First Round" },
      { id: "r2-east-2", label: "East Semis 2", matchup: "Winner East 2 vs. Winner East 3", winner: null, games: null, complete: false, schedule: "TBD after First Round" },
      { id: "r2-west-1", label: "West Semis 1", matchup: "Winner West 1 vs. Winner West 4", winner: null, games: null, complete: false, schedule: "TBD after First Round" },
      { id: "r2-west-2", label: "West Semis 2", matchup: "Winner West 2 vs. Winner West 3", winner: null, games: null, complete: false, schedule: "TBD after First Round" }
    ],
    conferenceFinals: [
      { id: "cf-east", label: "East Finals", matchup: "East Semis winners", winner: null, games: null, complete: false, schedule: "TBD after Conference Semifinals" },
      { id: "cf-west", label: "West Finals", matchup: "West Semis winners", winner: null, games: null, complete: false, schedule: "TBD after Conference Semifinals" }
    ],
    finals: [
      { id: "finals", label: "NBA Finals", matchup: "Eastern Conference champion vs. Western Conference champion", winner: null, games: null, complete: false, schedule: "Game 1: June 3 at 8:30 ET" }
    ],
    bonus: {
      champion: null,
      finalsMvp: null,
      finalsGames: null
    }
  },
  participants: [
    {
      name: "Lincoln",
      picks: {
        round1: [
          { id: "r1-east-1", winner: "Boston", games: 5 },
          { id: "r1-east-2", winner: "New York", games: 6 },
          { id: "r1-east-3", winner: "Toronto", games: 6 },
          { id: "r1-east-4", winner: "Cleveland", games: 7 },
          { id: "r1-west-1", winner: "Oklahoma City", games: 5 },
          { id: "r1-west-2", winner: "Denver", games: 6 },
          { id: "r1-west-3", winner: "Minnesota", games: 7 },
          { id: "r1-west-4", winner: "Los Angeles", games: 6 }
        ],
        round2: [
          { id: "r2-east-1", winner: "Boston", games: 6 },
          { id: "r2-east-2", winner: "Toronto", games: 7 },
          { id: "r2-west-1", winner: "Oklahoma City", games: 7 },
          { id: "r2-west-2", winner: "Denver", games: 6 }
        ],
        conferenceFinals: [
          { id: "cf-east", winner: "Boston", games: 6 },
          { id: "cf-west", winner: "Oklahoma City", games: 7 }
        ],
        finals: [
          { id: "finals", winner: "Boston", games: 6 }
        ]
      },
      bonus: {
        champion: "Boston",
        finalsMvp: "Jayson Tatum",
        finalsGames: 6
      }
    },
    {
      name: "Mason",
      picks: {
        round1: [
          { id: "r1-east-1", winner: "Boston", games: 4 },
          { id: "r1-east-2", winner: "New York", games: 7 },
          { id: "r1-east-3", winner: "Toronto", games: 7 },
          { id: "r1-east-4", winner: "Atlanta", games: 6 },
          { id: "r1-west-1", winner: "Oklahoma City", games: 6 },
          { id: "r1-west-2", winner: "Denver", games: 7 },
          { id: "r1-west-3", winner: "Houston", games: 7 },
          { id: "r1-west-4", winner: "Los Angeles", games: 7 }
        ],
        round2: [
          { id: "r2-east-1", winner: "Boston", games: 5 },
          { id: "r2-east-2", winner: "Toronto", games: 6 },
          { id: "r2-west-1", winner: "Oklahoma City", games: 6 },
          { id: "r2-west-2", winner: "Los Angeles", games: 7 }
        ],
        conferenceFinals: [
          { id: "cf-east", winner: "Boston", games: 5 },
          { id: "cf-west", winner: "Oklahoma City", games: 6 }
        ],
        finals: [
          { id: "finals", winner: "Oklahoma City", games: 7 }
        ]
      },
      bonus: {
        champion: "Oklahoma City",
        finalsMvp: "Shai Gilgeous-Alexander",
        finalsGames: 7
      }
    },
    {
      name: "Sam",
      picks: {
        round1: [
          { id: "r1-east-1", winner: "Boston", games: 5 },
          { id: "r1-east-2", winner: "Philadelphia", games: 7 },
          { id: "r1-east-3", winner: "Toronto", games: 5 },
          { id: "r1-east-4", winner: "Cleveland", games: 6 },
          { id: "r1-west-1", winner: "Oklahoma City", games: 4 },
          { id: "r1-west-2", winner: "Los Angeles", games: 7 },
          { id: "r1-west-3", winner: "Minnesota", games: 6 },
          { id: "r1-west-4", winner: "Houston", games: 7 }
        ],
        round2: [
          { id: "r2-east-1", winner: "Boston", games: 6 },
          { id: "r2-east-2", winner: "Toronto", games: 6 },
          { id: "r2-west-1", winner: "Oklahoma City", games: 6 },
          { id: "r2-west-2", winner: "Minnesota", games: 7 }
        ],
        conferenceFinals: [
          { id: "cf-east", winner: "Toronto", games: 7 },
          { id: "cf-west", winner: "Oklahoma City", games: 7 }
        ],
        finals: [
          { id: "finals", winner: "Oklahoma City", games: 6 }
        ]
      },
      bonus: {
        champion: "Oklahoma City",
        finalsMvp: "Shai Gilgeous-Alexander",
        finalsGames: 6
      }
    },
    {
      name: "Carson",
      picks: {
        round1: [
          { id: "r1-east-1", winner: "Detroit", games: 6 },
          { id: "r1-east-2", winner: "Boston", games: 5 },
          { id: "r1-east-3", winner: "New York", games: 6 },
          { id: "r1-east-4", winner: "Cleveland", games: 7 },
          { id: "r1-west-1", winner: "Oklahoma City", games: 5 },
          { id: "r1-west-2", winner: "San Antonio", games: 6 },
          { id: "r1-west-3", winner: "Denver", games: 7 },
          { id: "r1-west-4", winner: "Houston", games: 7 }
        ],
        round2: [
          { id: "r2-east-1", winner: "Detroit", games: 7 },
          { id: "r2-east-2", winner: "Boston", games: 6 },
          { id: "r2-west-1", winner: "Oklahoma City", games: 6 },
          { id: "r2-west-2", winner: "San Antonio", games: 7 }
        ],
        conferenceFinals: [
          { id: "cf-east", winner: "Boston", games: 6 },
          { id: "cf-west", winner: "Oklahoma City", games: 6 }
        ],
        finals: [
          { id: "finals", winner: "Oklahoma City", games: 6 }
        ]
      },
      bonus: {
        champion: "Oklahoma City",
        finalsMvp: "Shai Gilgeous-Alexander",
        finalsGames: 6
      }
    },
    {
      name: "Gaza",
      picks: {
        round1: [
          { id: "r1-east-1", winner: "Detroit", games: 5 },
          { id: "r1-east-2", winner: "Boston", games: 4 },
          { id: "r1-east-3", winner: "Atlanta", games: 7 },
          { id: "r1-east-4", winner: "Toronto", games: 7 },
          { id: "r1-west-1", winner: "Oklahoma City", games: 4 },
          { id: "r1-west-2", winner: "San Antonio", games: 5 },
          { id: "r1-west-3", winner: "Minnesota", games: 7 },
          { id: "r1-west-4", winner: "Los Angeles", games: 6 }
        ],
        round2: [
          { id: "r2-east-1", winner: "Detroit", games: 6 },
          { id: "r2-east-2", winner: "Atlanta", games: 7 },
          { id: "r2-west-1", winner: "Oklahoma City", games: 5 },
          { id: "r2-west-2", winner: "Minnesota", games: 7 }
        ],
        conferenceFinals: [
          { id: "cf-east", winner: "Detroit", games: 7 },
          { id: "cf-west", winner: "Oklahoma City", games: 6 }
        ],
        finals: [
          { id: "finals", winner: "Detroit", games: 7 }
        ]
      },
      bonus: {
        champion: "Detroit",
        finalsMvp: "Cade Cunningham",
        finalsGames: 7
      }
    }
  ]
};

const STORAGE_KEY = "nba-playoff-pool:selected-player";

function buildResultsLookup(actualResults) {
  const lookup = {};

  Object.entries(SCORING.rounds).forEach(([roundKey]) => {
    actualResults[roundKey].forEach((series) => {
      lookup[series.id] = { ...series, roundKey };
    });
  });

  return lookup;
}

function scoreParticipant(participant, resultsLookup) {
  let totalPoints = 0;
  let exactSeriesCount = 0;
  let correctChampion = false;
  let correctFinalsMvp = false;
  let finalsGamesDistance = null;

  const roundBreakdown = {};

  Object.entries(SCORING.rounds).forEach(([roundKey, config]) => {
    let roundPoints = 0;
    let correctSeries = 0;
    let exactSeries = 0;

    participant.picks[roundKey].forEach((pick) => {
      const actual = resultsLookup[pick.id];
      if (!actual || !actual.complete) {
        return;
      }

      if (pick.winner === actual.winner) {
        roundPoints += config.points;
        correctSeries += 1;

        if (pick.games === actual.games) {
          roundPoints += SCORING.exactSeriesBonus;
          exactSeries += 1;
          exactSeriesCount += 1;
        }
      }
    });

    totalPoints += roundPoints;
    roundBreakdown[roundKey] = { roundPoints, correctSeries, exactSeries };
  });

  const actualBonus = DATA.actualResults.bonus;
  if (actualBonus.champion) {
    correctChampion = participant.bonus.champion === actualBonus.champion;
    if (correctChampion) {
      totalPoints += SCORING.finalsBonus.champion;
    }
  }

  if (actualBonus.finalsMvp) {
    correctFinalsMvp = participant.bonus.finalsMvp === actualBonus.finalsMvp;
    if (correctFinalsMvp) {
      totalPoints += SCORING.finalsBonus.finalsMvp;
    }
  }

  if (typeof actualBonus.finalsGames === "number") {
    finalsGamesDistance = Math.abs(participant.bonus.finalsGames - actualBonus.finalsGames);
    if (participant.bonus.finalsGames === actualBonus.finalsGames) {
      totalPoints += SCORING.finalsBonus.finalsGames;
    }
  }

  return {
    ...participant,
    totalPoints,
    exactSeriesCount,
    correctChampion,
    correctFinalsMvp,
    finalsGamesDistance,
    roundBreakdown
  };
}

function rankParticipants(participants) {
  const resultsLookup = buildResultsLookup(DATA.actualResults);

  return participants
    .map((participant) => scoreParticipant(participant, resultsLookup))
    .sort((a, b) => {
      if (b.totalPoints !== a.totalPoints) {
        return b.totalPoints - a.totalPoints;
      }

      if (b.exactSeriesCount !== a.exactSeriesCount) {
        return b.exactSeriesCount - a.exactSeriesCount;
      }

      if (a.correctChampion !== b.correctChampion) {
        return Number(b.correctChampion) - Number(a.correctChampion);
      }

      if (a.correctFinalsMvp !== b.correctFinalsMvp) {
        return Number(b.correctFinalsMvp) - Number(a.correctFinalsMvp);
      }

      if (a.finalsGamesDistance === null && b.finalsGamesDistance !== null) {
        return 1;
      }

      if (b.finalsGamesDistance === null && a.finalsGamesDistance !== null) {
        return -1;
      }

      if (a.finalsGamesDistance !== b.finalsGamesDistance) {
        return (a.finalsGamesDistance ?? Number.MAX_SAFE_INTEGER) - (b.finalsGamesDistance ?? Number.MAX_SAFE_INTEGER);
      }

      return a.name.localeCompare(b.name);
    })
    .map((participant, index) => ({ ...participant, rank: index + 1 }));
}

function getSeriesStatus(pick, actual) {
  if (!actual || !actual.complete) {
    return { label: "Pending", className: "status--pending" };
  }

  if (pick.winner === actual.winner) {
    return { label: pick.games === actual.games ? "Winner + Games" : "Winner Correct", className: "status--correct" };
  }

  return { label: "Missed", className: "status--incorrect" };
}

function getSelectedPlayerName(participants) {
  const params = new URLSearchParams(window.location.search);
  const queryPlayer = params.get("player");
  const storedPlayer = window.localStorage.getItem(STORAGE_KEY);
  const availableNames = participants.map((participant) => participant.name);

  if (queryPlayer && availableNames.includes(queryPlayer)) {
    return queryPlayer;
  }

  if (storedPlayer && availableNames.includes(storedPlayer)) {
    return storedPlayer;
  }

  return participants[0]?.name ?? "";
}

function setSelectedPlayer(name) {
  window.localStorage.setItem(STORAGE_KEY, name);
  const params = new URLSearchParams(window.location.search);
  params.set("player", name);
  const nextUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, "", nextUrl);
}

function renderHero(standings, selectedParticipant) {
  const [leader, runnerUp] = standings;
  const container = document.getElementById("hero-scoreboard");

  container.innerHTML = `
    <article class="hero__score-card">
      <p class="hero__score-label">Current Leader</p>
      <p class="hero__score-value">${leader ? leader.totalPoints : 0}</p>
      <p class="hero__score-subtitle">${leader ? `${leader.name} leads the field` : "Add participants to begin tracking"}</p>
    </article>
    <article class="hero__score-card hero__score-card--runner">
      <p class="hero__score-label">Closest Challenger</p>
      <p class="hero__score-value">${runnerUp ? runnerUp.totalPoints : 0}</p>
      <p class="hero__score-subtitle">${runnerUp ? `${runnerUp.name} is chasing the top spot` : "Waiting on more entries"}</p>
    </article>
    <article class="hero__score-card hero__score-card--runner">
      <p class="hero__score-label">Personal View</p>
      <p class="hero__score-value">${selectedParticipant ? `#${selectedParticipant.rank}` : "--"}</p>
      <p class="hero__score-subtitle">${selectedParticipant ? `${selectedParticipant.name} has ${selectedParticipant.totalPoints} points` : "Choose a player to personalize the page"}</p>
    </article>
  `;
}

function renderParticipantSelector(standings, selectedName) {
  const container = document.getElementById("participant-selector");

  container.innerHTML = standings.map((participant) => `
    <button class="participant-pill ${participant.name === selectedName ? "is-active" : ""}" type="button" data-select-player="${participant.name}">
      <span class="participant-pill__name">${participant.name}</span>
      <span class="participant-pill__meta">Rank #${participant.rank} | ${participant.totalPoints} pts</span>
    </button>
  `).join("");
}

function renderLeaderboard(standings, selectedName) {
  const container = document.getElementById("leaderboard");

  const rows = standings.map((participant) => `
    <div class="leaderboard-row ${participant.rank === 1 ? "leaderboard-row--top" : ""} ${participant.name === selectedName ? "leaderboard-row--selected" : ""}" data-player-name="${participant.name}">
      <div class="rank">#${participant.rank}</div>
      <div>
        <div class="player-name">${participant.name}</div>
        <div class="player-summary">${participant.exactSeriesCount} exact series picked</div>
      </div>
      <div class="score-cell"><strong>${participant.totalPoints}</strong>Total</div>
      <div class="score-cell"><strong>${participant.roundBreakdown.round1.roundPoints}</strong>R1</div>
      <div class="score-cell"><strong>${participant.roundBreakdown.round2.roundPoints}</strong>R2</div>
      <div class="score-cell"><strong>${participant.roundBreakdown.conferenceFinals.roundPoints + participant.roundBreakdown.finals.roundPoints}</strong>Late</div>
    </div>
  `).join("");

  container.innerHTML = `
    <div class="leaderboard-table">
      <div class="leaderboard-row leaderboard-head">
        <div>Rank</div>
        <div>Player</div>
        <div>Total</div>
        <div>R1</div>
        <div>R2</div>
        <div>Late</div>
      </div>
      ${rows}
    </div>
    <div class="legend">
      <p>
        Loose bracket scoring is active. Each round earns points on its own, so a missed early pick does not wipe out later rounds.
      </p>
      <p>
        Click any player row to switch the page into that person's personalized view.
      </p>
    </div>
  `;
}

function renderResults() {
  const container = document.getElementById("results-grid");
  const cards = [];

  Object.entries(SCORING.rounds).forEach(([roundKey, config]) => {
    DATA.actualResults[roundKey].forEach((series) => {
      cards.push(`
        <article class="result-card">
          <div class="result-card__top">
            <div>
              <p class="eyebrow">${config.label}</p>
              <h3>${series.label}</h3>
            </div>
            <span class="chip ${series.complete ? "chip--complete" : "chip--pending"}">
              ${series.complete ? "Final" : "Pending"}
            </span>
          </div>
          <p class="result-winner">${series.matchup}</p>
          <p class="result-meta">${series.winner ? `Winner: ${series.winner}` : series.schedule}</p>
          <p class="result-meta">${series.games ? `${series.games} games` : "Series result not entered yet"}</p>
        </article>
      `);
    });
  });

  container.innerHTML = `
    ${cards.join("")}
    <div class="legend">
      <p>
        ${DATA.source.updatedLabel}. Source: <a href="${DATA.source.officialScheduleUrl}" target="_blank" rel="noreferrer">NBA playoff schedule</a>.
      </p>
    </div>
  `;
}

function renderBonusItem(label, pick, actual) {
  let statusLabel = "Pending";
  let className = "status--pending";

  if (actual !== null) {
    if (pick === actual) {
      statusLabel = "Correct";
      className = "status--correct";
    } else {
      statusLabel = "Missed";
      className = "status--incorrect";
    }
  }

  return `
    <div class="bonus-item">
      <div>
        <strong>${label}</strong>
        <div class="bonus-meta">${pick}</div>
      </div>
      <span class="status ${className}">${statusLabel}</span>
    </div>
  `;
}

function renderBonus(participant) {
  const container = document.getElementById("bonus-grid");
  const actualBonus = DATA.actualResults.bonus;

  if (!participant) {
    container.innerHTML = `<p class="empty-state">Choose a participant to see their bonus picks.</p>`;
    return;
  }

  container.innerHTML = `
    <article class="bonus-card">
      <div class="bonus-card__top">
        <div>
          <p class="eyebrow">Bonus Picks</p>
          <h3>${participant.name}</h3>
        </div>
        <span class="chip">${participant.totalPoints} pts</span>
      </div>
      <div class="bonus-items">
        ${renderBonusItem("Champion", participant.bonus.champion, actualBonus.champion)}
        ${renderBonusItem("Finals MVP", participant.bonus.finalsMvp, actualBonus.finalsMvp)}
        ${renderBonusItem("Finals Games", participant.bonus.finalsGames, actualBonus.finalsGames)}
      </div>
    </article>
  `;
}

function renderParticipants(participant) {
  const container = document.getElementById("participants");
  const resultsLookup = buildResultsLookup(DATA.actualResults);

  if (!participant) {
    container.innerHTML = `<p class="empty-state">Choose a participant to see their bracket picks.</p>`;
    return;
  }

  container.innerHTML = `
    <article class="participant-card">
      <div class="participant-card__top">
        <div>
          <p class="eyebrow">Rank #${participant.rank}</p>
          <h3>${participant.name}</h3>
        </div>
        <div class="participant-score">
          <strong>${participant.totalPoints}</strong>
          <span class="pick-meta">total points</span>
        </div>
      </div>
      ${Object.entries(SCORING.rounds).map(([roundKey, config]) => `
        <section class="round-block">
          <p class="round-label">${config.label}</p>
          <div class="round-list">
            ${participant.picks[roundKey].map((pick) => {
              const actual = resultsLookup[pick.id];
              const status = getSeriesStatus(pick, actual);

              return `
                <div class="pick-item">
                  <div>
                    <div class="pick-item__label">${actual ? actual.matchup : pick.id}</div>
                    <div class="pick-item__meta">${pick.winner} in ${pick.games} games</div>
                  </div>
                  <span class="status ${status.className}">${status.label}</span>
                </div>
              `;
            }).join("")}
          </div>
        </section>
      `).join("")}
    </article>
  `;
}

function attachParticipantSelection(standings) {
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-select-player], [data-player-name]");
    if (!trigger) {
      return;
    }

    const nextName = trigger.dataset.selectPlayer || trigger.dataset.playerName;
    const currentName = window.localStorage.getItem(STORAGE_KEY);

    if (!nextName || nextName === currentName) {
      return;
    }

    renderApp(standings, nextName);
  });
}

function renderApp(standings, selectedName) {
  setSelectedPlayer(selectedName);
  const selectedParticipant = standings.find((participant) => participant.name === selectedName) ?? standings[0];

  renderHero(standings, selectedParticipant);
  renderLeaderboard(standings, selectedParticipant.name);
  renderParticipantSelector(standings, selectedParticipant.name);
  renderResults();
  renderBonus(selectedParticipant);
  renderParticipants(selectedParticipant);
}

function init() {
  const standings = rankParticipants(DATA.participants);
  const selectedName = getSelectedPlayerName(standings);

  attachParticipantSelection(standings);
  renderApp(standings, selectedName);
}

init();
