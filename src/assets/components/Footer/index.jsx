export default function Footer() {
    return (
        <footer className={`fixed right-[41vw] top-[94vh] flex justify-center `}>
            <div className="flex gap-1 items-center">
                <a href="https://www.facebook.com/profile.php?id=100008378767067">
                    <img src="./icons8-facebook-64.png" alt="Facebook" />
                </a>
                <a href="https://github.com/gumoura82">
                    <img src="./icons8-github-50.png" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/gustavo-moura-206b9127a/">
                    <img src="./icons8-linkedin-50.png" alt="LinkedIn" />
                </a>
                <a href="#">
                    <img src="./icons8-twitter-50.png" alt="Twitter" />
                </a>
            </div>
            <div className="svg-container">
                <svg className="svg-container-items" width="100" height="1" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="0" x2="100" y2="0" stroke="#FFFFFF" strokeWidth="1" />
                </svg>
            </div>
            <div className="flex items-center text-1">
                <p className="text-white text-lg">Follow me</p>
            </div>
        </footer>
    );
}