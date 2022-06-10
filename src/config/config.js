const regione = [
    { id: 0, value: "-- Choose --" },
    { id: 1, value: "lazio" },
    { id: 2, value: "piemonte" },
    { id: 3, value: "lombardia" },
    { id: 4, value: "veneto" },
    { id: 5, value: "liguria" },
    { id: 6, value: "emilia-romangna" },
    { id: 7, value: "toscana" },
    { id: 8, value: "puglia" },
    { id: 9, value: "campania" },
    { id: 10, value: "sicilia" },
]

const provincia = [
    { id: 0, value: "-- Choose --", shortShow: "" },
    { id: 1, value: "roma", shortShow: "lazio" },
    { id: 2, value: "torino", shortShow: "piemonte" },
    { id: 3, value: "milano", shortShow: "lombardia" },
    { id: 4, value: "venezia", shortShow: "veneto" },
    { id: 5, value: "genova", shortShow: "liguria" },
    { id: 6, value: "bologna", shortShow: "emilia-romangna" },
    { id: 7, value: "firenze", shortShow: "toscana" },
    { id: 8, value: "bari", shortShow: "puglia" },
    { id: 9, value: "napoli", shortShow: "campania" },
    { id: 10, value: "catania", shortShow: "sicilia" },
    { id: 11, value: "palermo", shortShow: "sicilia" },
    { id: 12, value: "verona", shortShow: "veneto" },
]

const comune = [
    { id: 0, value: "-- choose --", shortShow: "" },
    { id: 1, value: "roma", shortShow: "roma" },
    { id: 2, value: "torino", shortShow: "torino" },
    { id: 3, value: "milano", shortShow: "milano" },
    { id: 4, value: "venezia", shortShow: "venezia" },
    { id: 5, value: "genova", shortShow: "genova" },
    { id: 6, value: "bologna", shortShow: "bologna" },
    { id: 7, value: "firenze", shortShow: "firenze" },
    { id: 8, value: "bari", shortShow: "bari" },
    { id: 9, value: "napoli", shortShow: "napoli" },
    { id: 10, value: "catania", shortShow: "catania" },
    { id: 11, value: "palermo", shortShow: "palermo" },
    { id: 12, value: "verona", shortShow: "verona" },
]

const unita_urbanistica = [
    { id: 0, value: "-- choose --" },
    { id: 1, value: "a" },
    { id: 2, value: "b" },
    { id: 3, value: "c" },
    { id: 4, value: "d" },
    { id: 5, value: "e" },
    { id: 6, value: "f" },
]

export const names = [
    { id: 1, naid: "regione", info: regione, type: "drop", refined: false },
    { id: 2, naid: "provincia", info: provincia, type: "drop", refined: true },
    { id: 3, naid: "comune", info: comune, type: "drop", refined: true },
    { id: 4, naid: "unita_urbanistica", info: unita_urbanistica, type: "drop", refined: false },
    { id: 5, naid: "valore", info: null, type: "text", refined: false },
]