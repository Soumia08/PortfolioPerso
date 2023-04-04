import React from "react";
import ME from './Pictures/me.jpg'
import "./Presentation.css";
export default function Presentation() {
  return (
    <div class="container">
    
    <div class="Title"> 
      Get to know  
      <h1> About me </h1>
     </div>
  <div class="Card">   

      <img src={ME} alt=" me " /> 


    <h3>   Salut, je suis Soumia Slimani, après des années de recherche en simulation numérique et développement logiciel, je me suis dirigées vers le domaine du développement web.

Le choix de ce domaine était basé d'une part, sur le fait d'utiliser des techniques de résolution de problème, la créativité dans la recherche de la solution, qu'on trouve en mathématiques ainsi que dans la partie back pour le développement d'application web. D'autre part, la conception d'objets ou de produits concerts, le design et architecture du site afin de mettre en place les solutions techniques nécessaires, qu'on peut voir immédiatement en partie front de développement d'app web . 

J'ai suivi une formation accéléré chez un centre de formation, où j'ai appris les bases de la programmation en java et reactjs pour faire monter un projet, et j'ai pu donc réaliser un projet final back et front, ...
Après ma formation, je continue tjr  à apprendre et à faire d'autres projets que vous trouverais dans la partie...</h3>
      </div>
  </div>
    
  );
}
