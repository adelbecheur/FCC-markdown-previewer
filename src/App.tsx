
import { useState } from 'react'
import ReactMarkdown from 'react-markdown';
import './App.css'

function App() {
  const markdownText = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lasting) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `
  const [text, setText] = useState(markdownText)
 // const [renderedMarkdown, setRenderedMarkdown] = useState("")
  /*const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    const  textWithEscapedBacktics: string = e.target.value.replace(/`/g, '\\`');
     setText(textWithEscapedBacktics)
   }
  /*useEffect(() => {
    setRenderedMarkdown(text)
},[text])*/
  
  return (
    <>
      <h1>Markdown previewer</h1>
      <div className="boxes-container">
      <textarea   rows={10}
          cols={50} value={text} id="editor"  onChange={(e) => setText(e.target.value)}></textarea>
      <div id="preview" >
       <ReactMarkdown>
        {text} 
       </ReactMarkdown>
      </div>
      </div>
      

    </>
  )
}

export default App
