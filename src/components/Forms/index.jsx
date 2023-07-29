import { useState } from "react";

export default function Forms() {
  // state -> [valor, funçãoModificadora]
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  
  const handleChangeEmail = (ev) => {
    setEmail(ev.target.value);
  }

  const handleChangeText = (ev) => {
    setText(ev.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, text);
    setEmail('');
    setText('');
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
                  onChange={handleChangeEmail}
                />
              </div>
            </div>

            <div>
              <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                  Comentário
              </label>
                  <textarea
                    class="
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
                    onChange={handleChangeText}
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
        </div>
      </div>
    </>
  )
}
