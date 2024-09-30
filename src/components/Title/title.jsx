import './title.css';

function Title({ mainTitle, subTitle }){

    return(
        <div className="title">
            <p className="title_subtitle">{subTitle}</p>
            <h2 className="main-title">{mainTitle}</h2>
        </div>
    );
}

export default Title;