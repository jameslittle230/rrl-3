import Container from "../components/container";
import ReactMarkdown from "react-markdown";

const markdownContent = `
# 404: Page not found.

You've landed on a link that doesn't exist on this website. If you think this is an error, please let us know! Otherwise, use the navigation links to get back to somewhere familiar.
`;

const fourOhFour= () => <Container>
  <ReactMarkdown className="prose">{markdownContent}</ReactMarkdown>
</Container>;

export default fourOhFour;
