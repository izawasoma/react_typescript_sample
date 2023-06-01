import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <h2>Home</h2>
            <p>これはHomeです</p>
            <ul>
                <li><Link to={`/sample/1`}>サンプル01:コンポーネントの基本</Link></li>
                <li><Link to={`/sample/2`}>サンプル02:近日追加</Link></li>
            </ul>
        </>
    )
}