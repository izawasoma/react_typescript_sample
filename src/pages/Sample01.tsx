import { Link } from "react-router-dom";

export const Sample01 = () => {
    return (
        <>
            <h2>サンプル01</h2>
            <p>これはサンプル01のページです。</p>
            <Link to={`/`}>Homeに戻る</Link>
        </>
    )
}