import { useSelector } from "react-redux";
import { getError } from "redux/phoneBook/phoneBookSlice";
import { Err } from "./Error.styled";

export const Error = () => {
    const error = useSelector(getError);

    return (
        <Err>
            <p>We're sorry, {error}</p>
        </Err>
)};