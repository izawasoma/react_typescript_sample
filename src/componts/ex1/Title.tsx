export const Title = () => {
    const title :string = "プロフィール一覧";
    const discription :string = "各ユーザーのプロフィールを表示します";

    return (
        <>
            <h1>{ title }</h1>
            <p>{ discription }</p>
        </>
    );
}