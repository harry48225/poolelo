import React, { useState } from 'react';
import { Player } from './models/Player';
import { PlayerSelector } from './PlayerSelector';
import "./RecordForm.scss";

type RecordFormProps = {
    players: Player[]
};

export const RecordForm = (props: RecordFormProps) => {
    const [winnerPlayerId, setWinnerPlayerId] = useState<number | undefined | "NEW">(undefined);
    const [winnerNewPlayerName, setWinnerNewPlayerName] = useState("");

    const [loserPlayerId, setLoserPlayerId] = useState<number | undefined  | "NEW">(undefined);
    const [loserNewPlayerName, setLoserNewPlayerName] = useState("");

    return (
        <div className="record-form">
            <div className="player-selector-wrapper">
                <PlayerSelector players={props.players} callback={(id) => {if (id === "NEW" || id !== loserPlayerId) {setWinnerPlayerId(id)}}} selectedPlayerId={winnerPlayerId} setNewPlayerName={setWinnerNewPlayerName} newPlayerName={winnerNewPlayerName}/>
            </div>
            <div className="divider">BEAT</div>
            <div className="player-selector-wrapper">
                <PlayerSelector players={props.players} callback={(id) => {if (id === "NEW" || id !== winnerPlayerId) {setLoserPlayerId(id)}}} selectedPlayerId={loserPlayerId} setNewPlayerName={setLoserNewPlayerName} newPlayerName={loserNewPlayerName}/>
            </div>
            <button className="divider submit-button">Record</button>
        </div>
    )
};