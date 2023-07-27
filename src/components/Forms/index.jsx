export default function Forms() {
  return (
    <>
    <div className="title">
      <h1>Seção de Comentários</h1>
    </div>
    <div className="inputs">
      <div className="input-email">
        <label className="email">E-mail</label>
        <br/>
        <input type="email" id="email"/>
      </div>
      <div className="input-text">
        <label className="comment">Comentário</label>
        <br/>
        <textarea id="text" ></textarea>
      </div>  
    </div>
    </>    
  )
}