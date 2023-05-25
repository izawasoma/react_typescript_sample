import { Link } from "react-router-dom";

export const Sample02 = () => {
    return (
        <>
            <h2>サンプル02</h2>
            <p>これはサンプル02のページです。</p>
            <Link to={`/`}>Homeに戻る</Link>
        </>
    )
}