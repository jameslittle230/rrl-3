import Container from "../../components/container";
import ReactMarkdown from "react-markdown";

const markdownContent = `
# Emotional Health during COVID-19

We know how challenging these times are. In close partnership with Boston
Children’s Hospital we are happy to offer some coping strategies. Click on
the link to find hands on strategies for many stressful situations that
parents and patients confront. And as always, we are here to help.
`;

const EmotionalHealth = () => <Container>
  <ReactMarkdown className="prose">{markdownContent}</ReactMarkdown>
</Container>;

export default EmotionalHealth;
