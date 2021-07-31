import React from 'react';
import { Player } from './models/Player';
import "./PlayerSelector.scss";

type PlayerSelectorProps = {
    players: Player[],
    selectedPlayerId: number | undefined,
    callback: (playerId: number) => void,
}

export const PlayerSelector = (props: PlayerSelectorProps) => (
    <div className="player-selector">
        {props.players.map(player => 
            <div className={"player-option " + (player.id === props.selectedPlayerId ? 'selected' : '')} onClick={() => props.callback(player.id)}>
                {player.name}
            </div>
        )}
    </div>
);