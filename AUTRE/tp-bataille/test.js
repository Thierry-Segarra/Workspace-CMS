function Sous_marin(nom,type,longeur,plonge,vitesse,equipage,autonomie) {
    this.nom = nom;
    this.type = type;
    this.longeur = longeur;
    this.plonge = plonge;
    this.vitesse = vitesse;
    this.equipage  = equipage;
    this.autonomie = autonomie;
  };


  function triomphant(){
      nom = 'triomphant';
      type = "lanceur d'engin"
      longeur = 138;
      plonge = '10 000 tonnes';
      vitesse = '28';
      equipage = '70';
      autonomie = '70 à 90 jour';

    Sous_marin.call(this, nom,type,longeur,plonge,vitesse,equipage,autonomie);

    this.missile_nucléaire = 10

  };

  function rubis(){
    nom = 'rubis';
    type = "d'attaque"
    longeur = 73;
    plonge = '2 600 tonnes';
    vitesse = '23';
    equipage = '68';
    autonomie = '45 à 60 jour';

    Sous_marin.call(this, nom,type,longeur,plonge,vitesse,equipage,autonomie);

    this.Missile_antinavires = 5;
    this.Mines = 10;
  };

  function Suffren(){
      nom = 'Suffren';
      type = "d'attaque"
      longeur = 99;
      plonge = '5 300 tonnes';
      vitesse = '25';
      equipage = '63';
      autonomie = '70 à 90 jour';

    Sous_marin.call(this, nom,type,longeur,plonge,vitesse,equipage,autonomie);
    this.Missile_antinavires = 5;
    this.Missile_croisieres = 5;
    this.Mines = 10;
} 