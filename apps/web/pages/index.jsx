import { Button, Card } from 'react-bootstrap'

export default function Page() {
  return (
    <div>
      <h1 className="demo-head text-center py-3">
        Next.js Turbo SCSS Demo
      </h1>
      <Card className="m-3">
        <Card.Body>
          This is a Next.js project with Turbo and Scss.
        </Card.Body>
        <Card.Body>
          <ol className="mb-0">
            <li>Open `packages/client/styles/page/_home.scss`</li>
            <li>Change the .demo-head to red</li>
            <li>It will never compile again that mean hot reload not working</li>
          </ol>
        </Card.Body>
        <Card.Body>
          <Button>Foo</Button>
          <Button>Bar</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
