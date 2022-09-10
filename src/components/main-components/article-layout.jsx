import { articleStyle } from "../../styles/article-style";

export default function ArticleLayout(props) {
  return (
    <article className={`${articleStyle} ${props.pos}`}>
      {props.children}
    </article>
  );
}
