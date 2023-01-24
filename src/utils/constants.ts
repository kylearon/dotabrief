

export const dotaconstants = require('dotaconstants');

export const THIS_PATCH = "THIS_PATCH";
export const LAST_MONTH = "LAST_MONTH";
export const LAST_100 = "LAST_100";

export const BEST_HEROES = "BEST_HEROES";
export const WORST_HEROES = "WORST_HEROES";

export const STEAM_CDN_URL = "https://cdn.cloudflare.steamstatic.com"


export const PLAYERS_URL = "https://api.opendota.com/api/players/";
export const MATCHES_URL = "https://api.opendota.com/api/matches/";
export const CONSTANTS_URL = "https://api.opendota.com/api/constants/";

export const PATCHES_URL = "https://api.opendota.com/api/constants/patch";



export const MATCHES_URL_PARAMS = "/matches?"

//needs a game mode and patch params added to the end
export const WIN_LOSS_URL_PARAMS = "/wl?";

export const GAME_MODE_AP_URL_PARAM = "game_mode=1&significant=1";
export const GAME_MODE_TURBO_URL_PARAM = "game_mode=23&significant=0";

export const THIS_PATCH_URL_PARAM = "patch=51";
export const LAST_MONTH_URL_PARAM = "date=30";
export const LAST_100_URL_PARAM = "limit=100";




export const TIMEFRAME_PARAM_MAP = new Map<string, string>([
    [THIS_PATCH, THIS_PATCH_URL_PARAM],
    [LAST_MONTH, LAST_MONTH_URL_PARAM],
    [LAST_100, LAST_100_URL_PARAM],
])