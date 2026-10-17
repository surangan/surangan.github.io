/* Site config: the hero map.
   Edit this file to make the map yours. Everything else is in index.html.

   area    The slice of the world to show, in degrees. lon0 is the left edge, lon1 the
           right edge (go past 180 to wrap the Americas onto the right), lat0 the top,
           lat1 the bottom. The map keeps its aspect ratio inside the right half of the hero.
   places  Where you have lived or worked. Keys are short ids used by routes and trips.
           name, note: the label ("SINGAPORE · NOW"); note is optional. side: 1 puts the label right of
           the dot, -1 left. dy: label offset up (negative) or down (positive), in px.
           home: true gives the place a heartbeat ring (use it once, for where you are now).
   routes  Moves between places, drawn in order: [fromId, toId] or [fromId, toId, true]
           for a dashed "remote" link (a team, a collaborator).
   areaMobile  Optional tighter slice for phones (under 980 px wide). Trips outside it are hidden.
   trips   Places you visited. from: the place id you lived in at the time (the arc
           starts there). note is optional (an event name reads well). Arcs fly from
           each origin continuously; hovering a destination shows its label. */
window.SITE = {
  map: {
    area: { lon0: -14, lon1: 292, lat0: 62, lat1: -48 },
    areaMobile: { lon0: 62, lon1: 192, lat0: 46, lat1: -48 },
    places: {
      cmb: { name: 'Colombo', note: 'home', lat: 6.93, lon: 79.85, side: -1, dy: -14 },
      sg: { name: 'Singapore', note: 'now', lat: 1.35, lon: 103.82, side: 1, dy: 16, home: true },
      bos: { name: 'Cambridge, MA', note: 'MIT Media Lab', lat: 42.36, lon: -71.09, side: -1, dy: -14 },
      akl: { name: 'Auckland', note: 'ABI', lat: -36.85, lon: 174.76, side: -1, dy: -14 },
    },
    routes: [['cmb', 'sg'], ['sg', 'bos'], ['bos', 'sg'], ['sg', 'akl'], ['akl', 'sg'], ['sg', 'cmb', true]],
    trips: [
      { name: 'Birmingham', note: 'Exchange', lat: 52.49, lon: -1.89, from: 'sg', dy: -16 },
      { name: 'Los Angeles', note: 'USC', lat: 34.05, lon: -118.24, from: 'sg', side: -1 },
    ],
  },
};
