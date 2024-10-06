import { Link } from 'react-router-dom'
import Typewriter from '../assets/components/Typewriter'

export default function Home(){
    return(
        <section className="h-[93vh] py-10 px-20 flex justify-between items-center center bg-mainColor">
            <div className='flex flex-col '>
                <div className='flex flex-col justify-start'>
                    <h1 className='text-5xl text-white mb-4'>Eu sou o <strong className='text-red-600'>Gustavo Moura</strong></h1>
                    <h1 className='text-white text-5xl font-bold'>
                        B<Typewriter text="em-vindo ao meu CV" delay={300} infinite />
                    </h1>
                    <p className='text-white text-lg mt-16 max-w-xl'>Sinta-se à vontade para entrar em contato para projetos, perguntas ou feedback. Disponível e pronto para contribuir com o que precisar!</p>
                </div>
                <div className="flex mt-5 justify-start gap-2">
                    <Link className='button-1' to='/portifolio'>Meu Portifolio</Link>
                    <Link className='button-2' to='/contato'>Entre em Contato</Link>
                </div>
            </div>
            <img className='img-home' src="./img-gu.jpg" alt="imagem" />
        </section>
    )
}