import { useState } from 'react';

export default function Forms() {
  // state -> [valor, funçãoModificadora]
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);
  
  const handleSubmit = (ev) => {
    ev.preventDefault();

    const newComment = {
      id: Math.floor(Math.random * 1000000),
      email,
      text,
      createdAt: new Date()
    }

    // renderiza na telao novo comentário depois, todos os antigos
    setComments((state) => [newComment, ...state])
    setEmail("");
    setText("");
  };


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Seção de Comentários
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                Comentário
              </label>
              <textarea
                className="
                  mt-1
                  block
                  w-full
                  rounded-md
                  border-0
                  shadow-sm
                  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                "
                rows="3"
                value={text}
                onChange={(ev) => setText(ev.target.value)}
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Enviar comentario
              </button>
            </div>
          </form>

          <section className="mt-6 text-sm font-medium">
              {comments.length > 0
               ? (
                comments.map((comment) => (
                  <div key={comment.id}>
                    <h3>{comment.email}</h3>
                    <span>Em {comment.createdAt.toLocaleString()}</span>
                    <p>{comment.text}</p>
                  </div>
                ))
               ) : (
                  <p>Seja o primeiro a comentar!</p>
               )}
          </section>
        </div>
      </div>
    </>
  )
}
