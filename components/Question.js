import React from "react";

const Question = () => {
  return (
    <div>
      <section className="text-black">
        <div className=" py-2 mx-36">
          <div className="text-center my-6">
            <h1 className="text-3xl font-bold text-left font-bebas text-black mb-6 after:bg-gold after:absolute after:bottom-[450px] after:h-[3px] after:w-12 after:-ml-36 before:bg-fonce before:w-10 before:absolute before:h-[3px] before:-mt-1.5 before:-ml-6">
              Foires aux Questions
            </h1>
            <p className="text-base text-left mx-auto">
              Les questions les plus fréquentes sur le fonctionnement de
              DIARRA'B et ce qui peut vous être utile
            </p>
          </div>
          <div className="flex mx-2">
            <div className="w-3/4 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold py-2 px-4">
                  Comment choisir la bonne taille ?
                </summary>

                <span className="text-sm py-1 font-nova px-6 mx-auto flex">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold py-2 px-4">
                  Quels sont les modes de paiement acceptés de la boutique ?
                </summary>

                <span className="text-sm py-1 font-nova px-6 mx-auto flex">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  py-2 px-4">
                  Comment faire si l’article souhaité n’est plus disponible en
                  ligne ?
                </summary>

                <span className="text-sm py-1 font-nova px-6 mx-auto flex">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  py-2 px-4">
                  Comment utiliser mon code promotionnel ?
                </summary>

                <span className="text-sm py-1 font-nova px-6 mx-auto flex">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  py-2 px-4">
                  Combien de temps faut-il pour que je reçoive ma commande ?
                </summary>

                <span className="text-sm py-1 font-nova px-6 mx-auto flex">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  py-2 px-4">
                  Quels sont les moyens de paiememnt disponibles ?
                </summary>

                <span className="text-sm py-1 font-nova px-6 mx-auto flex">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Question;
