# Inventaire des logiciels libres
## Gouvernement du Québec

Inventaire 2017 des logiciels libres utilisés dans l'administration publique québécoise

Disponible à l'interne: <https://di.collaboration.gouv.qc/bibliotheque/documents/2018/03/inventaire-des-logiciels-libres>

## Extraction des données
Ce script extrait les données du PDF et génère la structure suivante:

```
[
  {
    "type": "Accès et contrôle de poste de travail à $
    "nom": "Putty",
    "installations": "500+",
    "low": 500,
    "high": 1000,
    "org": "Centre de services partagés du Québec"
  },
  {
    "type": "Accès et contrôle de poste de travail à $
    "nom": "Putty",
    "installations": "500+",
    "low": 500,
    "high": 1000,
    "org": "Revenu Québec"
  },
  ...
]
```

## Visualisation des données
Quelques graphiques sont aussi disponibles. Voir les [sources sur github](https://github.com/millette/inventaire-ll-gouv-qc) et cette [démonstration préliminaire](https://src-yusucsprbo.now.sh/).
