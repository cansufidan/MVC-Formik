import { SiCoinmarketcap } from 'react-icons/si';
import { RiStockFill } from 'react-icons/ri';
import { FaPercent } from 'react-icons/fa';
import { MdPriceChange, MdEventAvailable } from 'react-icons/md';

export class InfoLabel {
  constructor(coin, history) {
    this.coin = coin;

    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: 'Market Hacmi',
        value: this.coin?.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />, 
        label: 'Supply',
        value: this.coin?.supply,
      },
      {
        icon: <MdPriceChange />, 
        label: 'Fiyat (USD)',
        value: this.coin?.priceUsd,
      },
      {
        icon: <FaPercent />, 
        label: '24 Saatlik Değişim (%)',
        value: this.coin?.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: '24 Saatlik Hacim (USD)',
        value: this.coin?.volumeUsd24Hr,
      },
    ];

    this.chartData = {
      labels: history?.map((i) =>
        new Date(i.date).toLocaleDateString()
      ),
      datasets: [
        {
          label: 'Fiyat Değeri',
          data: history?.map((i) => Number(i.priceUsd).toFixed(2)),
        },
      ],
    };
  }
}