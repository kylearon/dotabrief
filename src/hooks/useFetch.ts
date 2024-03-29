//reference: https://usehooks-ts.com/react-hook/use-fetch

import { useEffect, useReducer, useRef } from 'react'
import { GAME_MODE_AP, GAME_MODE_AP_URL_PARAM, GAME_MODE_RANKED, GAME_MODE_TURBO, GAME_MODE_TURBO_URL_PARAM, LOBBY_TYPE_RANKED_URL_PARAM, MATCHES_URL_BASE, MATCHES_VERBOSE_URL_PARAMS, PATCHES_URL, PLAYERS_URL, SIDE_DIRE, SIDE_DIRE_URL_PARAM, SIDE_RADIANT, SIDE_RADIANT_URL_PARAM, THIS_PATCH, TIMEFRAME_PARAM_MAP, WIN_LOSS_URL_BASE } from '../utils/constants'

interface State<T> {
  data?: T
  error?: Error
}

type Cache<T> = { [url: string]: T }

// discriminated union type
type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: Error }

function useFetch<T = unknown>(url?: string, options?: RequestInit): State<T> {
    const cache = useRef<Cache<T>>({})

    // Used to prevent state update if the component is unmounted
    const cancelRequest = useRef<boolean>(false)

    const initialState: State<T> = {
        error: undefined,
        data: undefined,
    }

    // Keep state logic separated
    const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
        switch (action.type) {
        case 'loading':
            return { ...initialState }
        case 'fetched':
            return { ...initialState, data: action.payload }
        case 'error':
            return { ...initialState, error: action.payload }
        default:
            return state
        }
    }

    const [state, dispatch] = useReducer(fetchReducer, initialState)

    useEffect(() => {
        // Do nothing if the url is not given
        if (!url) return;

        cancelRequest.current = false;

        const fetchData = async () => {
            dispatch({ type: 'loading' })

            // If a cache exists for this url, return it
            // if (cache.current[url]) {
            //     dispatch({ type: 'fetched', payload: cache.current[url] })
            //     return
            // }

            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const data = (await response.json()) as T;
                cache.current[url] = data;
                if (cancelRequest.current) return;

                dispatch({ type: 'fetched', payload: data })
            } catch (error) {
                if (cancelRequest.current) return;

                dispatch({ type: 'error', payload: error as Error });
            }
        }

        void fetchData()

        // Use the cleanup function for avoiding a possibly...
        // ...state update after the component was unmounted
        return () => {
            cancelRequest.current = true
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return state
}

export default useFetch

export interface ProfileData {
    account_id: number
    personaname: string
    avatar: string
    avatarfull: string
}

export interface PlayerData {
    competitive_rank: number
    rank_tier: number
    solo_competitive_rank: number
    profile: ProfileData
}

export const useFetchPlayer = (playerId: string) => {
    const fullUrl = PLAYERS_URL + playerId;
    const { data, error } = useFetch<PlayerData>(fullUrl);
    return {playerData: data, playerDataError: error};
}


export interface PatchData {
    name: string
    date: string
    id: number
}

export const useFetchPatches = () => {
    const fullUrl = PATCHES_URL;
    const { data, error } = useFetch<PatchData[]>(fullUrl);
    return {patchesData: data, patchesError: error};
}


//map the timeframe string to the timeframe url params
function getTimeframeParam(separator: string, timeframe: string, patchNumber: number): string {
    
    let timeframeParam = undefined;

    if(timeframe === THIS_PATCH) {
        timeframeParam = TIMEFRAME_PARAM_MAP.get(timeframe)! + patchNumber;
    } else {
        timeframeParam = TIMEFRAME_PARAM_MAP.get(timeframe);
    }
    
    return timeframeParam ? (separator + timeframeParam) : "";
}

//map the game mode string value to the game mode url params
function getGameModeParam(separator: string, gameMode:string): string {
    if(gameMode === GAME_MODE_AP) {
        return separator + GAME_MODE_AP_URL_PARAM;
    } else if(gameMode === GAME_MODE_RANKED) {
        return separator + LOBBY_TYPE_RANKED_URL_PARAM;
    } else if(gameMode === GAME_MODE_TURBO) {
        return separator + GAME_MODE_TURBO_URL_PARAM;
    }

    return "";
}

function getSideParam(separator: string, side:string): string {
    if(side === SIDE_RADIANT) {
        return separator + SIDE_RADIANT_URL_PARAM;
    } else if(side === SIDE_DIRE) {
        return separator + SIDE_DIRE_URL_PARAM;
    }

    return "";
}


export interface WinLossData {
    win: number
    lose: number
}

export const useFetchWinLoss = (playerId: string, timeframe: string, patchNumber: number, gameMode: string, side: string) => {
    const fullUrl = PLAYERS_URL + playerId + WIN_LOSS_URL_BASE + getTimeframeParam("?", timeframe, patchNumber) + getGameModeParam("&", gameMode) + getSideParam("&", side);
    const { data, error } = useFetch<WinLossData>(fullUrl);
    return {winLossData: data, winLossError: error};
}



export interface MatchData {
    match_id: string
    player_slot: number
    radiant_win: boolean
    hero_id: number
    duration: number
    start_time: string
    kills: number
    deaths: number
    assists: number
    hero_damage: number
    tower_damage: number
    last_hits: number
    party_size: number
    item_0: number
    item_1: number
    item_2: number
    item_3: number
    item_4: number
    item_5: number
}

export const useFetchMatches = (playerId: string, timeframe: string, patchNumber: number, gameMode: string, side: string) => {
    // console.log("inside useFetchMatches()");
    const fullUrl = PLAYERS_URL + playerId + MATCHES_URL_BASE + getTimeframeParam("?", timeframe, patchNumber) + getGameModeParam("&", gameMode) + getSideParam("&", side) + "&" + MATCHES_VERBOSE_URL_PARAMS;
    const { data, error } = useFetch<MatchData[]>(fullUrl);
    return {matchesData: data, matchesError: error};
}