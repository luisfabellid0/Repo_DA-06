import React from 'react'
import materials from 'C:/Users/danin/OneDrive/Documentos/Desarrollo/experiencia6/src/materials.png'
import habi from 'C:/Users/danin/OneDrive/Documentos/Desarrollo/experiencia6/src/habi.jpeg'

function CharacterSkills() {
  return (
    <div className="skills-container">
      <h3>Habilidades de Furina</h3>
      <p>
        Ataque Normal: Realiza hasta 4 huelgas consecutivas. 
        Habilidad Elemental: Invita a los invitados del Salon Solitaire a participar en la batalla...
      </p>

      <div className="images-container">
        <div className="image-item">
          <h4>Materiales para la Ascensión y Talentos</h4>
          <img src={materials} alt="Materiales de Furina" className="image" />
        </div>

        <div className="image-item">
          <h4>Descripción de las Habilidades</h4>
          <img src={habi} alt="Habilidades de Furina" className="image" />
        </div>
      </div>
    </div>
  )
}

export default CharacterSkills
