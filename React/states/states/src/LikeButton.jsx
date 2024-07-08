import { useState } from "react";

export default function LikeButton() {
    const [isLiked, setIsLiked] = useState(false);

    function buttonClick() {
        setIsLiked(!isLiked);
    }

    return (
        <div>
            <p onClick={buttonClick}>
                Like button {isLiked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
            </p>
        </div>
    );
}
