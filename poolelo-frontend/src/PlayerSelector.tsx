import React, { useState } from 'react';
import { Player } from './models/Player';
import "./PlayerSelector.scss";

type PlayerSelectorProps = {
    players: Player[],
    selectedPlayerId: number | undefined | "NEW",
    callback: (playerId: number | "NEW") => void,
    newPlayerName: string,
    setNewPlayerName: (name: string) => void,
}

export const PlayerSelector = (props: PlayerSelectorProps) => {
    return (
    <div className="player-selector">
        {props.players.map(player => 
            <div className={"player-option " + (player.id === props.selectedPlayerId ? 'selected' : '')} onClick={() => props.callback(player.id)}>
                {player.name}
            </div>
        )}
        <div className={"player-option " + (props.selectedPlayerId === "NEW" ? 'selected' : '')}>
            <input onChange={event => props.setNewPlayerName(event.target.value)} onFocus={() => props.callback("NEW")} value={props.newPlayerName}></input>
        </div>
    </div>
)};