import React from 'react';
import {RankingsTable} from './rankingsTable';

const testPlayers = [
    {
        name: "Rupert",
        id: 1,
        ELO: 1000,
        hasImproved: true,
    },
    {
        name: "Harry",
        id: 2,
        ELO: 1000,
        hasImproved: false,
    },
    {
        name: "Amar",
        id: 3,
        ELO: 1000,
        hasImproved: true,
    },
    {
        name: "Marcus",
        id: 4,
        ELO: 1000,
        hasImproved: false,
    }
]

export const Rankings = () => <RankingsTable players={testPlayers}/>;