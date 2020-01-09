import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTDE.</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://images1.kabum.com.br/produtos/fotos/94211/94211_1514308386_index_gg.jpg"
                alt="Placa-Mãe Gigabyte Z370M Aorus Gaming, Intel LGA 1151, mATX, DDR4"
              />
            </td>
            <td>
              <strong>Placa-Mãe Gigabyte Z370M Aorus Gaming, Intel LGA 1151, mATX, DDR4</strong>
              <span>R$677,67</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#d35400" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#d35400" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$677,67</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="5a2d82" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$259,80</strong>
        </Total>
      </footer>
    </Container>
  );
}