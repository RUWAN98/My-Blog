import articles from "./article-conent";
import ArticlesList from "../components/ArticlesList";


const ArticlesListPage = () => {
    return(
        <>
        <h1> articles </h1>
        <ArticlesList articles={articles}/>

                </>
    )
}

export default ArticlesListPage;