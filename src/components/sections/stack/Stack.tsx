import './Stack.css';
import net from '../../../assets/net.png';
import atom from '../../../assets/atom.png';
import html from '../../../assets/html.png';
import css from '../../../assets/css.png';
import azure from '../../../assets/azure.png';

const Stack = () => {
    return (
        <section id="tech-stack">
            <div className="stack-container">
                <h1>Tech Stack</h1> 
                <div className="stack-list-large">
                    <div className="stack-item">
                        <img src={net} />
                        <p>.NET</p>
                    </div>
                    <div className="stack-item">
                        <img src={azure} />
                        <p>Azure</p>
                    </div>
                    <div className="stack-item">
                        <img src={html} />
                        <p>HTML</p>
                    </div>
                    <div className="stack-item">
                        <img src={css} />
                        <p>CSS</p>
                    </div>
                    <div className="stack-item">
                        <img src={atom} />
                        <p>React</p>
                    </div>
                </div>
                <div className="stack-list-small">
                    <div className="sl-bot">
                        <div className="stack-item">
                            <img src={html} />
                            <p>HTML</p>
                        </div>
                        <div className="stack-item">
                            <img src={css} />
                            <p>CSS</p>
                        </div>
                        <div className="stack-item">
                            <img src={atom} />
                            <p>React</p>
                        </div>
                    </div>
                    <div className="sl-top">
                        <div className="stack-item">
                            <img src={net} />
                            <p>.NET</p>
                        </div>
                        <div className="stack-item">
                            <img src={azure} />
                            <p>Azure</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stack;