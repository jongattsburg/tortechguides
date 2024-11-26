export const mdOptions = {
  overrides: {
    p: {
      component: "p",
      props: {
        style: { marginBottom: "1rem" }, // space between paragraphs
      },
    },
    br: {
      component: "br",
      props: {},
    },
    ul: {
      component: "ul",
      props: {
        style: {
          paddingLeft: "2rem",
          marginBottom: "1rem",
          listStyle: "initial",
        }, // add padding to unordered lists
      },
    },
    ol: {
      component: "ol",
      props: {
        style: {
          paddingLeft: "2rem",
          marginBottom: "1rem",
          listStyle: "initial",
        }, // add padding to ordered lists
      },
    },
    li: {
      component: "li",
      props: {
        style: { marginBottom: "0.5em" }, // list items spacing
        children: (props) => (
          <span style={{ display: "inline-block" }}>
            {/* dash decoration only for unordered lists */}
            {props.parentType === "ul" && (
              <span style={{ marginRight: "8px" }}>-</span>
            )}
            {props.children}
          </span>
        ),
      },
    },
    a: {
      component: (props) => (
        <a
          {...props}
          style={{
            color: "white",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        />
      ),
    },
  },
};

export const titleAndContentFromMd = (text) => {
  const lines = text.split("\n"); 
  
  const firstLine = lines[0].trim();
  // splice/remove the first line from the remaining lines
  lines.splice(0, 1);

  // join the remaining lines back into a single markdown string
  const remainingMarkdown = lines.join("\n");

  const match = firstLine.match(/^(\*\*[^*]+\*\*|__[^_]+__)$/); // first line: full line must be bold

  if (match) {
    // remove the surrounding ** or __ and return the text inside
    return {strTitle: match[0].slice(2, -2), contentMd: remainingMarkdown};
  }

  return null; 
}
