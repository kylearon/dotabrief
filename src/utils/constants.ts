

export const dotaconstants = require('dotaconstants');

export const THIS_PATCH = "THIS_PATCH";
export const LAST_MONTH = "LAST_MONTH";
export const LAST_100 = "LAST_100";

export const BEST_HEROES = "BEST_HEROES";
export const WORST_HEROES = "WORST_HEROES";

export const GAME_MODE_TURBO = "turbo";
export const GAME_MODE_AP = "all_pick";
export const GAME_MODE_RANKED = "ranked";

export const LOBBY_TYPE_NORMAL = "normal_matchmaking";
export const LOBBY_TYPE_RANKED = "ranked_matchmaking";

export const SIDE_RADIANT = "SIDE_RADIANT";
export const SIDE_DIRE = "SIDE_DIRE";
export const SIDE_BOTH = "SIDE_BOTH";

export const STEAM_CDN_URL = "https://cdn.cloudflare.steamstatic.com";
export const STEAM_CDN_ITEMS_FULL_URL = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/"; //phase_boots.png
export const STEAM_CDN_DEFAULT_ICON_FULL_URL = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/default.png";

export const SEARCH_FOR_PLAYER_URL = "https://api.opendota.com/api/search?q=";

export const PLAYERS_URL = "https://api.opendota.com/api/players/";
export const MATCHES_URL = "https://api.opendota.com/api/matches/";
export const CONSTANTS_URL = "https://api.opendota.com/api/constants/";

export const PATCHES_URL = "https://api.opendota.com/api/constants/patch";



export const MATCHES_URL_BASE = "/matches?"

//needs a game mode and patch params added to the end
export const WIN_LOSS_URL_BASE = "/wl?";

export const GAME_MODE_AP_URL_PARAM = "game_mode=1"; //&significant=1";
export const GAME_MODE_TURBO_URL_PARAM = "game_mode=23&significant=0";
export const LOBBY_TYPE_RANKED_URL_PARAM = "lobby_type=7";

export const THIS_PATCH_URL_PARAM = "patch=51";
export const LAST_MONTH_URL_PARAM = "date=30";
export const LAST_100_URL_PARAM = "limit=100";

export const TIMEFRAME_PARAM_MAP = new Map<string, string>([
    [THIS_PATCH, THIS_PATCH_URL_PARAM],
    [LAST_MONTH, LAST_MONTH_URL_PARAM],
    [LAST_100, LAST_100_URL_PARAM],
])

export const SIDE_RADIANT_URL_PARAM = "is_radiant=1";
export const SIDE_DIRE_URL_PARAM = "is_radiant=0";

export const MATCHES_VERBOSE_URL_PARAMS = "project=duration&project=game_mode&project=lobby_type&project=start_time&project=hero_id&project=kills&project=deaths&project=assists&project=hero_damage&project=tower_damage&project=last_hits&project=leaver_status&project=party_size&project=item_0&project=item_1&project=item_2&project=item_3&project=item_4&project=item_5&project=backpack_0";


export const DOTABUFF_MATCH_URL = "https://www.dotabuff.com/matches/";
export const OPENDOTA_MATCH_URL = "https://www.opendota.com/matches/";