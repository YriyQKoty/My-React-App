import { useContext } from 'react';
import { VisitHistoryContext } from '../contexts/VisitHistory';

export default function Debug() {
    const { visits } = useContext(VisitHistoryContext);

    return (<ol style={{marginTop: 100}}>
        {visits.map(v => <li key={Math.random()}>{v}</li>)}
    </ol>)
}