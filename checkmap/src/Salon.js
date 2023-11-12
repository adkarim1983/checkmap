//// Importation des modules nécessaires React et react-bootstrap
import React from 'react';
import { Card } from 'react-bootstrap';
import './style.css'; // Importez le fichier CSS de style
// On définie  le composant Salon:
const Salon = () => {
  // Infos du salon (titre, image, description, lien Google Maps)
  const salonInfo = {
    titre: "SALON EMPREINTE",
    photoSrc: "https://salonempreinte.ma/wp-content/uploads/2020/11/0-2-2.jpg", 
    description: "Bienvenue chez EMPREINTE, Salon de coiffure où l'élégance masculine prend vie. Découvrez un service de coiffure personnalisé dans une atmosphère raffinée, où chaque coupe et chaque barbe reflètent votre style distinctif.",
    adresseMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.9326764934553!2d-7.6264809245971525!3d33.55512547334822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d6f15b9e2cb%3A0xb4a7ba82d2e4a855!2sSalon%20EMPREINTE!5e0!3m2!1sfr!2sma!4v1699809556030!5m2!1sfr!2sma"
  };

  return (
    <div className="Salon">
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={salonInfo.photoSrc} alt="Salon" />
        <Card.Body>
          <Card.Title className="SalonCardTitle">{salonInfo.titre}</Card.Title>
          <Card.Text>{salonInfo.description}</Card.Text>
        </Card.Body>
      </Card>
      <br />
      <h3>Nous rendre visite:</h3>
    </div>
  );
};
// Exportation du composant Salon
export default Salon;
