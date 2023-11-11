import React, { useEffect, useRef } from 'react';
import './myToolkit.scss';

export default function MyToolkit() {
    const toolkitIconsRef = useRef(null);
    const iconsData = useRef([]);
    const jarRadius = 225; // half of the width/height of the .toolkit-icons div

    const moveIcons = () => {
        const toolkitIconsElement = toolkitIconsRef.current;
        const icons = toolkitIconsElement.children;

        Array.from(icons).forEach((icon, index) => {
            let { x, y, dx, dy } = iconsData.current[index];

            // Update position
            x += dx;
            y += dy;

            // Bounce off the edges of the jar (circle)
            let distanceFromCenter = Math.sqrt(
                Math.pow(x + 25 - jarRadius, 2) + Math.pow(y + 25 - jarRadius, 2)
            );  // 25 is half the width/height of the icons

            if (distanceFromCenter > jarRadius - 25) { // 25 accounts for half the size of the icon
                dx = -dx;
                dy = -dy;
            }

            // Check for collisions with other icons
            iconsData.current.forEach((data, idx) => {
                if (index !== idx) {
                    const distance = Math.sqrt(
                        (x - data.x) * (x - data.x) + (y - data.y) * (y - data.y)
                    );
                    if (distance < 50) {
                        dx = -dx;
                        dy = -dy;
                    }
                }
            });

            // Update the positions
            iconsData.current[index] = { x, y, dx, dy };
            icon.style.left = `${x}px`;
            icon.style.top = `${y}px`;
        });
    };

    useEffect(() => {
        if (!toolkitIconsRef.current) return;
        const icons = toolkitIconsRef.current.children;

        // Initialize the positions and velocities
        Array.from(icons).forEach(() => {
            let x, y;
            do {
                x = Math.floor(Math.random() * 400);  // Adjusted size for jar's inner area
                y = Math.floor(Math.random() * 400);
                var distanceFromCenter = Math.sqrt(
                    Math.pow(x + 25 - jarRadius, 2) + Math.pow(y + 25 - jarRadius, 2)
                );
            } while (distanceFromCenter > jarRadius - 25);

            const dx = (Math.random() - 0.5) * 4;
            const dy = (Math.random() - 0.5) * 4;
            iconsData.current.push({ x, y, dx, dy });
        });

        const intervalId = setInterval(moveIcons, 50);  // Decrease 50 for faster movement
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="toolkit" id="toolkit">
            <h2>My Toolkit</h2>
            <div className="toolkit-icons" ref={toolkitIconsRef}>
                <img src={`${process.env.PUBLIC_URL}/assets/icons/python.svg`} alt="Python" className="tool" />
                <img src={`${process.env.PUBLIC_URL}/assets/icons/java.svg`} alt="Java" className="tool" />
                <img src={`${process.env.PUBLIC_URL}/assets/icons/c.svg`} alt="C" className="tool" />
                <img src={`${process.env.PUBLIC_URL}/assets/icons/terraform.svg`} alt="Terraform" className="tool" />
                <img src={`${process.env.PUBLIC_URL}/assets/icons/vsc.svg`} alt="Visual Studio Code" className="tool" />
                <img src={`${process.env.PUBLIC_URL}/assets/icons/vs.svg`} alt="Visual Studio" className="tool" />
                <img src={`${process.env.PUBLIC_URL}/assets/icons/c++.svg`} alt="C++" className="tool" />
                <img src={`${process.env.PUBLIC_URL}/assets/icons/azure.svg`} alt="azure" className="tool" />
                <img src={`${process.env.PUBLIC_URL}/assets/icons/MSTest.png`} alt="MSTest" className="tool" />
                <img src={`${process.env.PUBLIC_URL}/assets/icons/pipeline.svg`} alt="Azure Pipeline" className="tool" />
                <img src={`${process.env.PUBLIC_URL}/assets/icons/teams.svg`} alt="MS Teams" className="tool" />
                <img src={`${process.env.PUBLIC_URL}/assets/icons/csv.svg`} alt="CSV" className="tool" />
                <img src={`${process.env.PUBLIC_URL}/assets/icons/terminal.svg`} alt="Terminal" className="tool" />
                <img src={`${process.env.PUBLIC_URL}/assets/icons/powershell.svg`} alt="Powershell" className="tool" />
                <img src={`${process.env.PUBLIC_URL}/assets/icons/txt.svg`} alt="TXT" className="tool" />
                <img src={`${process.env.PUBLIC_URL}/assets/icons/react.svg`} alt="React" className="tool" />
                <img src={`${process.env.PUBLIC_URL}/assets/icons/github.svg`} alt="github" className="tool" />
                <img src={`${process.env.PUBLIC_URL}/assets/icons/git.svg`} alt="Git" className="tool" />
            
            </div>
        </div>
    );
    
}


