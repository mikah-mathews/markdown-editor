import { useState } from 'react';
import { Remarkable } from 'remarkable';

const md = new Remarkable();

function App() {
  const [text, setText] = useState("");
  return (
    <>
      <main className="p-5 md:max-w-4x1 md:mx-auto">
        <h1 className="text-gray-900 text-4x1 text-center font-bold">
          Markdown Editor
        </h1>
        <article>
          <label htmlFor="markdown" className="mt-5 mb-3 block">
            Type in some markdown
          </label>
          <textarea
            name="textarea"
            id="markdown"
            cols="30"
            rows="10"
            value={text}
            required
            placeholder="enter some markdown"
            className="bg-white p-5 rounded shadow w-full"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <h3>Output</h3>
          <div dangerouslySetInnerHTML={{__html:md.render(text)}}></div>
        </article>
      </main>
    </>
  )
}

export default App;