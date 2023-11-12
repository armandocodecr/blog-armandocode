

export const About = () => {

    return (
        <>
            <h1>Sobre mi</h1>

            <div className="info-autor" data-aos="fade-right">
                <div className="title-info-autor">
                    <picture>
                        <img src="/img/foto.png" alt="Aqui muestro una imagen de mi persona" />
                    </picture>
                    <h2>ArmandoCode</h2>
                </div>
                <p>
                Hola, soy Armando Murillo, y llevo más de 3 años especializándome en el área del desarrollo de software. 
                Mi enfoque es crecer y evolucionar como desarrollador, trabajando en proyectos variados y compartiendo 
                recursos que pueden beneficiar a otros en el campo del desarrollo de software. 
                    <em>{`"Cuando uno enseña, dos aprenden."`}</em> - <strong>Robert Heinlein</strong>
                </p>
            </div>
        </>
    )

}