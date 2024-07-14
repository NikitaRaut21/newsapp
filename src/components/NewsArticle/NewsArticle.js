import "./NewsArticle.css"

function NewsArticle({author, title, description, url, urlToImage, publishedAt}) {
    return (
        <>
            <div className="news-article-card">
                <img src={urlToImage} alt="" className="news-article-img" />
                <h3>{title}</h3>
                <div className="article-info">
                    <p>{author}</p>
                    <p>{publishedAt}</p>
                </div>
                <p className="article-description">{description}</p>
                <a href={url} target="_blank" className="btn-read-more">Read More</a>
            </div>
        </>
    )
}

export default NewsArticle 