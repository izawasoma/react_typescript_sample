import { Link } from "react-router-dom";
import { Profile } from "./../componts/ex1/Profile";
import { Title } from "./../componts/ex1/Title";

export const Sample01 = () => {
    return (
        <>
            <h1>01.コンポーネントの基本</h1>
            <Title></Title>
            <Profile></Profile>
            <Link to={`/`}>Homeに戻る</Link>
        </>
    )
}