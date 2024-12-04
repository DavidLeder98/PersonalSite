import '../App.css';
import About from '../components/sections/about/About';
import Contact from '../components/sections/contact/Contact';
import Education from '../components/sections/education/Education';
import Projects from '../components/sections/projects/Projects';
import Stack from '../components/sections/stack/Stack';

const HomePage = () => {
    return (
        <div className="page">
            <About />
            <Projects />
            <Stack />
            <Education />
            <Contact />
        </div>
    );
};

export default HomePage;