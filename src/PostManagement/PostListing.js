import { Link } from 'react-router-dom';

function PostListing() {
    return (
        <div>
            <h1>This is Post Listing</h1>
            <ul>
                <li><Link to='/posts/1'>Post 1</Link></li>
                <li><Link to='/posts/2'>Post 2</Link></li>
            </ul>
        </div>
    );
}

export default PostListing;