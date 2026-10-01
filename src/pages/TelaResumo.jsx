import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TelaResumo.module.css';
import ResumoItemLinha from '../components/ResumoItemLinha';

export default function TelaResumo({ carrinho, setCarrinho, executarComAtraso, setItemParaModificar, setIndiceModificacao }) {
  const navegar = useNavigate();
  const totalCarrinho = carrinho.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Função para remover um item do carrinho usando .filter()
  const removerItem = (indiceParaRemover) => {
    executarComAtraso(() => {
      const novoCarrinho = carrinho.filter((_, indice) => indice !== indiceParaRemover);
      setCarrinho(novoCarrinho);
    });
  };

  return (
    <div className={styles["tela-review"]}>
      <h2>Seu pedido está correto?</h2>

      <div className={styles["lista-review"]}>
        <div className={styles["nota-fiscal-container"]}>
          {carrinho.map((item, indice) => (
            <ResumoItemLinha 
              key={item.idCarrinho || indice}
              item={item}
              indice={indice}
              carrinho={carrinho}
              setCarrinho={setCarrinho}
              removerItem={removerItem}
              executarComAtraso={executarComAtraso}
              setItemParaModificar={setItemParaModificar}
              setIndiceModificacao={setIndiceModificacao}
              navegar={navegar}
            />
          ))}
        </div>
      </div>

      <div className={styles["review-rodape-cinza"]}>
        <div className={styles["review-totais"]}>
          <span>Total R$ {totalCarrinho.toFixed(2).replace('.', ',')}</span>
        </div>
        <div className={styles["review-botoes-finais"]}>
          <button className={styles["btn-retornar"]} onClick={() => executarComAtraso(() => navegar('/menu'))}>Retornar</button>
          <button className={styles["btn-pagar"]} onClick={() => executarComAtraso(() => navegar('/pagamento'))}>Pagar</button>
        </div>
      </div>
    </div>
  );
}