import Container from "./container";

export default function ModularEmbedBlock({ embedCode }) {
  return (
    <Container>
    <div dangerouslySetInnerHTML={{ __html: embedCode }}></div>
    </Container>
  )
}