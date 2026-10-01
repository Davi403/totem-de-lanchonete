import React from 'react';
import styles from './VariacaoProduto.module.css';
import ProdutoCard from './ProdutoCard';

export default function VariacaoProduto({ produtoAtivo, selecionarVariacao, executarComAtraso, setProdutoAtivo }) {
  return (
    <div className={styles["options-container"]}>
      <button className={styles["btn-voltar-inline"]} onClick={() => executarComAtraso(() => setProdutoAtivo(null))}>Voltar</button>
      <h2>Escolha a opção:</h2>
      <div className={styles["produtos-grid"]}>
        {produtoAtivo.category.name.includes('Lanches') ? (
          <>
            <ProdutoCard
              produto={produtoAtivo}
              onClick={() => selecionarVariacao('Só lanche', 0)}
              nomeOpcao="Só lanche"
            />
            <ProdutoCard
              produto={produtoAtivo}
              onClick={() => selecionarVariacao('Combo (+R$15)', 15)}
              nomeOpcao="Combo (+R$15)"
              precoExtra={15}
            />
          </>
        ) : produtoAtivo.category.name === 'Bebidas' ? (
          <>
            <ProdutoCard
              produto={produtoAtivo}
              onClick={() => selecionarVariacao('Pequeno', 0)}
              nomeOpcao="Pequeno"
            />
            <ProdutoCard
              produto={produtoAtivo}
              onClick={() => selecionarVariacao('Médio', 3.00)}
              nomeOpcao="Médio"
              precoExtra={3.00}
            />
            <ProdutoCard
              produto={produtoAtivo}
              onClick={() => selecionarVariacao('Grande', 5.00)}
              nomeOpcao="Grande"
              precoExtra={5.00}
            />
          </>
        ) : (
          <ProdutoCard
            produto={produtoAtivo}
            onClick={() => selecionarVariacao('Tamanho Único', 0)}
            nomeOpcao="Tamanho Único"
          />
        )}
      </div>
    </div>
  );
}