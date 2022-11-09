import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x7B3b38be270C4a24C97Ad47Cf21ee01451F823A2'
);

export default instance;