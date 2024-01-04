import articles from "./article-conent";
import { Link } from "react-router-dom";
const ArticlesListPage = () => {
    return(
        <>
        <h1> articles </h1>
        {articles.map(article => (
            <Link to={'/articles/${article.name}'}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0,200)}....</p>
            </Link>
        ) )}
                </>
    )
}

export default ArticlesListPage;