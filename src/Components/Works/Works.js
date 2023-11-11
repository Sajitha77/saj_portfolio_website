import './works.scss';

export default function Works() {

    const placeholders = [1, 2, 3, 4, 5, 6, 7, 8]; // You can increase this for more placeholders

    return (
        <div className="works" id="works">
            <h1>My Projects</h1>
            <div className="projectsContainer">
                {placeholders.map((placeholder) => (
                    <div className="projectCard" key={placeholder}>
                        <div className="projectImage">
                            <img src="/assets/placeholder.svg" alt={`Project ${placeholder}`} /> 
                        </div>
                        <h3>Project Title {placeholder}</h3>
                        <p>Short project description will go here. This is just a placeholder text.</p>
                        <a href="#!" className="githubLink">Link to GitHub</a> 
                        {/* "#" is a placeholder href, replace it with your actual GitHub repo link when you have projects */}
                    </div>
                ))}
            </div>
        </div>
    );
}
