export default function Card({props}){
    return(
    <>
    {
        props.map((dados, index) => (
            <div className="card-full w-[50vw]" key={index}>
                <a href={dados.github} target="blanck">
                    <img className="img-card-edit" src={dados.img} alt="" />
                </a>
                <div className="flex justify-between align-middle p-5">
                    <div className="text-white ">
                        <h1 className="text-red-600 text-xl">{dados.titulo}</h1>
                        <p>{dados.subtitulo}</p>
                    </div>
                    <img className="w-[50px] h-[50px]" src={dados.img2} alt="" />
                </div>
            </div>
        )) 
            
        
    }
    </>
    )
}