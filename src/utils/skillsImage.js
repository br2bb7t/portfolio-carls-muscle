import aumento_masa_muscular from '../assets/svg/skills/aumento_masa_muscular.svg'
import bienestar_y_salud from '../assets/svg/skills/bienestar_y_salud.svg'
import bajar_de_peso from '../assets/svg/skills/bajar_de_peso.svg'
import rendimiento_deportivo from '../assets/svg/skills/rendimiento_deportivo.svg'
import marcar_y_tonificar from '../assets/svg/skills/marcar_y_tonificar.svg'


export const skillsImage = (skill) => {
    const skillID = skill;
    switch (skillID) {
        case 'Bajar de Peso':
            return bajar_de_peso;
        case 'Marcar y Tonificar':
            return marcar_y_tonificar;
        case 'Aumento Masa Muscular':
            return aumento_masa_muscular;
        case 'Rendimiento Deportivo':
            return rendimiento_deportivo;
        case 'Bienestar y Salud':
            return bienestar_y_salud;
        default:
            break;
    }
}
