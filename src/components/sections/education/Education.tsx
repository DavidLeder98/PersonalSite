import './Education.css';

const Education = () => {
    return (
        <section id="education">
            <div className="edu-container">
                <h1>Education and Prior Work Experience</h1>
                <div className="edu-row">
                    <div className="edu">
                        <h2>Degree:</h2>
                        <p>University of Novi Sad, Faculty of Medicine:</p>
                        <p>Bachelor's in Radiologic Technology</p>
                        <h2>Experience:</h2>
                        <ul>
                            <li>4 Years as an ICU / Resuscitation Tech. at the Clinical Centre of Vojvodina</li>
                            <li>1 Year as a Nuclear Medicine Tech. at the Institute of Oncology of Vojvodina</li>
                        </ul>
                    </div>
                    <div className="why">
                        <h2>Why I'm moving to IT:</h2>
                        <p>Over the years as a Medical Tech, be that in critical care or radiology, I’ve found myself drawn to technology. Learning to code has been a way for me to turn that curiosity into a new career path.</p>
                        <p>I love the challenge of building something from scratch and the satisfaction of seeing it work. I’m excited to transition into IT, where I can combine my problem-solving skills with a passion for creating and learning.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;