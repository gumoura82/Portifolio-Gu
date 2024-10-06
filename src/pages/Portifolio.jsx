import Card from "../assets/components/Card";

export default function Portifolio(){
    const dados = [
        {
            github: "https://github.com/gumoura82/Front-End-e-WebDev.git",
            img:"./GS - 1.png",
            img2:"./html-5.png",
            titulo:"Projeto Sensores Marinhos Site",
            subtitulo: "Foi um projeto onde tinhamos uma porposta que a faculdade me colocou para fazer..."
        },
        {
            github: "https://github.com/gumoura82/USFE---Web-and-Front.git",
            img:"./SP - 1.png",
            img2:"./Kiranshastry.png",
            titulo:"Site da Formula E",
            subtitulo: "Um site feito em react, proporcionando o aumento da popularidade da Formula E onde..."
        }
    ]

    return(
        <section className="portifolio pb-48">
            <h1 className="tittle-sobre">Portifólio</h1>
            <Card props={dados}/>
        </section>
    )
}