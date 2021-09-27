import { Link } from 'react-router-dom';

function DraftListing() {
    return (
        <div>
            <h1>This is Draft Listing</h1>
            <ul>
                <li><Link to='/drafts/1'>Draft 1</Link></li>
                <li><Link to='/drafts/2'>Draft 2</Link></li>
            </ul>
        </div>
    );
}

export default DraftListing;