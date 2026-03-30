import italyBigFlag from './assets/Icons/Flag_of_Italy.svg';
import usaBigFlag from './assets/Icons/Flag_of_the_United_States.svg';
import cubanBigFlag from './assets/Icons/Flag_of_Cuba.svg';

function ThreeFlagsSection ({ activeFlag, setActiveFlag }) {
    
    return (
        <section id="threeFlags" className="Country_Flags">
            <div 
                className={`flag-card ${activeFlag === "italy" ? "active" : ""}`}
                onClick={() => setActiveFlag("italy")}
            >
                <img src={italyBigFlag} alt="Italian flag hover" />
                <div className='overlayIT'>
                    <h5 className='flag-title'>Italian Pizza</h5>
                    <p>
                        If you want to try REAL Italian pizza,
                        <br />there's no better place to find traditional
                        <br />recipe</p>
                </div>
            </div>
            <div 
                className={`flag-card ${activeFlag === "usa" ? "active" : ""}`}
                onClick={() => setActiveFlag("usa")}
            >
                <img src={usaBigFlag} alt="USA flag hover" />
                <div className='overlayIT'>
                    <h5 className='flag-title'>USA Pizza</h5>
                    <p>
                        If you want to try REAL American pizza,
                        <br />there's no better place to find traditional
                        <br />recipe</p>
                </div>
            </div>
            <div 
                className={`flag-card ${activeFlag === "cuba" ? "active" : ""}`}
                onClick={() => setActiveFlag("cuba")} 
            >
                <img src={cubanBigFlag} alt="Cuban flag hover" />
                <div className='overlayIT'>
                    <h5 className='flag-title'>Cuban Pizza</h5>
                    <p>
                        If you want to try REAL Cuban pizza,
                        <br />there's no better place to find traditional
                        <br />recipe</p>
                </div>
            </div>
        </section>
    )
}

export default ThreeFlagsSection;