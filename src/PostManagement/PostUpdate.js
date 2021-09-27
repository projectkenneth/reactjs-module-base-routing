import { useParams } from 'react-router-dom';

function PostUpdate() {
    let { postId } = useParams();
    return (
        <h1>This is Post Update Id: {postId}</h1>
    );
}

export default PostUpdate;