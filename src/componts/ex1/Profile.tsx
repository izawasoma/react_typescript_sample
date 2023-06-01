import { Fragment } from "react";

export const Profile = () => {
    type ProfileData = {
        title:String,
        contents:String,
    }

    const name :string = "上杉康二";
    const profiles :Array<ProfileData> = [
        {title:"年齢", contents:"43歳"},
        {title:"性別", contents:"男性"},
        {title:"趣味", contents:"スキー"},
        {title:"職業", contents:"会社員"},
    ];

    return (
        <section>
            <h2>{ name }</h2>
            <dl>
                { profiles.map((profile,index)=>
                    <Fragment key={ index }>
                        <dt>{ profile.title }</dt>
                        <dl>{ profile.contents }</dl>
                    </Fragment>
                )}
            </dl>
        </section>
    );
}