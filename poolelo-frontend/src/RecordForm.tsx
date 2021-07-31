import React, { useState } from 'react';
import { Player } from './models/Player';
import { PlayerSelector } from './PlayerSelector';
import "./RecordForm.scss";

type RecordFormProps = {
    players: Player[]
};

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
    },
    {
        name: "Martina",
        id: 5,
        ELO: 1000,
        hasImproved: true,
    },
    {
        name: "Reece",
        id: 6,
        ELO: 1000,
        hasImproved: true,
    },
    {
        name: "Andrei",
        id: 7,
        ELO: 1000,
        hasImproved: true,
    },
]

export const RecordForm = () => {
    const [winnerPlayerId, setWinnerPlayerId] = useState<number | undefined>(undefined);
    const [loserPlayerId, setLoserPlayerId] = useState<number | undefined>(undefined);

    return (
        <div className="record-form">
            <div className="player-selector-wrapper">
                <PlayerSelector players={testPlayers} callback={(id) => {setWinnerPlayerId(id)}} selectedPlayerId={winnerPlayerId}/>
            </div>
            <div className="divider">BEAT</div>
            <div className="player-selector-wrapper">
                <PlayerSelector players={testPlayers} callback={(id) => {setLoserPlayerId(id)}} selectedPlayerId={loserPlayerId}/>
            </div>
            <button className="divider submit-button">Record</button>
        </div>
    )
};