import React from 'react';
import {Player} from './rankingsTable';
import './rankingsTableRow.scss';

type TableRowProps = {
    player: Player;
};

export let TableRow = (props: TableRowProps) => (
    <div className="table-row">
        <div className="name">{props.player.name}:</div>
        <div className="elo">{props.player.ELO}</div>
        <div>{props.player.hasImproved ? "📈" : "📉"}</div> 
    </div>
);