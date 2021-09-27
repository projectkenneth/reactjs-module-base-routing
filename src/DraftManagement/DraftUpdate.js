import { useParams } from 'react-router-dom';

function DraftUpdate() {
    let { draftId } = useParams();

    return (
        <h1>This is Draft Update: {draftId}</h1>
    );
}

export default DraftUpdate;