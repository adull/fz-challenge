import ReactDOM from "react-dom/server"

export default function CustomErrorBoundary(props) {
  try {
    const html = ReactDOM.renderToStaticMarkup(props.children)
    return <div dangerouslySetInnerHTML={{__html: html}} />
  } catch(e) {
    return (
      <h1 id="component-error">
        Problem with the component - { e.toString() }
      </h1>
    )
  }
}