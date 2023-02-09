import React from "react";
import Head from "next/head";

const about = () => {
  return (
    <div>
      <Head>
        <title>DIARRA'B FASHION SHOP</title>
      </Head>
      <div className="relative">
        <img
          className="w-full h-[500px]"
          src="images/about/mima.png"
          alt="about"
        />
      </div>

      <div className="font-nova max-w-screen-sm mt-8 mb-4 ml-auto mr-auto text-xl text-center text-black">
        <p className="mb-4">
          <strong>DIARRA’B</strong> est une boutique de vente en ligne
          spécialisée dans la confection et la vente de tenues chiques et
          descentes pour femmes et enfants. Nous mettons à votre disposition une
          large gamme de tenues modernes, confortables, colorées et stylées avec
          qualité mais surtout à petit prix.
        </p>
        <p className="mb-4">
          La boutique <strong>DIARRA’B</strong> inspire la pétillance et la
          spontanéité et exprime son vestiaire à travers des valeurs qui lui
          tiennent à cœur : Féminité, modernité, élégance, pudeur.
        </p>
      </div>
      <div className="mb-14">
        <img src="images/banner1.png" alt="banner1" />
      </div>
      <div className="grid grid-cols-[1fr_400px] gap-10 mr-auto ml-auto mb-8 max-w-screen-lg">
        <div className="">
          <h2 className="mima font-bebas text-xl text-center">
            Sokhna Diarra Bodian Faye
          </h2>

          <h3 className="mb-3 mt-2 font-nova font-bold text-sm text-center">
            Ingénieure électromécanique et Créatrice de DIARRA’B
          </h3>
          <p className="font-nova  text-sm text-center mb-4">
            Pour ne pas sombrer dans la dépression post parfum après avoir perdu
            mon enfant en Août 2019 à 7mois de grossesse💔👼. J’ai profité́ des
            congés de maternité́ pour lancer DIARRA’B en septembre 2019 soit un
            mois après mon accouchement par voie normale d’un bébé́ mort né.🥺
            Psychologiquement il fallait être forte, se relever essayer au
            maximum de ne pas y penser, se surpasser, dépasser mais jamais
            oublier, une douleur si profonde, un « yakar bou tass » comme on
            dit.
          </p>
          <p className="font-nova text-sm text-center mb-4">
            Début 2020 une nouvelle grossesse, une qui m’en a fait voir de
            toutes les couleurs, une grossesse difficile avec complication, ce
            qui m’a poussé́ à faire cette pause de presque un an aussi bien sur
            le plan professionnel qu’entrepreneurial. C’était une période assez
            difficile et corona vint s’y ajouter mais Alhamdoulillah on a
            survécu. Août 2020, soit 1an après la perte de mon bébé, naquit mon
            fils Ahmadou, un cadeau du ciel, un miracle, ma raison d’être. Avec
            cette grossesse j’ai su que DIEU était au contrôle de tout.❤️ Les
            médecins avaient fait leur diagnostic, Dieu décida au dernier moment
            que tout allait bien se passer.
          </p>
          <p className="font-nova text-sm text-center mb-2">
            Janvier 2021, après un an d’absence, vous avez attendu, vous avez
            aidé́ à relancer la marque et le train des choses continua comme si
            rien été. Et pour cela, je ne remercierai jamais assez ma fidèle
            clientèle. En contrepartie je ne peux qu’essayer de rendre
            accessible des tenues chiques et classes à la portée de toutes les
            bourses. Voilà̀ DIARRA’B c’est plus qu’une passion pour moi. C’est
            pour rendre fière mon ange au ciel, ma fille Sokhna Diarra. C’est
            pour prouver à toutes les femmes qu’on peut être femme, mère épouse
            avec une cicatrice profonde mais toujours tenir debout et avancer...
          </p>
        </div>
        <div className="">
          <img
            className="h-[450px]"
            src="images/about/diarra2.png"
            alt="diarra"
          />
        </div>
      </div>
    </div>
  );
};

export default about;
