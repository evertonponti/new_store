import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://images8.kabum.com.br/produtos/fotos/85198/85198_index_gg.jpg"
          alt="SSD Kingston A400, 480GB, SATA, Leitura 500MB/s, Gravação 450MB/s - SA400S37/480G"
        />
        <strong>SSD Kingston A400, 480GB, SATA, Leitura 500MB/s, Gravação 450MB/s - SA400S37/480G</strong>
        <span>R$299,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 1
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images5.kabum.com.br/produtos/fotos/102485/notebook-gamer-acer-aspire-nitro-5-intel-core-i7-7700hq-8gb-ssd-128gb-1tb-nvidia-geforce-gtx-1050-4gb-endless-os-15-6-an515-51-71a7_1562618380_gg.jpg"
          alt="Notebook Gamer Acer Aspire Nitro 5, Intel Core i7-7700HQ, 8GB, SSD 128GB + 1TB, NVIDIA GeForce GTX 1050 4GB, Endless OS, 15.6´ - AN515-51-71A7"
        />
        <strong>Notebook Gamer Acer Aspire Nitro 5, Intel Core i7-7700HQ, 8GB, SSD 128GB + 1TB, NVIDIA GeForce GTX 1050 4GB, Endless OS, 15.6´ - AN515-51-71A7</strong>
        <span>R$3.899,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images8.kabum.com.br/produtos/fotos/94248/94248_1515182853_index_gg.jpg"
          alt="Headset Gamer Razer Electra V2 7.1 Virtual - USB - RZ04-02220100-R3U1"
        />
        <strong>Headset Gamer Razer Electra V2 7.1 Virtual - USB - RZ04-02220100-R3U1</strong>
        <span>R$299,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 2
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images5.kabum.com.br/produtos/fotos/107545/processador-amd-ryzen-5-1600-cache-19mb-3-2ghz-3-6ghz-max-turbo-am4-yd1600bbafbox_processador-amd-ryzen-5-1600-cache-19mb-3-2ghz-3-6ghz-max-turbo-am4-yd1600bbafbox_1573653285_gg.jpg"
          alt="Processador AMD Ryzen 5 1600, Cache 19MB, 3.2GHz (3.6GHz Max Turbo), AM4 - YD1600BBAFBOX"
        />
        <strong>Processador AMD Ryzen 5 1600, Cache 19MB, 3.2GHz (3.6GHz Max Turbo), AM4 - YD1600BBAFBOX</strong>
        <span>R$599,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 1
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}