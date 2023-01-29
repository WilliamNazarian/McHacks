import { useParams } from "react-router-dom";

function MyExpertPage() {
    const { voteId } = useParams();

    return (
        <>
            <div>Hello {voteId}</div>
        </>
    );
}

export default MyExpertPage;