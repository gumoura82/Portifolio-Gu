export default function Contato(){
    return(
        <section className="mr-[16%] ml-[16%]">
            <h1 className="tittle-sobre">Contato</h1>
            <div className="">
                <div className="flex justify-between align-middle ">
                    <div className="text-white mr-20">
                        <h3 className="text-2xl mb-8">Entre em Contato</h3>
                        <p className="mb-4"><strong>Email: </strong>gumoura82@gmail.com</p>
                        <p className="mb-6"><strong>Telefone: </strong>(11)98177-9952</p>
                        <p>Entre em contato comigo para colaborações, dúvidas ou sugestões. Estou disponível para discutir ideias, ajudar em projetos ou esclarecer qualquer questão que você possa ter. Estou à disposição e pronto para contribuir!</p>
                    </div>
                    <form className="flex align-middle flex-col w-[100%] " action="">
                        <input className="input-contato n1" type="text" placeholder="Name" id="name"/>
                        <input className="input-contato n2" type="email" placeholder="Email" id="email"/>
                        <input className="input-contato n3" type="text" placeholder="Mensagem" id="nensagem"/>
                        <button className="button-1">Enviar</button>
                    </form>
                </div>
            </div>
            
        </section>
    )
}