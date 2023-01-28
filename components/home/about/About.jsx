

export const About = () => {

    return (
        <>
            <h1>Sobre mi</h1>

            <div className="info-autor">
                <div className="title-info-autor">
                    <picture>
                        <img src="/img/foto.png" alt="Aqui muestro una imagen de mi persona" />
                    </picture>
                    <h2>ArmandoCode</h2>
                </div>
                <p>
                    Estudiante de Ing. Informática (2020 - 2023), Tengo más de 2 años especializandome en el área de 
                    desarrollo web. Dedico gran parte de mi tiempo a crecer como desarrollador, generando experiencia
                    desde la construcción de distintos proyectos. Y por otra parte, compartiendo todo recurso que le pueda
                    ser de ayuda a cualquier otro desarrollador. <em>{`"Cuando uno enseña, dos aprenden."`}</em> - <strong>Robert Heinlein</strong>
                </p>
            </div>
        </>
    )

}