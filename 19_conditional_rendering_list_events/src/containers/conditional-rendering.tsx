type reactDocLinkProps = { enable?: boolean };
function ReactDocumentationLink({ enable = true }: reactDocLinkProps) {
  if (enable) {
    return (
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    );
  }
  return <p>Learn React</p>;
}

function ReactDocumentationLink2({ enable = true }: reactDocLinkProps) {
  return enable ? (
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  ) : (
    <p>Learn React</p>
  );
}

function ReactDocumentationLink3({ enable = true }: reactDocLinkProps) {
  return (
    <div>
      {enable ? (
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      ) : (
        <p>Learn React</p>
      )}
    </div>
  );
}

type reactTextProps = { text?: "Edit" | "Add" | "Remove" };
function Text({ text = "Edit" }: reactTextProps) {
  switch (text) {
    case "Add":
      return (
        <p>
          Add <code>src/App.tsx</code> and save to reload.
        </p>
      );
    case "Remove":
      return (
        <p>
          Remove <code>src/App.tsx</code> to reload.
        </p>
      );
    default:
      return (
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      );
  }
}

type props = { enableText?: boolean };
export function ConditionalRendering({ enableText = true }: props) {
  return (
    <>
      {enableText && <Text text="Remove" />}
      <ReactDocumentationLink3 enable={false} />
    </>
  );
}

// suggestion
export function ConditionalRendering2({ enableText = true }: props) {
  return (
    <>
      <div className={!enableText ? "hidden" : ""}>
        <Text text="Remove" />
      </div>

      <ReactDocumentationLink3 enable={false} />
    </>
  );
}
