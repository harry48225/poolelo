import React from 'react';
import "./rankingsTable.scss";
import { TableRow } from './rankingsTableRow';
import {Player} from './models/Player';

export type RankingsTableProps = {
    players: Player[];
}

export function RankingsTable(props: RankingsTableProps) {
    return (<div className="rankings-table">
        {props.players.map(player => 
            <TableRow player={player}/>
        )}
        </div>
    )
}